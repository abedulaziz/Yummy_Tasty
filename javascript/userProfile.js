
document.getElementById("username").textContent = localStorage.getItem("username").toUpperCase()



userID = new FormData()
userID.append("user_id", localStorage.getItem("user_id"))

let retrieveUserInfo = axios({
  method: "post",
  url: "./../apis/user-profile.php",
  data: userID
})

retrieveUserInfo.then(res => {
  info = res.data

  document.querySelector(".user_info_details .first_name .user_fname").textContent = info.first_name

  document.getElementById("usernameHead").textContent = `${info.first_name} ${info.last_name}`

  document.querySelector(".user_info_details .Last_name .user_lname").textContent = info.last_name
  document.querySelector(".user_info_details .email .user_email").textContent = info.email

  document.getElementById("userEmail").textContent = info.email

  document.querySelector(".user_info_details .gender .user_gender").textContent = info.gender

  if (info.gender === "female") {
    document.querySelector(".user-profile .profile_img_wrapper img").src = "./../assets/user_profile_image/female_profile_image.jpg"
  }
  else {
    document.querySelector(".user-profile .profile_img_wrapper img").src = "./../assets/user_profile_image/male_profile_image.jpg"
  }

})



const overlay = document.querySelector(".overlay")
const editButton = document.getElementById("editProfile")

editButton.addEventListener("click", () => {
  overlay.style.display= "block"

  
})
