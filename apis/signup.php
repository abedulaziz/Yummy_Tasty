<?php
include("connection.php");

$response = [];
$response["response"] = "success";

if(isset($_POST["fname"])){
  $first_name = $_POST["fname"];
}else{
  $response["response"] = "failed";
}
if(isset($_POST["lname"])){
  $last_name = $_POST["lname"];
}else{
  $response["response"] = "failed";
}
if(isset($_POST["email"])){
  $email = $_POST["email"];
}else{
  $response["response"] = "failed";
}
if(isset($_POST["password"])){
  $password = hash("sha256", $_POST["password"]);
}else{
  $response["response"] = "failed";
}
if(isset($_POST["gender"])){
  $gender = $_POST["gender"];
}else{
  $response["response"] = "failed";
}
  $phone_number = $_POST["phoneNum"];
  $type = "user";
  
  $query = $mysqli->prepare("INSERT INTO users(first_name,last_name, email, password, gender, phone_number, type) VALUES (?, ?, ?, ?, ?, ?, ?) ");
  $query->bind_param("sssssss", $first_name, $last_name, $email, $password, $gender, $phone_number, $type);
  $query->execute();;
  $response["name"] = "$first_name";
  
  $json = json_encode($response);
  echo $json;

?>