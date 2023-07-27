<?php
require '../bootstrap.php';

header('Access-Control-Allow-Methods: GET,POST,DELETE');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Max-Age: 600');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type');

$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

