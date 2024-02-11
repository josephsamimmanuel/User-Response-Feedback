const ratingEls = document.querySelectorAll(".rating");   //all
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach(function(ratingEl) {                     //for each
  ratingEl.addEventListener("click", function(event) {
    console.log(event.target.innerText || event.target.parentNode.innerText)
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("feedback");              // depending on event class-rating feedback
    event.target.parentNode.classList.add("feedback");   //Add Class List
    
  });
});

function removeActive() {
  ratingEls.forEach(function(ratingEl) {
    ratingEl.classList.remove("feedback");         //Remove Class list
  });
}

btnEl.addEventListener("click",function() {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Your Feedback: ${selectedRating}</strong>
        <p>Your feedback is monitored, which helps us improve our performance.</p>
        `;
  }
});


