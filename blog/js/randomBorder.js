document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".quote-section img");
    images.forEach(img => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate random hex color
        img.style.borderColor = randomColor; // Apply to border
    });
});