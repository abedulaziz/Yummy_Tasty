
const addReview = document.getElementById("addReview"),
reviewsContainer = document.querySelector(".reviews .content .res_reviews")

document.querySelector(".reviews .add-review .username").textContent = localStorage.getItem("username")

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


const resturantData = new FormData()
resturantData.append("restaurant_id", localStorage.getItem("resturant_id"))


let resturantReq = axios({
method: "post",
url: './../apis/restaurant.php',
data: resturantData
})

let reviewsRed = axios({
method: "post",
url: './../apis/list-approved-review.php',
data: resturantData
})

axios.all([resturantReq, reviewsRed]).then(axios.spread((...responses) => {
  const resturantRes = responses[0].data,
        reviewsRes = responses[1].data;

  console.log(resturantRes)
  document.getElementById("resturant_img").src = resturantRes.profile_pic;
  document.getElementById("resName").textContent = resturantRes.restaurant_name;
  document.getElementById("resAddress").textContent = resturantRes.address;
  document.getElementById("resDescription").textContent = resturantRes.description;

  console.log(reviewsRes)
  for (let i =0; i< reviewsRes.length; i++) {
    let review = document.createElement('div')
    review.className = "review"

    let username = document.createElement('h3')
    username.className = "username"
    username.textContent = reviewsRes[i].first_name + " " +reviewsRes[i].last_name

    let revRate = document.createElement('div')
    revRate.classList.add("review_rate")

    solidStarsCounter = 1
    for (let j = 0; j< 5; j++) {
      let star = document.createElement("i")
      if (solidStarsCounter <= reviewsRes[i].rate) {
        star.classList.add("fa-star", "fa-solid")
        solidStarsCounter++
      }
      else star.classList.add("fa-star", "fa-regular")
      revRate.appendChild(star)
    }

    let userFeedback = document.createElement("div")
    userFeedback.className = "user_feedback"
    userFeedback.textContent = reviewsRes[i].description;

    review.appendChild(username)
    review.appendChild(revRate)
    review.appendChild(userFeedback)

    reviewsContainer.appendChild(review)

  }

}))


function submitReview(container) {
  addReview.classList.add("reviewed")
  reviewsContainer.removeChild(container)
  }
  
  function cancelReview(container) {
  reviewsContainer.removeChild(container)
  addReview.addEventListener("click", addReviewWidget)
  }