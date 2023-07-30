<?php
require 'vendor/autoload.php';

use Src\System\DatabaseConnector;
use Src\Repository\ProductRepository;
use Src\Repository\ProductRepository\Implementation\ProductRepositoryImplementation;
use Src\Service\ProductService;
use Src\Service\ProductService\Implementation\ProductServiceImplementation;
use Src\Controller\ProductController;
use Src\Controller\ProductController\Implementation\ProductControllerImplementation;

$db_connection = (DatabaseConnector::getInstance())->getConnection();
$product_repository = ProductRepositoryImplementation::getInstance($db_connection);
$product_service = ProductServiceImplementation::getInstance($product_repository);
$product_controller = ProductControllerImplementation::getInstance($product_service);