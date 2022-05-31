<?php
//list approved reviews
include("connection.php");
$restaurant_id = $_POST["restaurant_id"];

$query = $mysqli->prepare("SELECT description,rate from reviews where status='approved'and restaurant_id = $restaurant_id");
$query->execute();
$array = $query->get_result();

$response = [];
while($restaurant = $array->fetch_assoc()){
    $response[] = $restaurant;
} 

$json = json_encode($response);
echo $json;

?>