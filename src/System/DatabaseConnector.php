<?php
namespace Src\System;

class DatabaseConnector {

    private static $instance = null;

    private $db_connection = null;
    
    private function __construct(){
        $db_host = getenv('DB_HOST');
        $db_port = getenv('DB_PORT');
        $db_name = getenv('DB_DATABASE');
        $db_user = getenv('DB_USERNAME');
        $db_pass = getenv('DB_PASSWORD');

        try {
            $this->db_connection = new \PDO(
                "mysql:host=$db_host;port=$db_port;charset=utf8mb4;dbname=$db_name",
                $db_user,
                $db_pass
            );
        } catch (\PDOException $exc) {
            exit($exc->getMessage());
        }
    }

    public function getConnection(){
        return $this->db_connection;
    }

    public static function getInstance() {
        if (self::$instance == null) {
            self::$instance = new DatabaseConnector();
        }
        return self::$instance;
    }

    public function __clone() {
        return self::getInstance();
    }
}
