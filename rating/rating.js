const ratingStars = document.getElementsByClassName("rating-star");
const ratingInput = document.querySelector('input[name="rating"]');

for (let i = 0; i < ratingStars.length; i++) {
  ratingStars[i].innerText = "☆";
  ratingStars[i].addEventListener("click", (e) => {
    e.preventDefault();
    ratingInput.value = i + 1;
    for (let j = 0; j < ratingStars.length; j++) {
      if (j <= i) {
        ratingStars[j].innerText = "★";
      } else {
        ratingStars[j].innerText = "☆";
      }
    }
  });
}

const reviews = [];

function submitReview(form) {
  reviews.push({
    surname: form.surname.value,
    name: form.name.value,
    birthDate: form.birthDate.value,
    email: form.email.value,
    review: form.review.value,
    rating: form.rating.value,
  });
  displayReviews();
}

function displayReviews() {
  document.getElementById("review-num").innerText = reviews.length;
  // TODO
}

displayReviews();
