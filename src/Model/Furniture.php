<?php
namespace Src\Model;
use Src\Model\Product;
use Src\GeneralUtilities;

class Furniture extends Product {
    public const COLUMN_NAMES = 'sku, name, price, type, height, width, length';

    private $height;
    private $width;
    private $length;

    public function (string $sku, string $name, string $price, string $height, string $width, string $length) {
        parent::__construct($sku, $name, $price);
        $this->setHeight($height);
        $this->setWidth($width);
        $this->setLength($length);
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

    public function getSaveQuery($table_name){
        $values = self::getQueryValues();
        $type = 'furniture';
        $height = $this->getHeight();
        $width = $this->getWidth();
        $length = $this->getLength();
        $values[] = $type;
        $values[] = $height;
        $values[] = $width;
        $values[] = $length;
        $values = GeneralUtilities::quoteAndconcat($values, ', ');
        
        $query = "INSERT INTO $table_name (".Furniture::COLUMN_NAMES.") VALUES (".$values.");";
        
        return $query;
    }
}