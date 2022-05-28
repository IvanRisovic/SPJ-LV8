<?php
header('Content-type: text/json');
header('Content-type: application/json; charset-utf-8');
header('Access-Control-Allow-Origin: *');

require_once "./artikl.php";
require_once "./connection.php";

$sql = "SELECT * FROM artikl";
$oStatememt = $oConnection->query($sql);
$sArtikl = array();
while($oRow = $oStatememt->fetch(PDO::FETCH_BOTH))
{
    $oArt = new artikl(
        $oRow['id'],
        $oRow['naziv'],
        $oRow['proizvodac'],
        $oRow['model'],
        $oRow['cijena'],
        $oRow['kolicina']
    );
    array_push($sArtikl, $oArt);    
}
echo json_encode($sArtikl);