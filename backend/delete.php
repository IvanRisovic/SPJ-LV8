<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

require_once "connection.php";
require_once "artikl.php";

$sQuery = "DELETE FROM artikl WHERE id=".$_POST['id'];

$sStat = $oConnection->query($sQuery);