<?php
require 'vendor/autoload.php';

use Src\System\EnvironmentVariablesLoader;
use Src\System\DatabaseConnector;
use Src\Repository\ProductRepository;
use Src\Repository\Implementation\ProductRepositoryImplementation;
use Src\Service\ProductService;
use Src\Service\Implementation\ProductServiceImplementation;
use Src\Controller\Api\ProductController;
use Src\Controller\Api\Implementation\ProductControllerImplementation;

$environment_variables_loader = EnvironmentVariablesLoader::load(__DIR__.'/.env.database');
$db_connection = (DatabaseConnector::getInstance())->getConnection();
$product_repository = ProductRepositoryImplementation::getInstance($db_connection);
$product_service = ProductServiceImplementation::getInstance($product_repository);
$product_controller = ProductControllerImplementation::getInstance($product_service);