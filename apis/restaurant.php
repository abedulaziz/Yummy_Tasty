<?php 
//restaurant
include("connection.php");

$query = $mysqli->prepare("SELECT restaurant_name,description,profile_pic,address from restaurants where restaurant_id = 1");//front
$query->execute();
$query->store_result();
$num_rows = $query->num_rows();
$query->bind_result($restaurant_name,$description,$profile_pic,$address);
$query->fetch();

$response = [];
if($num_rows == 0){
    $response["response"] = "failed";
}else{
    $response["response"] = "success";
    $response["restaurant_name"] = $restaurant_name;
    $response["description"] = $description;
    $resposne["profile_pic"] = $profile_pic;
    $response["address"] = $address;
}
$json = json_encode($response);
echo $json;

?>