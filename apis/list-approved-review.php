<?php
//list approved reviews
include("connection.php");

$query = $mysqli->prepare("SELECT description,rate from reviews where status='approved'");
$query->execute();
$array = $query->get_result();

$response = [];
while($restaurant = $array->fetch_assoc()){
    $response[] = $restaurant;
} 
$checkconnection["success"] = "success";
$json = json_encode($checkconnection);
echo $json;
$json = json_encode($response);
echo $json;
?>