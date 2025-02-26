const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b
};

const divide = function (a, b) {
  const result = a / b;
  return result.toFixed(3);
};

let operand1;
let operator;
let operand2;

const operate = function (operand1, operator, operand2) {
    if (operator === "+") {
        return add(operand1, operand2)
    } else if (operator === "-") {
        return subtract(operand1, operand2)
    } else if (operator === "*") {
        return multiply(operand1, operand2)
    } else {
        return divide(operand1, operand2)
    };
}