var keyElement = document.querySelectorAll(".key");
var textInput = document.getElementById("textInput");
const keyboardBase = document.querySelector(".keyboard-base");
var shiftActive = false;

textInput.addEventListener("focus", () => {
  keyboardBase.classList.remove("keyboard-hidden");
  keyboardBase.classList.add("fade-in-bottom");
});

keyElement.forEach((el) =>
  el.addEventListener("click", (event) => {
    event.preventDefault();
    let key = event.target.innerText.toLowerCase();
    switch (key) {
      case "backspace":
        let strng = textInput.value;
        document.getElementById("textInput").value = strng.substring(0, strng.length - 1);
        break;
      case "capslock":
        toCapsLock();
        break;
      case "enter":
        textInput.value += "\n";
        break;
      case "space":
        textInput.value += " ";
        break;
      case "shift":
        toShift();
        break;
      case "ok":
        alert(textInput.value);
        break;
      default:
        textInput.value += event.target.innerText;
        console.log(event.target.innerText.toLowerCase());
    }
  })
);

function toCapsLock() {
  var capsLockMode = document.querySelector(".capslock");
  capsLockMode.classList.toggle("active");

  if (capsLockMode.classList.contains("active")) {
    keyElement.forEach((el) => {
      let el1 = el.innerHTML.toUpperCase();
      el.innerHTML = el1;
    });
  } else {
    keyElement.forEach((el) => {
      let el1 = el.innerHTML.toLowerCase();
      el.innerHTML = el1;
    });
  }
}

// Ovo treba da se unaprijedi. Trenutno je identicno funkciji capslock
function toShift() {
  console.log("To shift function");
  shiftActive = !shiftActive;
  if (shiftActive) {
    keyElement.forEach((el) => {
      let el1 = el.innerHTML.toUpperCase();
      el.innerHTML = el1;
    });
  } else {
    keyElement.forEach((el) => {
      let el1 = el.innerHTML.toLowerCase();
      el.innerHTML = el1;
    });
    console.log(shiftActive);
  }
}
