
const resturantsList = document.getElementById("resturantsList")

document.getElementById("username").textContent = localStorage.getItem("username").toUpperCase()  

try {
  
  axios({
  
    method: "get",
    url: './../apis/list-restaurants.php',
  
  }).then(function (response) {
    console.log(response)
    for (let i = 0; i< response.data.length; i++) {
    
      let data = response.data[i];
  
      let rest = document.createElement("div")
      rest.className = "resturant"
      rest.id = i
      
      let resProfileImg = document.createElement("div")
      resProfileImg.className = "res_profile_img"
      
      let imgWrapper = document.createElement("div")
      imgWrapper.className = "img-wrapper"
  
      let img = document.createElement("img")
      img.src = data.profile_pic
    
      imgWrapper.appendChild(img)
      resProfileImg.appendChild(imgWrapper)
    
      let resAbout = document.createElement("div")
      resAbout.className = "res-about"
  
      let resName = document.createElement("h3")
      resName.innerText = data.restaurant_name
      resName.className = "res_name"
  
      let describtion = document.createElement("p")
      describtion.innerText = data.description
      describtion.className = "describtion"
  
      let resDetails = document.createElement("p")
      resDetails.innerHTML = `<a href="#" id="resDirector">Learn More...</a>`
      localStorage.setItem("resturant_id", i)
      resDetails.className = "res_details"
  
      resAbout.appendChild(resName)
      resAbout.appendChild(describtion)
      resAbout.appendChild(resDetails)
  
      rest.appendChild(resProfileImg)
      rest.appendChild(resAbout)
  
      resturantsList.appendChild(rest)

    }
  });
} catch(err) {
  alert("Something went wrong.")
}



resturantsList.addEventListener("click" , (e) => {
  target = e.target
  if (target.id === "resDirector") {
    
    localStorage.setItem("resturant_id", target.closest(".resturant").id)
    window.location.href = "./../pages/resturant_details.html"
  }

})
