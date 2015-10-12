<?php

require 'vendor/autoload.php';

use Parse\ParseClient;
use Parse\ParseObject;

ParseClient::initialize('nJv9HEJkB6j6etfQ6L1k9FBa2nEYChHHTJmvuyO8', 'rWlP4V2j1Y7IZiv36wNwwwTN2AVElHQVmO83JcBX', 'NN7hDhovDTA5PxulM9vdtTx2ozbwN6O1GjSJK4Ye');


$testObject = ParseObject::create("TestSubscriber");
$testObject->set("foo", "bar");
$testObject->save();