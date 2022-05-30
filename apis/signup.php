<?php
//signup 
include("connection.php");

$first_name = $_POST["fname"];
$last_name = $_POST["lname"];
$email = $_POST["email"];
$password = hash("sha256", $_POST["password"]);
$gender = $_POST["gender"];
$phone_number = $_POST["phoneNum"];
$type = "user";

$query = $mysqli->prepare("INSERT INTO users(first_name,last_name, email, password, gender, phone_number, type) VALUES (?, ?, ?, ?, ?, ?, ?)");
$query->bind_param("sssssss", $first_name, $last_name, $email, $password, $gender, $phone_number, $type);
$query->execute();

$response = [];
$response["response"] = "success";
$response["name"] = "$first_name";

$json = json_encode($response);
echo $json;

?>