<?php
namespace Src\Model;

class Book extends Product {
    private $weight;

    public function __construct (string $sku, string $name, string $price, string $weight){
        parent::__construct($sku, $name, $price);
        setWeight($weight);
    }

    public function getWeight(){
        return $this->weight;
    }

    public function setWeight(string $weight){
        $this->weight = $weight;
    }
}