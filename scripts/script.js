// JavaScript Document
console.log("hi");

var openMenuButton = document.querySelector("header > button");
var navigatie = document.querySelector("header nav");

openMenuButton.onclick = openMenu;

function openMenu() {
  navigatie.classList.add("open");
}

var sluitMenuButton = document.querySelector("header nav button");

sluitMenuButton.onclick = sluitMenu;

function sluitMenu() {
  navigatie.classList.remove("open");
}

