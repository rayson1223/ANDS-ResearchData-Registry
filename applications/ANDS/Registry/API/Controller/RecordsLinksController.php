<?php

namespace ANDS\Registry\API\Controller;

use ANDS\RegistryObject\Links;

class RecordsLinksController
{
    public function index($id)
    {
        $links = Links::where('registry_object_id', $id);
        if ($type = request('type')) {
            $links = $links->where('link_type', $type);
        }
        return $links->get();
    }
}