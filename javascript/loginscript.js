

document.getElementById("btn-login").addEventListener("click", function (){
  const form = document.querySelector('form');
  const formdata = new FormData(form);
  axios({
    method: 'post',
    url: './apis/login.php',
    data: formdata
  }).then(function (response){
    console.log(response.data)
    if(response.data.response=="success")
    {
      localStorage.setItem("username", response.data.first_name);
      localStorage.setItem("user_id", response.data.user_id);
      window.location.href = "pages/resturants.html";
      return false;

    }
    else
    {
      alert("User not found");
    }
    
    }) ;
});
