// Scroll to story
function scrollToStory() {
  document.querySelector(".story").scrollIntoView();
}

// Fade-in animation on scroll
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach(el => observer.observe(el));

// Love Reasons
const reasons = [
  "You make my world brighter.",
  "Your smile melts my heart.",
  "You believe in me when I doubt myself.",
  "You are my peace and my adventure.",
  "Life feels right with you.",
  "You are my favorite person."
];

function showReason() {
  const random = reasons[Math.floor(Math.random() * reasons.length)];
  document.getElementById("reasonText").innerText = random;
}

// Countdown
const targetDate = new Date("Feb 14, 2026 00:00:00").getTime();

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("timer").innerHTML =
    days + " Days " + hours + " Hours " + minutes + " Minutes ❤️";

}, 1000);

// Final Button
function showForever() {
  document.getElementById("foreverMessage").innerText =
    "Forever and always. No matter what. 💖";
}
