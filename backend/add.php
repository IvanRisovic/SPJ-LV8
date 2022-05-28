<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

require_once "connection.php";
require_once "artikl.php";

$sQuery = "INSERT INTO artikl VALUES (". $_POST['id'] . ",'" . $_POST['naziv'] . "','" . $_POST['proizvodac'] . "','" . $_POST['model'] . "'," . $_POST['cijena'] . "," . $_POST['kolicina'] . ")";

$oStatement = $oConnection->query($sQuery);

echo $sQuery;
