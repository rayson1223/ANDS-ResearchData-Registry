<?php


namespace ANDS\Registry\Providers\ServiceDiscovery;



use ANDS\RegistryObject;
use ANDS\RegistryObject\Identifier;
use ANDS\RegistryObject\Links;
use ANDS\Repository\RegistryObjectsRepository as Repo;

class ServiceDiscovery {


    public static function getServiceLinksForDatasource($data_source_id){

        $links = Links::where('data_source_id', $data_source_id)->get();
        return $links;
    }

    public static function getServiceLinksForRegistryObject(RegistryObject $record){

        $links = Links::where('registry_object_id', $record->id)->get();
        return $links;
    }


    public static function getServiceByRegistryObjectIds($ro_ids){

        $links = Links::wherein('registry_object_id', $ro_ids)->get();
        return $links;
    }
    
    
    public static function getServicesBylinks($url){
        $url = static::getBaseUrl($url);
        $links = Links::where('link','LIKE',"{$url}%")->get();
        return $links;
    }

    /*
     * generate payload containg the uuid of an OGC:* service and the current rifcs base 64 encoded
     *
     */

    public static function getServicesByKeys($keys){
        $payload = [];
        foreach($keys as $key)
        {
            $service = static::getPublishableService($key);
            if($service)
                $payload[] = $service;
        }
        return $payload;
    }

    /*
     *
     * get all unique baseURLS and populate them with related collection keys and uuids
     *
     */
    public static function processLinks($incompleteLinks){
        $baseUrls = [];
        $resultLinks = [];
        foreach($incompleteLinks as $link) {
            $url = static::getBaseUrl($link->link);
            if($url != "" && !in_array($url, $baseUrls) && static::isServiceLink($link)) {
                $baseUrls[] = $url;
                $newLinks = static::getServicesBylinks($url);

                if($resultLinks)
                    $resultLinks =  $resultLinks->merge($newLinks)->unique();
                else
                    $resultLinks = $newLinks;
            }
        }

        return $resultLinks;

//        return static::getLinkasJson($resultLinks);
    }

    public static function formatLinks($links){
        $url = null;
        $linksArray = array();
        $allSubjects = array();
        foreach($links as $link){
            $url = static::getBaseUrl($link->link);
            $ro = RegistryObject::where('registry_object_id', $link->registry_object_id)->first();
            // && $ro->class == 'collection' && $ro->status == "PUBLISHED"
            if($ro->class == 'collection' && $ro->status == "PUBLISHED"){
                if(!isset($linksArray[$url])){
                    $linksArray[$url] = array();
                }

                $subjects = \ANDS\Registry\Providers\RIFCS\SubjectProvider::getSubjects($ro);
                $allSubjects = static::unique_multidim_array(array_merge($allSubjects, $subjects), "value");

                if(!isset($linksArray[$url][$ro->key])){
                    $linksArray[$url][$ro->key] = array(
                        "key" => $ro->key,
                        "title" => $ro->title,
                        "relation_types" => array(),
                        "relation"=>array(),
                        "full_urls" => array(),
                        "related_collection_uuids" => array());
                }

                if(!in_array($link->link_type, $linksArray[$url][$ro->key]["relation_types"])){
                    array_push($linksArray[$url][$ro->key]["relation_types"], $link->link_type);
                }
                if(!in_array($link->link, $linksArray[$url][$ro->key]["full_urls"])){
                    array_push($linksArray[$url][$ro->key]["full_urls"], $link->link);
                }

                $relType = static::getRelationType($link->link_type);
                array_push($linksArray[$url][$ro->key]["relation"], array("type"=>$relType, "full_url"=>$link->link));

                $identifiers = Identifier::where('registry_object_id',
                    $link->registry_object_id)->get();

                $preferred_identifiers = static::getPreferredIdentifier($identifiers);

                if(sizeof($preferred_identifiers) == 0)
                    $linksArray[$url][$ro->key]["related_collection_id"] = array("type" => "local", "identifier" => $ro->key);
                else
                    $linksArray[$url][$ro->key]["related_collection_id"] = static::getPreferredIdentifier($identifiers);
            }
        }

        // format
        $links = [];
        foreach($linksArray as $url => $serviceLink){

            $relations = [];
            $fullURLs = [];
            foreach ($serviceLink as $key => $serviceRelation) {
                $relations[] = [
                    "key" => $key,
                    "title" => $serviceRelation["title"],
                    "identifier" => $serviceRelation["related_collection_id"],
                    "types" => $serviceRelation["relation_types"],
                    "relation" => $serviceRelation["relation"]
                ];
                $fullURLs = array_merge($fullURLs, $serviceRelation["full_urls"]);
            }

            $uuid = static::generateUUIDFromString($url);
            $rifcsB64 = static::getExistingContentasBase64Str($uuid);
            $links[] = [
                "url" => $url,
                "uuid" => $uuid,
                "relations" => $relations,
                "full_urls" => array_values(array_unique($fullURLs)),
                "subjects" => $allSubjects,
                "rifcsB64" => $rifcsB64
            ];
        }

        return $links;
    }
// http://guid.us/GUID/PHP
    private static function generateUUIDFromString($sting){
        $charid = strtolower(md5($sting));
        $hyphen = chr(45);// "-"
        $uuid = substr($charid, 0, 8).$hyphen
            .substr($charid, 8, 4).$hyphen
            .substr($charid,12, 4).$hyphen
            .substr($charid,16, 4).$hyphen
            .substr($charid,20,12);
        return $uuid;
    }


