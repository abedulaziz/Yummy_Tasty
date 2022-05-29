
    document.getElementById("btn-login").addEventListener("click",function (){
        var form = document.querySelector('form');
        var formdata = new FormData(form);
        
        axios({
          method: 'post',
          url: './apis/login.php',
          data: formdata
        }).then(function (response){
          if(response.data.response=="success")
          {
            window.location.href = "pages/resturants.html";
            return false;
  
          }
          else
          {
            alert("User not found");
          }
          
          }) ;
      });
      