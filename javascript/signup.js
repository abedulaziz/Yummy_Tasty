document.getElementById("signup").addEventListener("click",  ()=> {
  var form = document.querySelector("form");
  var formdata = new FormData(form);
  console.log(formdata);

  axios({

    method: "post",
    url: "./../apis/signup.php",
    data: formdata,

  }).then(function (response){

    if (response.data.response == "success") {
      alert("welcome to our site");
      window.location.href = "./resturants.html";
      return false;
    } else {
      alert("Error! wrong input fill all the required * field");
    };})
});
