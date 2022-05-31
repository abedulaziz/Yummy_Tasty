
const addReview = document.getElementById("addReview"),
      reviewsContainer = document.querySelector(".reviews .content .res_reviews")

document.getElementById("username").textContent = localStorage.getItem("username")

if (true) {

  addReview.addEventListener("click", addReviewWidget)
}


function addReviewWidget() {
  var currUserReview = document.createElement("div")
  currUserReview.classList.add("current_user_review")

  let reviewHead = document.createElement("h4")
  reviewHead.classList.add("rev_head")
  reviewHead.innerText = "Your Review:"

  let description = document.createElement("textarea")
  description.id = "description"
  description.setAttribute("name", "description")

  let reviewRate = document.createElement("div")
  reviewRate.classList.add("rev_rate")
  for (let i =0; i<5; i++) {
    let star =document.createElement("i")
    star.classList.add("fa-regular", "fa-star")
    reviewRate.appendChild(star)
  }

  let reviewStatus = document.createElement("div")
  reviewStatus.className = "rev_status"

  let cancel = document.createElement("div")
  cancel.className = "cancel"
  cancel.innerText = "Cancel"
  let submit = document.createElement("div")
  submit.className = "submit"
  submit.innerText = "Submit"

  reviewStatus.appendChild(cancel)
  reviewStatus.appendChild(submit)

  currUserReview.appendChild(reviewHead)
  currUserReview.appendChild(description)
  currUserReview.appendChild(reviewRate)
  currUserReview.appendChild(reviewStatus)

  reviewsContainer.insertBefore(currUserReview, reviewsContainer.firstChild)
  addReview.removeEventListener("click", addReviewWidget)

  submit.addEventListener("click",() => submitReview(currUserReview))
  cancel.addEventListener("click",() => cancelReview(currUserReview))
}

function submitReview(container) {
  addReview.classList.add("reviewed")
  reviewsContainer.removeChild(container)
}

function cancelReview(container) {
  reviewsContainer.removeChild(container)
  addReview.addEventListener("click", addReviewWidget)
}
//   const formdata = new FormData();
//   formdata.append("res",ret)

try {
  
  axios({
  
    method: "post",
    url: './../apis/restaurant.php',
  
  }).then(function (response) {
    
    });
  } catch(err) {
    // alert("Something went wrong.")
    }