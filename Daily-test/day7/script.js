const rateInputs = document.querySelectorAll('.rate input[type="radio"]');
const submitBtn = document.querySelector('.submit button');
const ratingCard = document.querySelector('.rating-car');
const thankYouCard = document.querySelector('.thankYou');
const ratingValue = document.querySelector('.rating span');

let selectedRating;

thankYouCard.style.display = 'none'

rateInputs.forEach(input => {
  input.addEventListener('click', () => {
    selectedRating = input.value;
  });
});

submitBtn.addEventListener('click', () => {
  if (selectedRating) {
    ratingValue.textContent = selectedRating;
    ratingCard.style.display = 'none';
    thankYouCard.style.display = 'block';
  }
});