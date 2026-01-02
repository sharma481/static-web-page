const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

const searchInput = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box .btn");

function filterCards() {
  const value = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(
    ".movie-card, .trend-card"
  );

  cards.forEach(card => {
    const imgAlt = card.querySelector("img")?.alt.toLowerCase() || "";
    card.style.display = imgAlt.includes(value) ? "block" : "none";
  });
}

searchBtn.addEventListener("click", filterCards);
searchInput.addEventListener("keyup", filterCards);
const trendCards = document.querySelectorAll(".trend-card");

trendCards.forEach(card => {
  const video = card.querySelector("video");

  card.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play();
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
  });
});

const loginBtn = document.querySelector(".header button");

loginBtn.addEventListener("click", () => {
  alert("Login sucesfull");
  
});
