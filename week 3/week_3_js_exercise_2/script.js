const day = new Date().getDay();

function whatDay() {
switch (day) {
  case 0:
    alert("it is Sunday");
    break;
  case 1: 
    alert("It is Monday");
    break; 
  case 2: 
    alert("It is Tuesday");
    break; 
  case 3: 
    alert("It is Wednesday");
    break; 
  case 4: 
    alert("It is Thursday");
    break; 
  case 5: 
    alert("It is Friday");
    break; 
  case 6:
    alert("It is Saturday");
    break;
  default:
    console.log("No Date Found")
  }
}

button.addEventListener("click", whatDay);