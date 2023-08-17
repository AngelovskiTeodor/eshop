<?php

namespace Src\Model;
use Src\Model\Product;
use Src\Model\Book;
use Src\Model\DVD;
use Src\Model\Furniture;

class ProductFactory {
    private function __construct(){}

    public static function createProduct($product_properties){
        $product_type = 'product';
        $book_type = 'book';
        $dvd_type = 'dvd';
        $furniture_type = 'furniture';
        switch ($product_properties['type']) {
            case $product_type:
                return new Product(
                    $product_properties['sku'],
                    $product_properties['name'],
                    $product_properties['price'],
                );
                break;
            case $book_type:
                return new Book(
                    $product_properties['sku'],
                    $product_properties['name'],
                    $product_properties['price'],
                    $product_properties['weight']
                );
                break;
            case $dvd_type:
                return new DVD(
                    $product_properties['sku'],
                    $product_properties['name'],
                    $product_properties['price'],
                    $product_properties['size']
                );                
                break;
            case $furniture_type:
                return new Furniture(
                    $product_properties['sku'],
                    $product_properties['name'],
                    $product_properties['price'],
                    $product_properties['height'],
                    $product_properties['width'],
                    $product_properties['length']
                );
                break;
            default:
                throw new \RuntimeException("Unknown product type: ".$product_properties['type']);
        }
    }

    public static function createFromRequest($props){
        if (isset($porps['weight'])) {
            return new Book(
                $props['sku'],
                $props['name'],
                $props['price'],
                $props['weight']
            );
        } elseif (isset($porps['size'])) {
            return new DVD(
                $props['sku'],
                $props['name'],
                $props['price'],
                $props['size']
            );
        } elseif (isset($porps['height'])) {
            return new Furniture(
                $props['sku'],
                $props['name'],
                $props['price'],
                $props['height'],
                $props['width'],
                $props['length']
            );
        } else {
            return new Product(
                $props['sku'],
                $props['name'],
                $props['price']
            );
        }
    }
}
