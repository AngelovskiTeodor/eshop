<?php
require 'vendor/autoload.php';

use Src\System\DatabaseConnector;

$db_connection = (new DatabaseConnector())->getConnection();