<?php
require 'vendor/autoload.php';

use Src\System\DatabaseConnector;

$db_connection = (DatabaseConnector::getInstance())->getConnection();