<?php

namespace ANDS\Registry\Providers\RIFCS;

use ANDS\Registry\Providers\TitleProvider;

class TitleProviderTest extends \RegistryTestClass
{
    /** @test **/
    public function it_should_get_the_first_primary_non_name_part()
    {
        $rawNames = [
            ['@attributes' => ['type' => 'non-primary'], 'value' => 'non'],
            ['@attributes' => ['type' => 'primary'], 'value' => 'right']
        ];
        $titles = TitleProvider::getTitlesFromRaw($rawNames, 'activity');
        $this->assertEquals('right', $titles['displayTitle']);
        $this->assertEquals('right', $titles['listTitle']);
    }

    /** @test **/
    public function it_should_get_the_first_primary_name_part()
    {
        $rawNames = [
            ['@attributes' => ['type' => 'non-primary'], 'value' => 'non'],
            [
                '@attributes' => ['type' => 'primary'],
                'value' => [
                    ['@attributes' => ['type' => 'a'], 'value' => '1'],
                    ['@attributes' => ['type' => 'b'], 'value' => '2'],
                    ['@attributes' => ['type' => 'c'], 'value' => '3']
                ]
            ]
        ];
        $titles = TitleProvider::getTitlesFromRaw($rawNames, 'activity');
        $this->assertEquals('1', $titles['displayTitle']);
        $this->assertEquals('1', $titles['listTitle']);
    }

    /** @test **/
    public function it_should_order_correctly_for_party()
    {
        $rawNames = [
            ['@attributes' => ['type' => 'non-primary'], 'value' => 'non'],
            [
                '@attributes' => ['type' => 'primary'],
                'value' => [
                    ['@attributes' => ['type' => 'family'], 'value' => 'Hime'],
                    ['@attributes' => ['type' => 'given'], 'value' => 'Gary'],
                    ['@attributes' => ['type' => 'given'], 'value' => 'R'],
                    ['@attributes' => ['type' => 'title'], 'value' => 'A/Pr']
                ]
            ]
        ];

        $titles = TitleProvider::getTitlesFromRaw($rawNames, 'party');
        $this->assertEquals("A/Pr, Gary R., Hime", $titles['listTitle']);
        $this->assertEquals("A/Pr Gary R Hime", $titles['displayTitle']);
    }

    /** @test **/
    public function it_should_get_first_name_found()
    {
        $rawNames = [
            ['@attributes' => ['type' => 'non-primary'], 'value' => 'non'],
            ['@attributes' => ['type' => 'given'], 'value' => 'non1'],
            ['@attributes' => ['type' => 'blah'], 'value' => 'non2'],
        ];

        $titles = TitleProvider::getTitlesFromRaw($rawNames, 'collection');
        $this->assertEquals("non", $titles['listTitle']);
        $this->assertEquals("non", $titles['displayTitle']);
    }

    /** @test **/
    public function it_should_get_first_primary_namePart_found_for_party()
    {
        $rawNames = [
            [
                'value' => [
                    [
                        '@attributes' => ['type' => 'superior'],
                        'value' => '(AUTestingRecords)Reverse Relationships Internal Related Info "isManagerOf"'
                    ],
                    [
                        '@attributes' => ['type' => 'subordinate'],
                        'value' => 'UTS:eResearch IT Services Group'
                    ]
                ],
                '@attributes' => ['type' => 'primary']
            ],
        ];

        $titles = TitleProvider::getTitlesFromRaw($rawNames, 'party');
        $this->assertEquals('(AUTestingRecords)Reverse Relationships Internal Related Info "isManagerOf"', $titles['listTitle']);
        $this->assertEquals('(AUTestingRecords)Reverse Relationships Internal Related Info "isManagerOf"', $titles['displayTitle']);
    }

    /** @test **/
    public function it_should_get_primary_single_namePart()
    {
        $rawNames = [
            [
                '@attributes' => ['type' => 'primary'],
                'value' => [
                    '@attributes' => ['type' => 'primary'],
                    'value' => 'Primary'
                ]
            ]
        ];
        $titles = TitleProvider::getTitlesFromRaw($rawNames, 'party');
        $this->assertEquals('Primary', $titles['listTitle']);
        $this->assertEquals('Primary', $titles['displayTitle']);
    }
}