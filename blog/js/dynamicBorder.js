document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".quote-section img");

    function getRandomColor() {
        let color;
        do {
            color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        } while (color.length !== 7); // Ensure valid 6-character hex code
        return color;
    }

    function changeBorderColor() {
        images.forEach(img => {
            img.style.borderColor = getRandomColor();
            img.style.borderStyle = "solid";
        });
    }

    // Change border color every 1 second (1000ms)
    setInterval(changeBorderColor, 1000);

    // Initial color setup
    changeBorderColor();
});