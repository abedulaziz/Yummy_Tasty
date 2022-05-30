<?php
//signup 
<<<<<<< HEAD

$test = include("connection.php");
=======
include("connection.php");
>>>>>>> 0e0fe920daf166562068864ecea230f70a9f69be


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