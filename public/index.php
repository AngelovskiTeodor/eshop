<?php
require '../bootstrap.php';

use Src\Repository\ProductRepository;
use Src\Repository\ProductRepository\Implementation\ProductRepositoryImplementation;
use Src\Service\ProductService;
use Src\Service\ProductService\Implementation;
use Src\Controller\ProductController;
use Src\Controller\ProductController\Implementation\ProductControllerImplementation;

header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Max-Age: 600');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type');

$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

$product_repository = new ProductRepositoryImplementation($db_connection);
$product_service = new ProductServiceImplementation($product_repository);
$product_controller = new ProductControllerImplementation($product_service);

$url = explode('/', $url);
if (!isset($url[1]) || $url[1] !== 'api') {
    return json_encode($product_controller->invalidRequest('Invalid URL path'))
}

return json_encode($product_controller->processRequest($method));