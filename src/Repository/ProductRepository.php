<?php
namespace Src\Repository;

interface ProductRepository {
    public function findAll();
    public function findBySku($sku);
    public function save($product);
    public function delete($sku);
    public function deleteProducts($sku_list);
}