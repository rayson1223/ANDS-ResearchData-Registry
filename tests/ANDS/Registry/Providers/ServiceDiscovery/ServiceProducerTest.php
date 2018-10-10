<?php

/**
 * Created by PhpStorm.
 * User: leomonus
 * Date: 13/8/18
 * Time: 10:36 AM
 */
use ANDS\File\Storage;
use ANDS\Registry\Providers\ServiceDiscovery\ServiceProducer;

class ServiceProducerTest extends \RegistryTestClass
{

    /** @test **/
    public function test_get_rif_from_url_and_type() {

        $serviceProducer = new ServiceProducer(\ANDS\Util\Config::get('app.services_registry_url'));
        $serviceProducer->getServicebyURL("http://acef.tern.org.au/geoserver/wms" , "WMS");
        $rifcs = $serviceProducer->getRegistryObjects();
        $sC = $serviceProducer->getServiceCount();
        $this->assertContains("<registryObject", $rifcs);
        $this->assertEquals($sC, 1);
    }

    /** @test */
    public function test_get_rif_from_services_json()
    {
        $this->markTestSkipped("Require better test data");

        $sJson = Storage::disk('test')->get('servicesDiscovery/services.json');
        $serviceProducer = new ServiceProducer(\ANDS\Util\Config::get('app.services_registry_url'));
        $serviceProducer->processServices($sJson);
        $rifcs = $serviceProducer->getRegistryObjects();
        $sC = $serviceProducer->getServiceCount();
        $this->assertContains("<registryObject", $rifcs);
        $this->assertEquals($sC, 24);

    }

    public function setUp()
    {
        if (\ANDS\Util\Config::get('app.services_registry_url') === null) {
            $this->markTestSkipped("Service Registry URL not configured");
        }
    }

}