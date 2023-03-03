var slides = document.querySelectorAll("img");
var left = document.getElementById("left");
var right = document.getElementById("right");

let slideIndex = 0;

slides[slideIndex].style.display = "block";

left.addEventListener("click", () => {
  if (slideIndex === 0) {
    slideIndex = slides.length;
  }
  slideIndex -= 1;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    if (slideIndex === i) {
      slides[i].style.display = "block";
    }
  }
});

right.addEventListener("click", () => {
  if (slideIndex === slides.length - 1) {
    slideIndex = -1;
  }
  slideIndex += 1;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    if (slideIndex === i) {
      slides[i].style.display = "block";
    }
  }
});
