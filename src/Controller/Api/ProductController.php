<?php

namespace Src\Controller\Api;

interface ProductController {
    public function processRequest($request_method);
    public function getAllProducts();
    public function getProduct($sku);
    public function createProduct($product);
    public function updateProduct($product);
    public function deleteProduct($sku);
    public function deleteProducts($sku_list);
    public function invalidRequest($message);
}