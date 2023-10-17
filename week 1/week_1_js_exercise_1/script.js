let name = document.getElementById("name");
let button = document.getElementById("button");

function askName() {
  name.innerHTML = prompt("Enter your name.");
}
  
button.addEventListener("click", askName);

