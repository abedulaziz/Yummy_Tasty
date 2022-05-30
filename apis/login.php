<?php


include("connection.php");
//how to get the value from body
//axios
// return array / objects

$email = $_POST["email"];
$password = hash("sha256", $_POST["password"]);

$query = $mysqli->prepare("SELECT user_id, first_name,type from users where email = ? AND password = ?");
$query->bind_param("ss", $email, $password);
$query->execute();
$query->store_result();
$num_rows = $query->num_rows();
$query->bind_result($user_id,$first_name,$type);
$query->fetch();
$response = [];
if($num_rows == 0){
    $response["response"] = "failed";
}else{
    $response["response"] = "success";
    $response["first_name"] = $first_name;
    $response["user_id"] = $user_id;
    $resposne["type"] = $type;
}
$json = json_encode($response);
echo $json;
?>