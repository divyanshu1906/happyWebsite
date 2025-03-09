/*function toggleButton() {
  const button = document.getElementById("addButton");
  button.classList.toggle("done");
  if (button.classList.contains("done")) {
      button.textContent = "✔ Done";
  } else {
      button.textContent = "+ Add";
  }
}*/
document.querySelectorAll(".pill-button").forEach(button => {
  button.addEventListener("click", function () {
      this.classList.toggle("done");
      if (this.classList.contains("done")) {
          this.textContent = "✔ Done";
      } else {
        button.textContent = "+ Add";
      }
  });
});