<?php
namespace ANDS\API;

use \Exception as Exception;

class Location_api
{

    private $client = null;

    public function handle($method = array())
    {
        $this->ci = &get_instance();
        // Some defaults
        $jsonData['status'] = 'ERROR';
        $jsonData['message'] = 'searchText must be defined';
        $searchText = '';
        $limit = 100;
        $recCount = 0;
        $feature = '';
        $callback = "function";
        $wfsg_host = 'http://www.ga.gov.au/gazetteer-australia-wfsg-gws/';
        // Parse parameters
        if (isset($_GET['searchText'])) {
            $searchText = $_GET['searchText'];
            $jsonData['message'] = 'searchText' . $searchText;
        }
        // jQuery will interpolate the callback function as a random integer
        if (isset($_GET['callback'])) {
            $callback = $_GET['callback'];
        }
        if (isset($_GET['limit'])) {
            //$limit = $_GET['limit']; // ignore this, for now...
            $jsonData['limit'] = $limit;
        }
        if (isset($_GET['feature'])) {
            $feature = $_GET['feature'];
            $jsonData['feature'] = $feature;
        }

        $debug = false;
        if(isset($_GET['debug']))
        {
            $debug = true;
        }


        // Design the XML query
        if ($searchText) {
            $mctGazetteerGeocoderUrl = $wfsg_host.'/wfs?service=wfs&version=1.1.0&request=GetFeature&typename=iso19112:SI_LocationInstance&maxFeatures='.$limit.'';
            $filterText = '<ogc:Filter xmlns:ogc="http://www.opengis.net/ogc"><ogc:PropertyIsLike wildCard="*" singleChar="#" escapeChar="\\" matchCase="false"><ogc:PropertyName>iso19112:alternativeGeographicIdentifiers/iso19112:alternativeGeographicIdentifier/iso19112:name</ogc:PropertyName><ogc:Literal>' . $searchText . '</ogc:Literal></ogc:PropertyIsLike></ogc:Filter>';
        }
        if ($feature) {
            $mctGazetteerGeocoderUrl = $wfsg_host.'/wfs?service=wfs&version=1.1.0&request=GetFeature&typename=iso19112:SI_LocationType';
            $filterText = '<ogc:Filter xmlns:ogc="http://www.opengis.net/ogc"><ogc:PropertyIsLike wildCard="%" singleChar="#" escapeChar="\\"><ogc:PropertyName>@gml:id</ogc:PropertyName><ogc:Literal>%</ogc:Literal></ogc:PropertyIsLike></ogc:Filter>';
        }

        // Send the query (curl)
        $jsonData = array();

        try{
            $ch = curl_init();
            if(!$ch)
            {
                $jsonData['status'] = 'ERROR';
                $jsonData['exception'] = curl_error($ch);
                $jsonData = json_encode($jsonData);
                echo $callback . "(" . $jsonData . ");";
                exit();
            }
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, "filter=" . rawurlencode($filterText));
            curl_setopt($ch, CURLOPT_URL, $mctGazetteerGeocoderUrl);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            $data = curl_exec($ch);
            if(!$data)
            {
                $jsonData['status'] = 'ERROR';
                $jsonData['exception'] = "NO DATA";
                $jsonData = json_encode($jsonData);
                echo $callback . "(" . $jsonData . ");";
                exit();
            }
            $gazetteerDoc = new \DOMDocument();
            $result = $gazetteerDoc -> loadXML($data);
            if($result === false)
            {
                $jsonData['status'] = 'ERROR';
                $jsonData['exception'] = 'not well formed xml';
                $jsonData = json_encode($jsonData);
                echo $callback . "(" . $jsonData . ");";
                exit();
            }
            $gXPath = new \DOMXpath($gazetteerDoc);
            $jsonData['status'] = 'OK';
        }
        catch (Exception $e)
        {
            $jsonData['status'] = 'ERROR';
            $jsonData['exception'] = $e->getMessage();
            $jsonData = json_encode($jsonData);
            echo $callback . "(" . $jsonData . ");";
            exit();
        }

