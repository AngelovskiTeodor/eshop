<?php
namespace Src\Model;
use Src\Model\Product;
use Src\GeneralUtilities;

class DVD extends Product {
    public const COLUMN_NAMES = 'sku, name, price, type, size';

    private $size;

    public function __construct(string $sku, string $name, string $price, string $size){
        parent::__construct($sku, $name, $price);
        $this->setSize($size);
    }

    public function getSize() {
        return $this->size;
    }

    public function setSize($size) {
        $this->size = $size;
    }

    public function jsonSerialize():mixed {
        $ret = parent::jsonSerialize();
        $ret['type'] = 'dvd';
        $ret['size'] = $this->getSize();
        return $ret;
    }

    public function getSaveQuery($table_name){
        $values = self::getQueryValues();
        $type = 'dvd';
        $size = $this->getSize();
        $values[] = $type;
        $values[] = $size;
        $values = GeneralUtilities::quoteAndconcat($values, ', ');

        $query = "INSERT INTO $table_name (".DVD::COLUMN_NAMES.") VALUES (".$values.");";
        
        return $query;
    }
}