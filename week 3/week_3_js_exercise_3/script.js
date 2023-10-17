function operation() {
  let firstOperand = document.getElementById("firstOperand");

  let secondOperand = document.getElementById("secondOperand");

  let operators = document.getElementById("operators");
  let selectedOperator = operators.value;

  let result = document.getElementById("result");
  let operand1 = parseFloat(firstOperand.value);
  let operand2 = parseFloat(secondOperand.value);

  switch (selectedOperator) {
    case ">":
      if (operand1 > operand2) {
        result.innerHTML = "True";
      } else {
        result.innerHTML = "False";
      }
      break;

    case "<":
      if (operand1 < operand2) {
        result.innerHTML = "True";
      } else {
        result.innerHTML = "False";
      }
      break;

    case "!=":
      if (operand1 != operand2) {
        result.innerHTML = "True";
      } else {
        result.innerHTML = "False";
      }
      break;
    default:
      alert("No operator found")
  }
}

let button = document.getElementById("button")

button.addEventListener("click", operation);

