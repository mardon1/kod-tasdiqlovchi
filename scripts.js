const input1 = document.querySelector(".input-1");
const input2 = document.querySelector(".input-2");
const button = document.querySelector("button");
const show = document.querySelector(".show");
const text = document.querySelector(".error-text");

input1.addEventListener("keyup", function () {
  if (input1.value.length >= 6) {
    button.removeAttribute("disabled");
    button.style.cursor = "pointer";
    button.style.backgroundColor = "green";
    input2.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", true);
    button.style.cursor = "no-drop";
    button.style.backgroundColor = "#27ae60";
    input2.setAttribute("disabled", true);
  }
});

input2.addEventListener("keyup", function () {
  if (input2.value.length) {
    show.style.opacity = 1;
  } else {
    show.style.opacity = 0;
  }
});

show.addEventListener("click", function () {
  if (input1.type === "password" && input2.type === "password") {
    input1.type = "text";
    input2.type = "text";
  } else {
    input1.type = "password";
    input2.type = "password";
  }
});

button.addEventListener("click", function () {
  if (input1.value === input2.value) {
    text.style.display = "block";
    text.innerHTML = "Nice! Confirm Password Matched";
    text.style.backgroundColor = "rgb(23 234 137 / 19%)";
    text.style.border = "none";
    text.style.color = "#27ae60";
  } else {
    text.style.display = "block";
    text.innerHTML = "Error! Confrim Password Not Match";
    text.style.backgroundColor = "#f8d7da";
    text.style.color = "#8b3e46";
  }
});
