<?php 
//return reviews
include("connection.php");

$query = $mysqli->prepare("SELECT users.email,reviews.description from users, reviews where users.user_id = reviews.user_id and reviews.status='on progress' ");
$query->execute();
$array = $query->get_result();

$response = [];
while($reviews = $array->fetch_assoc()){
    $response[] = $reviews;
} 
$json = json_encode($response);
echo $json;

?>