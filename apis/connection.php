<?php
//connection file
$host = "localhost";
$db_user = "root";
$db_pass = null ;
$db_name = "yummytastydb";
$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);


header("Access-control-Allow0-origin: *");
header("access-control-allow-headers: *");

?>