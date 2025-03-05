const add = function (a, b) {
  const result = a + b;
  return result.toFixed(3);
};

const subtract = function (a, b) {
  const result = a - b;
  return result.toFixed(3);
};

const multiply = function (a, b) {
  const result = a * b;
  return result.toFixed(3)
};

const divide = function (a, b) {
  if (a === 0 || b === 0) {
    operand1 = [];
    operand2 = [];
    operator = [];
    displayArr = [];
    return "AHHHH!"
  } else {
    const result = a / b;
    return result.toFixed(3);
  }
};

let operand1 = [];
let operator = [];
let operand2 = [];
let displayArr = [];

const operate = function (num1, op, num2) {
  if (op === "+") {
    return add(num1, num2);
  } else if (op === "-") {
    return subtract(num1, num2);
  } else if (op === "*") {
    return multiply(num1, num2);
  } else if (op === "/") {
    return divide(num1, num2);
  }
};

const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");
const operators = ["+", "-", "*", "/"];



buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.target.id === "clear") {
      display.textContent = "";
      displayArr = [];
      operand1 = [];
      operator = [];
      operand2 = [];
    } else if (operators.includes(event.target.id) && operator.length === 0) {
      operator.push(event.target.id);
      operand1.push(Number(display.textContent));
      
      displayArr = [];
      
    } else if (operators.includes(event.target.id) && operator.length > 0) {
      operand2.push(displayArr.join(""));
      console.log(operand2);
      console.log(displayArr);
      if (operand2[0] === "") {
        operator.push(event.target.id);
        operator.shift();
        operand2.shift();
      } else {
        display.textContent = operate(
          Number(operand1.shift()),
          operator.shift(),
          Number(operand2.shift())
        );
        operand1.push(Number(display.textContent))
        operator.push(event.target.id);
        displayArr = [];
      }
    }
    else if (event.target.id === "=") {
      operand2.push(displayArr.join(""));
      console.log(operand2);
      if (operand2[0] === "") {
        operand1 = [];
        operand2 = [];
        operator = [];
        displayArr = [];
        display.textContent = "Uh Oh!";
        console.log(display.textContent);
      } else {
        
        display.textContent = operate(
          Number(operand1.shift()),
          operator.shift(),
          Number(operand2.shift())
        );
        displayArr = [];
       // displayArr.push(display.textContent)
        console.log(operand1);
        console.log(operand2);
        console.log(operator)
      }
    } else if (event.target.id === "deci") {
      if (displayArr.includes(".")) {
        return;
      }
      displayArr.push(event.target.textContent);
      display.textContent = displayArr.join("");
    } else if (event.target.id === "negPos") {
      display.textContent = Number(display.textContent * -1)
      displayArr = [];
      displayArr.push(display.textContent);
      
    } else if (
      typeof Number(event.target.id) === "number" &&
      operand1.length === 0
    ) {
      displayArr.push(event.target.id);
      display.textContent = displayArr.join("");
    } else if (
      typeof Number(event.target.id) === "number" &&
      operand1.length > 0
    ) {
      displayArr.push(event.target.id);
      display.textContent = displayArr.join("");
    } 
    
  });
});
