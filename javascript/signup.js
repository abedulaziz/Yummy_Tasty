
<<<<<<< HEAD

document.getElementById("signup").addEventListener("click",  ()=> {
  var form = document.querySelector("form");
  var formdata = new FormData(form);
  console.log(formdata);

  axios({

    method: "post",
    url: "./../apis/signup.php",
    data: formdata,

  }).then(function (response) {

    if (response.data.response == "success") {
      alert("welcome to our site");
      window.location.href = "./resturants.html";
      return false;
    } else {
      alert("try different email or password");
=======
    document.getElementById("signup").addEventListener("click",function (){
      var form = document.querySelector('form');
      var formdata = new FormData(form);
      console.log(formdata)
>>>>>>> 0e0fe920daf166562068864ecea230f70a9f69be
      
    }
  });
});
