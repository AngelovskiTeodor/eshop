<?php
require 'bootstrap.php';
use Src\Repository\QueryUtilities;

$query = QueryUtilities::generateCreateTableQuery();

try {
    $createTable = $db_connection->exec($query);
    echo "Table created.\n";
} catch (\PDOException $exc) {
    exit($exc->getMessage());
}
