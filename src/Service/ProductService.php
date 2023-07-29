<?php
namespace Src\Service;

interface ProductService {
    public function getAllProducts();
    public function createProduct($product);
    public function getProduct($sku);
    public function updateProduct($product);
    public function deleteProduct($sku);
}