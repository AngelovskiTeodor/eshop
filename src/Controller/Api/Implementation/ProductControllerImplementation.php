<?php

namespace Src\Controller\Api\Implementation;
use Src\Controller\Api\ProductController;
use Src\Model\ProductFactory;

class ProductControllerImplementation implements ProductController{
    private static $instance = null;
    
    private $product_service = null;

    private function __construct($product_service){
        $this->product_service = $product_service;
    }

    public function processRequest($request_method){
        switch ($request_method) {
            case 'GET':
                if (isset($_GET['sku'])) {
                    $sku = $_GET['sku'];
                    return $this->getProduct($sku);
                }
                return $this->getAllProducts();
                break;
            case 'POST':
                $product = ProductFactory::createFromRequest($_POST);
                return $this->createProduct($product);
                break;
            case 'PUT':
                $product = ProductFactory::createFromRequest($_POST);
                return $this->updateProduct($product);
                break;
            case 'DELETE':
                if (isset($_GET['sku'])) {
                    $sku = $_GET['sku'];
                    return $this->deleteProduct($sku);
                }
                else {
                    return $this->invalidRequest('Missing sku.');
                }
                break;
            case 'PATCH':
                if (isset($_PATCH['sku_list'])) {
                    $sku_list = json_decode($_PATCH['sku_list']);
                    return $this->deleteProducts($sku_list);
                }
            default:
                return $this->invalidRequest('Unknown HTTP method.');
        }
    }

    public function getAllProducts(){
        return $this->product_service->getAllProducts();
    }

    public function getProduct($sku){
        return $this->product_service->getProduct($sku);
    }

    public function createProduct($product){
        return $this->product_service->createProduct($product);
    }

    public function updateProduct($product){
        return $this->product_service->updateProduct($product);
    }

    public function deleteProduct($sku){
        return $this->product_service->deleteProduct($sku);
    }

    public function deleteProducts($sku_list){
        return $this->product_service->deleteProducts($sku);
    }

    public function invalidRequest($message){
        error_log($message);
        $response['status_code_header'] = 'HTTP/1.1 404 Not Found';
        $response['body'] = $message;
        return $response;
    }

    public static function getInstance($product_service) {
        if (self::$instance == null) {
            self::$instance = new ProductControllerImplementation($product_service);
        }
        return self::$instance;
    }

    private function __clone (){
        return self::getInstance($this->$product_service);
    }
}