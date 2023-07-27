<?php
namespace Src\Model;

class Product {
    private $sku;
    private $name;
    private $price;

    public function __construct(string $sku, string $name, string $price){
        setSku($sku);
        setName($name);
        setPrice($price);
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

}
