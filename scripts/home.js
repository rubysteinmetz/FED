console.log("hooiiiii");

var plattegrondButton = document.querySelector("section:nth-of-type(6) div > button");
var plattegrondDialog = document.querySelector("section:nth-of-type(6) div > dialog");

plattegrondButton.onclick = openPlattegrond;

function openPlattegrond() {
  plattegrondDialog.showModal();
}


