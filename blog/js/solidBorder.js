document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".quote-section img");

    images.forEach(img => {
        let randomColor;
        do {
            randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate a random hex color
        } while (randomColor.length !== 7); // Ensure it's a valid 6-character hex code

        img.style.borderColor = randomColor; // Apply solid random color
        img.style.borderStyle = "solid"; // Ensure the border is solid
    });
});