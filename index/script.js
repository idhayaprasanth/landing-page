// JavaScript for handling mobile menu toggle
const burgerIcon = document.getElementById('burger-icon');
const mobileMenu = document.getElementById('mobile-menu');
const burgerContainer = document.getElementById('burger-container');

burgerIcon.addEventListener('click', () => {
  mobileMenu.style.display = (mobileMenu.style.display === 'block') ? 'none' : 'block';
  burgerContainer.style.display = (mobileMenu.style.display === 'block') ? 'block' : 'none';
});

// Close the mobile menu when clicking outside the menu
document.addEventListener('click', (event) => {
  if (!burgerContainer.contains(event.target) && event.target !== burgerIcon) {
    mobileMenu.style.display = 'none';
    burgerContainer.style.display = 'none';
  }
});

let currentIndex = 0;
const reviews = document.querySelectorAll('.review-item');
const reviewsContainer = document.querySelector('.reviews');

function showNextReview() {
  if (currentIndex < reviews.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  const translateValue = -currentIndex * reviews[0].clientWidth;
  reviewsContainer.style.transform = `translateX(${translateValue}px)`;
}

function autoSlide() {
  showNextReview();
}

// Set interval to auto-slide reviews every 3 seconds (adjust as needed)
setInterval(autoSlide, 3000);

// Show the initial review
showNextReview();


