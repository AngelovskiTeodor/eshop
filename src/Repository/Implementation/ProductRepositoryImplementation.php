<?php
namespace Src\Repository\Implementation;
use Src\Repository\ProductRepository;
use Src\Repository\QueryUtilities;
use Src\Model\ProductFactory;
use Src\Service;
use Src\Model;

class ProductRepositoryImplementation implements ProductRepository {
    private static $instance == null;
    
    private $db_connection = null;

    private function __construct($db_connection){
        $this->db_connection = $db_connection;
    }

    public function findAll(){
        $query = generateFindAllQuery();
        try{
            $query = $this->db_connection->prepare($query);
            $query->execute();
            $products_raw = $query->fetchAll(\PDO::FETCH_ASSOC);
            $products = [];
            foreach ($products_raw as $product_props){
                $product = new ProductFactory::createProduct($product_props);
                products[] = $product;
            }
            return $products;
        } catch (\PDOException $exc){
            exit($exc->getMessage());
        }
    }

    public function findBySku($sku){
        $query = generateFindBySkuQuery($sku);
        try{
            $query = $this->db_connection->prepare($query);
            $query->execute();
            $product_raw = $query->fetchAll(\PDO::FETCH_ASSOC);
            $product = ProductFactory::createProduct($product_raw[0]);
            return $product;
        } catch (\PDOException $exc) {
            exit($exc->getMessage());
        }
    }

    public function save($product){
        $query = generateSaveQuery($);
        try {
            $query = $this->db_connection->prepare($query);
            $query->execute();
            $row_count = $query->rowCount();
            return $row_count;
        } catch (\PDOException $exc) {
            exit($exc->getMessage());
        }
    }

    public function delete($sku){
        $query = generateDeleteQuery($sku);
        try {
            $query = $this->db_connection->prepare($query);
            $query->execute();
            $row_count = $query->rowCount();
            return $row_count;
        } catch (\PDOException $exc) {
            exit($exc->getMessage());
        }
    }

    public function deleteProducts($sku_list){
        $query = generateDeleteProductsQuery($sku_list);
        try {
            $query = $this->db_connection->prepare($query);
            $query->execute();
            $row_count = $query->rowCount();
            return $row_count;
        } catch (\PDOException $exc) {
            exit($exc->getMessage());
        }
    }

    public static function getInstance($db_connection) {
        if (self::$instance == null) {
            self::$instance = new ProductRepositoryImplementation($db_connection);
        }
        return self::$instance;
    }

    private function __clone (){
        return self::getInstance($this->db_connection)
    }
}