

document.getElementById("btn-login").addEventListener("click", function (){
  const form = document.querySelector('form');
  const formdata = new FormData(form);
  
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
      
// const getData = () => {
//   axios.get("./../apis/login.php").then(res => {
//     console.log(res)
//   })
// }
// getData()