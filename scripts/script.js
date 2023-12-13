// JavaScript Document
console.log("hi");

var openMenuButton = document.querySelector("header > button");
var navigatie = document.querySelector("header nav");

openMenuButton.onclick = openMenu;

function openMenu() {
  navigatie.classList.add("open");
  document.documentElement.classList.add("open");
}

var sluitMenuButton = document.querySelector("header nav button");

sluitMenuButton.onclick = sluitMenu;

function sluitMenu() {
  navigatie.classList.remove("open");
  document.documentElement.classList.remove("open");
}

var responsiveNav = document.querySelector("header nav section > h2:first-of-type");
var eersteLijst = document.querySelector("header nav ul:first-of-type")

responsiveNav.onmouseover = menuOpenklappen

function menuOpenklappen() {
  responsiveNav.classList.add("hallo");
  document.elementFromPoint.classList.add("hallo");
}


window.onresize = checkDetails;

const details = document.querySelectorAll("details");

function checkDetails() {
  const vpWidth = window.innerWidth;

  if (vpWidth > 640) {
    console.log("breed");

    details.forEach(detail => {
      detail.open = true;
    });
  }
  else {
    details.forEach(detail => {
      detail.open = false;
    });
  }
}

