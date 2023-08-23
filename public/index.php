<?php
require '../bootstrap.php';

header('Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE,OPTIONS');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Max-Age: 600');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Origin, Content-Type');

$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

$url = explode('/', $url);
if (!isset($url[3]) || $url[3] !== 'api') {
    //  debugging
    error_log('/api path not in url');
    error_log(print_r($url, true));

    echo json_encode($product_controller->invalidRequest('Invalid URL path'));
}

echo json_encode($product_controller->processRequest($method));
