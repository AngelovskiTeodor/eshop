<?php
namespace Src\Model;

class Furniture extends Product {
    private $height;
    private $width;
    private $length;

    public function (string $sku, string $name, string $price, string $height, string $width, string $length) {
        parent::__construct($sku, $name, $price);
        setHeight($height);
        setWidth($width);
        setLength($length);
    }

    public function getHeight() {
        return $this->height;
    }

    public function getWidth() {
        return $this->width;
    }

    public function getLength() {
        return $this->length;
    }

    public function setHeight($height) {
        $this-> = $height;
    }

    public function setWidth($width) {
        $this-> = $width;
    }

    public function setLength($length) {
        $this-> = $length;
    }
}