    private static function getExistingContentasBase64Str($key_uuid){
        $matchingRecord = Repo::getMatchingRecord($key_uuid, "DRAFT");

        if($matchingRecord == null){
            $matchingRecord = Repo::getMatchingRecord($key_uuid, "PUBLISHED");
        }

        if($matchingRecord !== null){
            $currentRecordData = $matchingRecord->getCurrentData();
            if($currentRecordData !== null)
                return base64_encode($currentRecordData->data);
        }
        return "";
    }


    private static function getPublishableService($key_uuid){

        $matchingRecord =  Repo::getMatchingRecord($key_uuid, "PUBLISHED");
        if(str_contains("OGC:", $matchingRecord->type ))
        {
            $currentRecordData = $matchingRecord->getCurrentData();
            return array("uuid"=>$key_uuid, "rifcsB64"=>$currentRecordData);
        }
        return null;
    }


    //sourced from http://php.net/manual/en/function.array-unique.php

    private static function unique_multidim_array($array, $key) {
        $temp_array = array();
        $i = 0;
        $key_array = array();

        foreach($array as $val) {
            if (!in_array($val[$key], $key_array)) {
                $key_array[$i] = $val[$key];
                $temp_array[$i] = $val;
            }
            $i++;
        }
        return $temp_array;
    }


    private static function getPreferredIdentifier($identifiers)
    {

        if(sizeof($identifiers) === 0)
            return array();

        foreach ($identifiers as $id) {
            if ($id->identifier_type === "global")
                return array("type" => $id->identifier_type, "identifier" => $id->identifier);
        }

        foreach ($identifiers as $id) {
            if ($id->identifier_type === "local")
                return array("type" => $id->identifier_type, "identifier" => $id->identifier);
        }

        return array("type"=>$identifiers[0]->identifier_type, "identifier"=>$identifiers[0]->identifier);
    }

    private static function getBaseUrl($url){
        $parsed_url = parse_url($url);

        $scheme   = isset($parsed_url['scheme']) ? $parsed_url['scheme'] . '://' : '';
        $host     = isset($parsed_url['host']) ? $parsed_url['host'] : '';
        $port     = isset($parsed_url['port']) ? ':' . $parsed_url['port'] : '';
        $path     = isset($parsed_url['path']) ? $parsed_url['path'] : '';

        return $scheme.$host.$port.$path;

    }

    private static function isServiceLink($link){
        $supported_services = [
            "wms",
            "wfs",
            "ogc",
            "wcs",
            "wps",
            "wmts"
           // "geonetwork",
          //  "geoserver"
        ];
        $supported_types = array("identifier_uri_link", "electronic", "relatedInfo");
        $supported = false;

        foreach($supported_types as $a) {
            if (stripos($link->link_type, $a) !== false)
                $supported = true;
        }
        if(!$supported){ return false;}

        foreach($supported_services as $a) {
            if (stripos($link->link, $a) !== false)
                return true;
        }
        return false;

    }

    private static function getRelationType($link_type){

    if(strpos($link_type, "relatedInfo_relation_") === 0){
        $tokens = explode("_", $link_type);
        $type = $tokens[2];
        if($type != ""){
            return getReverseRelationshipString($type);
        }
    }

    switch ($link_type) {
        case "electronic_url":
            return "makesAvailable";
            break;
        default:
            return "hasAssociationWith";
    }

}


}