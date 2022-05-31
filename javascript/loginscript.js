

document.getElementById("btn-login").addEventListener("click", function (){
  const form = document.querySelector('form');
  const formdata = new FormData(form);
  axios({
    method: 'post',
    url: './apis/login.php',
    data: formdata
  }).then(function (response){

    if(response.data.response=="success") {
      
      if (response.data.type == "admin") {
        window.location.href = "./admin/manage_users.html"
      }
      else {
        localStorage.setItem("username", response.data.first_name);
        localStorage.setItem("user_id", response.data.user_id);
        window.location.href = "pages/resturants.html";
        return false;
      }
    }
    else
    {
      alert("User not found");
    }
    
    }) ;
});
