function showContent(id, element) {
    document
      .querySelectorAll(".content")
      .forEach((content) => content.classList.remove("active"));
    document
      .querySelectorAll(".button")
      .forEach((btn) => btn.classList.remove("active"));

    document.getElementById(id).classList.add("active");
    element.classList.add("active");
  }