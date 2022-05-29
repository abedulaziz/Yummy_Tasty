<?php 
//return reviews
include("connection.php");

$query = $mysqli->prepare("SELECT description,rate from reviews where status='approved' ");
$query->execute();
$array = $query->get_result();

$response = [];
while($reviews = $array->fetch_assoc()){
    $response[] = $reviews;
} 
$json = json_encode($response);
echo $json;

?>