window.onload = () => {
    
    axios({
      method: 'get',
      url: '../apis/list-restaurants.php'
    }).then(function (response){
    //   if(response.checkconnection=="success")
      {
        console.log("heyyyyyy");
          for (let i=0;i<length.response.data.response ; i++){
              console.log("hello");

                //     <div class="resturant">
                //     <div class="res_profile_img">
                //     <div class="img-wrapper">
                //         <img src="./../assets/images/resturant_1.jpg" alt="">
                //     </div>
                //     </div>
                //     <div class="res-about">
                //     <h3 class="res_name">Lorem ipsum dolor</h3>
                //     
                //     <p class="res_details"><a href="#">Learn More...</a></p>
                //     </div>
                // </div>
                // </div>
            // </div>
                console.log(response.data.response[i].profile_pic)
                console.log(response.data.response[i].restaurant_name)
                console.log(response.data.response[i].description)
                // newdiv = document.createElement('div');
                // newdiv.setAttribute('class',"resturant");
                // newdivprofile = document.createElement('div');
                // newdivprofile.setAttribute('class',"res_profile_img");
                // newdivwrapper = document.createElement('div');
                // newdivwrapper.setAttribute('class',"img-wrapper");
                // newdivwrapper.innerHTML ='<img src='+response.data.response[i].profile_pic+' alt="a"></img>';
                // document.body.appendChild(newdiv);
                // newdivabout = document.createElement('div');
                // newdivabout.setAttribute('class',"res-about");
                // newdivabout.innerHTML = '<h3 class="res_name">'+response.data.response[i].restaurant_name+'</h3> <p class="describtion">'+response.data.response[i].description+'</p><p class="res_details"><a href="#"></a></p></div></div></div></div>';
             
      }}

      else
      {
        alert("User not found");
      }
      
      }) ;
  };
  