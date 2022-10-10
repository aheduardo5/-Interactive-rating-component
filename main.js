let numberContainer = document.querySelector(".rating-state__number-container");
let rateNumber = document.querySelector(".thankyou-state__result--new-numbern");
let submitButton = document.querySelector(".rating-state__button");
let ratingState = document.querySelector(".rating-state");
let thankyouState = document.querySelector(".thankyou-state");

numberContainer.addEventListener("click", (e) => {
  let numberSelected = e.target.innerText;
  if (numberSelected <= 5) {
    console.log(numberSelected);
    submitFunction(numberSelected);
  }
});
const submitFunction = (numberSelected) =>
  submitButton.addEventListener("click", () => {
    ratingState.style.display = "none";
    thankyouState.style.display = "flex";
    rateNumber.innerText = numberSelected;
  });
