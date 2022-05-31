document.getElementById("signup").addEventListener("click",  ()=> {
  var form = document.querySelector("form");
  var formdata = new FormData(form);

  axios({

    method: "post",
    url: "./../apis/signup.php",
    data: formdata,

  }).then(function (response){
    console.log(response)
    if (response.data.response == "success") {
      alert("welcome to our site");
      window.location.href = "./resturants.html";
      return false;
    } else {
      alert("Input all required fields please.");
    }})
});
