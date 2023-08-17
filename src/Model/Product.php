<?php
namespace Src\Model;
use Src\GeneralUtilities;
use JsonSerializable;

class Product implements JsonSerializable {
    public const COLUMN_NAMES = 'sku, name, price, type';

    private $sku;
    private $name;
    private $price;

    public function __construct(string $sku, string $name, string $price){
        $this->setSku($sku);
        $this->setName($name);
        $this->setPrice($price);
    }

    public function getSku () {
        return $this->sku;
    }

    public function getName () {
        return $this->name;
    }

    public function getPrice () {
        return $this->price;
    }

    public function setSku (string $sku) {
        $this->sku = $sku;
    }

    public function setName (string $name) {
        $this->name = $name;
    }

    public function setPrice (string $price) {
        $this->price = $price;
    }

    public function jsonSerialize():mixed {
        $ret = [
            'sku' => $this->getSku(),
            'name' => $this->getName(),
            'price' => $this->getPrice(),
            'type' => 'product'
        ];
        return $ret;
    }

    protected function getQueryValues(){
        $sku = $this->getSku();
        $name = $this->getName();
        $price = $this->getPrice();
        $values = array($sku, $name, $price);
        return $values;
    }

    public function getSaveQuery($table_name){
        $values = self::getQueryValues();
        $type = 'product';
        $values[] = $type;
        $values = GeneralUtilities::quoteAndConcat($values, ', ');

        $query = "INSERT INTO $table_name (".Product::COLUMN_NAMES.") VALUES (".$values.");";
        
        return $query;
    }
}
