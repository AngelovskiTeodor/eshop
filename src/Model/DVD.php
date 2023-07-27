<?php
namespace Src\Model;

class DVD extends Product {
    private $size;

    public function __construct(string $sku, string $name, string $price, string $size){
        parent::__construct(string $sku, string $name, string $price);
        setSize($size);
    }

    public function getSize() {
        return $this->size;
    }

    public function setSize($size) {
        $this->size = $size;
    }
}