const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let index = 0;
const images = document.querySelectorAll(".carousel-track img");
const totalImages = images.length;

function moveSlide(step) {
    index = (index + step + totalImages) % totalImages;
    track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => moveSlide(1));
prevBtn.addEventListener("click", () => moveSlide(-1));

// Auto slide
setInterval(() => moveSlide(1), 3000);