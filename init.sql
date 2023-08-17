CREATE DATABASE IF NOT EXISTS eshop;
USE eshop;
CREATE TABLE IF NOT EXISTS products (
            sku VARCHAR(64) NOT NULL,
            name VARCHAR(64) NOT NULL,
            price VARCHAR(16) NOT NULL,
            type VARCHAR(16) NOT NULL,
            weight VARCHAR(16) DEFAULT NULL,
            size VARCHAR(16) DEFAULT NULL,
            height VARCHAR(16) DEFAULT NULL,
            width VARCHAR(16) DEFAULT NULL,
            length VARCHAR(16) DEFAULT NULL,
            PRIMARY KEY (sku)
        );