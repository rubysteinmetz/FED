console.log("hooiiiii");

var plattegrondButton = document.querySelector("section:nth-of-type(3) div > button");
var plattegrondDialog = document.querySelector("section:nth-of-type(3) div > dialog");

plattegrondButton.onclick = openPlattegrond;

function openPlattegrond() {
  plattegrondDialog.showModal();
}








