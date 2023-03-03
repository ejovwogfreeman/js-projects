var section = document.getElementById("section");
var form = document.getElementById("form");
var notification = document.getElementById("notification");
var formInput = document.getElementById("formInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

function addTask() {
  var div = document.createElement("div");
  var input = document.createElement("input");
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");
  var btn3 = document.createElement("button");
  btn1.textContent = "Edit";
  btn2.textContent = "Delete";
  btn3.textContent = "Complete";
  if (formInput.value === "") {
    notification.style.display = "block";
    notification.textContent = "Please Enter A Task";
    notification.classList.add("error");
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
    return;
  } else {
    notification.style.display = "block";
    notification.textContent = "Task Added Successfully";
    notification.classList.add("success");
    input.setAttribute("id", "input");
    input.setAttribute("readonly", "readonly");
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  }
  section.prepend(div);
  div.appendChild(input);
  div.appendChild(btn1);
  div.appendChild(btn2);
  div.appendChild(btn3);
  input.value = formInput.value;
  btn1.textContent = "Delete";
  btn2.textContent = "Edit";
  btn3.textContent = "Complete";
  formInput.value = "";

  btn1.addEventListener("click", () => {
    div.style.display = "none";
  });

  btn2.addEventListener("click", () => {
    if (btn2.textContent === "Edit") {
      btn2.textContent = "Save";
      input.removeAttribute("readonly", "readonly");
    } else {
      btn2.textContent = "Edit";
      input.setAttribute("readonly", "readonly");
    }
  });

  btn3.addEventListener("click", () => {
    if (btn3.textContent === "Complete") {
      btn3.textContent = "Incomplete";
      input.style.textDecoration = "line-through";
    } else {
      btn3.textContent = "Complete";
      input.style.textDecoration = "none";
    }
  });
}
