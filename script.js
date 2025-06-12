
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentIndex = 0;
let autoSlideInterval;
function showImage(index) {
  const img = document.getElementById("displayed-image");
  img.src = images[index];
  updateIndicators();
}
function showPrevious() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}
function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    showNext();
  }, 4000); // 4 seconds
}
function createIndicators() {
  const indicatorsContainer = document.getElementById("indicators");
  indicatorsContainer.innerHTML = ""; // Clear old
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === currentIndex) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentIndex = i;
      showImage(currentIndex);
    });
    indicatorsContainer.appendChild(dot);
  }
}
function updateIndicators() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}
window.onload = function () {
  showImage(currentIndex);
  createIndicators();
  startAutoSlide();
};
