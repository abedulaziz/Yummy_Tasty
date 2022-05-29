<?php 
include("connection.php");

$rest_name = $_POST["rest_name"];
$description = $_POST["description"];
$address = $_POST["address"];
$profile_pic = $_POST["profile_pic"];

$query = $mysqli->prepare("INSERT INTO restaurants(restaurant_name,description, profile_pic, address) VALUES (?, ?, ?, ?)");
$query->bind_param("ssss", $rest_name, $description, $profile_pic, $address);
$query->execute();

$response = [];
$response["response"] = "success";
$response["name"] = "$rest_name";

$json = json_encode($response);
echo $json;
?>