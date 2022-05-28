<?php

$host = '127.0.0.1';
$dbName = 'artikli';
$username = 'root';
$password = '';

try {
    $oConnection = new PDO("mysql:host=$host;dbname=$dbName", $username = $username, $password = $password);
    //echo "Connected";
} catch (PDOException $p) {
    die("Connection failed: " . $p->getMessage());
}
