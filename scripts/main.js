let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/kittu.png") {
    myImage.setAttribute("src", "images/kittu2.png");
  } else {
    myImage.setAttribute("src", "images/kittu.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername() {
  let myName = prompt("Please enter your name!");

  if (!myName) {
    setUsername();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Kittu is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUsername();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Kittu is cool, " + storedName;
}

myButton.onclick = function () {
  setUsername();
};
