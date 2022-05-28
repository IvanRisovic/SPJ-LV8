<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

/* header('Content-type: text/json');
header('Content-type: application/json; charset-utf-8'); */
//header('Access-Control-Allow-Origin: *');

require_once "connection.php";
require_once "artikl.php";

$sQuery = "UPDATE artikl SET id=".$_POST['id'].", naziv='".$_POST['naziv']."', proizvodac='".$_POST['proizvodac']."', model='".$_POST['model']."', cijena=".$_POST['cijena'].", kolicina=".$_POST['kolicina']." WHERE id=".$_POST['id'];

$oStatement = $oConnection->query($sQuery);

echo $sQuery;