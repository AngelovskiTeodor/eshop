<?php
namespace Src\Service\Implementation;
use Src\Service\ProductService;
use Src\Model;

class ProductServiceImplementation implements ProductService {
    private static $instance = null;

    private $product_repository = null;

    private function __construct($product_repository){
        $this->product_repository = $product_repository;
    }

    public function getAllProducts(){
        return $this->product_repository->findAll();
    }

    public function createProduct($product){
        $this->product_repository->save($product);
    }

    public function getProduct($sku){
        return $this->product_repository->findBySku($sku);
    }

    public function updateProduct($product){
        $this->product_repository->save($product);
    }

    public function deleteProduct($sku){
        $this->product_repository->delete($sku);
    }

    public function deleteProducts($sku_list){
        $this->product_repository->deleteProducts($sku_list);
    }

    public static function getInstance($product_repository) {
        if (self::$instance == null) {
            self::$instance = new ProductServiceImplementation($product_repository);
        }
        return self::$instance;
    }

    private function __clone (){
        return self::getInstance($this->product_repository);
    }
}