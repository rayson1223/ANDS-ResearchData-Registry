<?php

namespace ANDS\Registry\API\Controller;


use ANDS\Registry\API\Request;

class HTTPController
{
    /**
     * Validate a list of fields
     * TODO: refactor to ANDS\HTTPController
     * @param $fields
     * @throws \Exception
     */
    public function validate($fields)
    {
        $missing = Request::getMissing($fields);
        if (count($missing) > 0) {
            throw new \Exception("Missing fields: ". implode(', ', $missing));
        }
    }

    /**
     * Validate a list of middlewares
     * TODO: refactor to ANDS\HTTPController
     * @param $middlewares
     * @return bool
     * @throws \Exception
     */
    public function middlewares($middlewares)
    {
        foreach ($middlewares as $name) {
            $middleware = new $name;
            if (!$middleware->pass()) {
                throw new \Exception($middleware->getMessage());
            }
        }
        return true;
    }
}