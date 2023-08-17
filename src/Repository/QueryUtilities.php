<?php
namespace Src\Repository;

class QueryUtilities {
    public const TABLE_NAME = 'products';

    private function __construct(){} 

    public static function generateFindAllQuery(){
        return "SELECT * FROM ".QueryUtilities::TABLE_NAME.";";
    }

    public static function generateFindBySkuQuery($sku){
        return "SELECT * FROM ".QueryUtilities::TABLE_NAME." WHERE sku = '$sku';";
    }

    public static function generateSaveQuery($product){
        return $product->getSaveQuery(QueryUtilities::TABLE_NAME);
    }

    public static function generateDeleteQuery($sku){
        return "DELETE FROM ".QueryUtilities::TABLE_NAME." WHERE sku = '$sku';";
    }

    public static function generateDeleteProductsQuery($sku_list){
        $skus = "";
        foreach ($sku_list as $index => $sku){
            if ($index === array_key_first($sku_list)){
                $skus = $sku;
            }
            else {
                $skus.', '."$sku";
            }
        }
        $query = "DELETE FROM ".QueryUtilities::TABLE_NAME." WHERE sku in ($skus);";
        return $query;
    }

    public static function generateCreateTableQuery(){
        $query = "CREATE TABLE IF NOT EXISTS ".QueryUtilities::TABLE_NAME." (
            sku VARCHAR(64) NOT NULL,
            name VARCHAR(64) NOT NULL,
            price VARCHAR(16) NOT NULL,
            type VARCHAR(16) NOT NULL,
            weight VARCHAR(16) DEFAULT NULL,
            size VARCHAR(16) DEFAULT NULL,
            height VARCHAR(16) DEFAULT NULL,
            width VARCHAR(16) DEFAULT NULL,
            length VARCHAR(16) DEFAULT NULL,
            PRIMARY KEY (sku)
        );";
        return $query;
    }
}
