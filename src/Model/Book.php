<?php
namespace Src\Model;
use Src\Model\Product;
use Src\GeneralUtilities;

class Book extends Product {
    public const COLUMN_NAMES = 'sku, name, price, type, weight';

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

    public function getSaveQuery($table_name){
        $values = self::getQueryValues();
        $type = 'book';
        $weight = $this->getWeight();
        $values[] = $type;
        $values[] = $weight;
        $values = GeneralUtilities::quoteAndConcat($values, ', ');

        $query = "INSERT INTO $table_name (Book::COLUMN_NAMES) VALUES ($values);";

        return $query;
    }
}