        if ($searchText) {
            // Resolve and order the results (we only want a few of the feature types to avoid a massive list)
            $featureMemberListTOP = $gXPath -> evaluate('gml:featureMember[descendant::node()[contains(@codeSpace,"STAT")] or descendant::node()[contains(@codeSpace,"SUB")] or descendant::node()[contains(@codeSpace,"URBN")]]');
            $featureMemberListBOTTOM = $gXPath -> evaluate('gml:featureMember[not(descendant::node()[contains(@codeSpace,"STAT")] or descendant::node()[contains(@codeSpace,"SUB")] or descendant::node()[contains(@codeSpace,"URBN")])]');
            $jsonData['items_count'] = ($featureMemberListTOP -> length) + ($featureMemberListBOTTOM -> length);
            $items = array();
            for ($i = 0; $i < $featureMemberListTOP -> length; $i++) {
                $item = array();
                $featureMember = $featureMemberListTOP -> item($i);
                $item['title'] = $gXPath -> evaluate('.//iso19112:name', $featureMember) -> item(0) -> nodeValue;
                $coordsStr = $gXPath -> evaluate('.//gml:pos', $featureMember) -> item(0) -> nodeValue;
                $spPos = strpos($coordsStr, ' ');
                $item['coords'] = $coordsStr;
                $item['lat'] = substr($coordsStr, 0, $spPos);
                $item['lng'] = substr($coordsStr, $spPos + 1);
                $typeArray = array();
                $featureTypes = $gXPath -> evaluate('iso19112:SI_LocationInstance/iso19112:locationType/@codeSpace', $featureMember);
                for ($j = 0; $j < $featureTypes -> length; $j++) {
                    $attrvalue = $featureTypes -> item($j) -> nodeValue;
                    $trimPos = strpos($attrvalue, ':GA:') + 4;
                    array_push($typeArray, substr($attrvalue, $trimPos));
                }
                if ($featureTypes -> length > 0) {
                    $item['types'] = $typeArray;
                }
                array_push($items, $item);
                if (++$recCount >= $limit)
                    break;
            }

            for ($i = 0; $i < $featureMemberListBOTTOM -> length; $i++) {
                if (++$recCount >= $limit)
                    break;
                $item = array();
                $featureMember = $featureMemberListBOTTOM -> item($i);
                $item['title'] = $gXPath -> evaluate('.//iso19112:name', $featureMember) -> item(0) -> nodeValue;
                $coordsStr = $gXPath -> evaluate('.//gml:pos', $featureMember) -> item(0) -> nodeValue;
                $spPos = strpos($coordsStr, ' ');
                $item['coords'] = $coordsStr;
                $item['lat'] = substr($coordsStr, 0, $spPos);
                $item['lng'] = substr($coordsStr, $spPos + 1);
                $typeArray = array();
                $featureTypes = $gXPath -> evaluate('iso19112:SI_LocationInstance/iso19112:locationType/@codeSpace', $featureMember);
                for ($j = 0; $j < $featureTypes -> length; $j++) {
                    $attrvalue = $featureTypes -> item($j) -> nodeValue;
                    $trimPos = strpos($attrvalue, ':GA:') + 4;
                    array_push($typeArray, substr($attrvalue, $trimPos));
                }
                if ($featureTypes -> length > 0) {
                    $item['types'] = $typeArray;
                }
                array_push($items, $item);
            }

            $jsonData['items'] = $items;

        }

        if ($feature) {
            $featureMemberList = $gXPath -> evaluate('//gml:featureMember');
            $jsonData['items_count'] = $featureMemberList -> length;
            $items = array();
            for ($i = 0; $i < $featureMemberList -> length; $i++) {
                $item = array();
                $featureMember = $featureMemberList -> item($i);
                $item['title'] = $gXPath -> evaluate('.//iso19112:definition', $featureMember) -> item(0) -> nodeValue;
                $item['id'] = $gXPath -> evaluate('./iso19112:SI_LocationType/@gml:id', $featureMember) -> item(0) -> nodeValue;
                array_push($items, $item);
            }
            $jsonData['items'] = $items;
        }

        // Send the response as JSONP
        $jsonData = json_encode($jsonData);
        return  $jsonData ;

    }

    public function __construct()
    {
        $this->ci = &get_instance();
        require_once BASE . 'vendor/autoload.php';
    }
}
