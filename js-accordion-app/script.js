var btn = document.querySelectorAll("button");
var span = document.querySelectorAll("span");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    for (let j = 0; j < span.length; j++) {
      if (i === j) {
        if (span[j].style.display === "block") {
          span[j].style.display = "none";
        } else {
          span[j].style.display = "block";
        }
      }
    }
  });
}
