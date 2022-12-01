// DOM
const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const decimalButton = document.querySelector(".decimal");
const showResult = document.querySelector(".result");

const equalsKey = document.querySelector(".equals-key");

// keyboard support
window.addEventListener('keydown', function(event) {
  console.log(event)
  if (event.key >= 0 && event.key <= 9) document.getElementById(event.key).click();
  if (event.key === '/') document.getElementById('divide').click();
  if (event.key === '*') document.getElementById('multiply').click();
  if (event.key === '-') document.getElementById('subtract').click();
  if (event.key === '+') document.getElementById('add').click();
  if (event.key === '=' || event.key === 'Enter') document.getElementById('equal').click();
  if (event.key === 'Backspace') document.getElementById('delete').click();
  if (event.key === 'Escape') document.getElementById('clear').click();
})

// Add...
function add(a, b) {
  return a + b;
}

// Subtract...
function subtract(a, b) {
  return a - b;
}

// Multiply...
function multiply(a, b) {
  return a * b;
}

// Divide...
function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
        if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}

let storedNumber = "";
let clickedOperator = "";
let firstNumber = "";
let result = "";
previousOperand.textContent = " ";
currentOperand.textContent = 0;
let calculationInProgress = false;
let calculated = false;

// event listeners for numberButtons and operatorButtons
numberButtons.forEach((number) => {
  number.addEventListener("click", function () {
    if (calculated) {
      clearOutput();
      calculated = false;
    }

    if (firstNumber == "" || !calculationInProgress) {
      firstNumber += number.value;
      currentOperand.textContent = firstNumber;
    } else {
      storedNumber += number.value;
      currentOperand.textContent = storedNumber;
    }
    if (currentOperand.textContent.length >= 15) {
    }
  });
});

operatorButtons.forEach((operator) => {
  operator.addEventListener("click", function () {
    calculationInProgress = true;
    displayResult();
    // get the operator that was clicked
    clickedOperator = operator.textContent;
    previousOperand.textContent = firstNumber + clickedOperator;
    storedNumber = "";
  });
});

// Event listeners for operator buttons
equalsKey.addEventListener("click", function () {
  calculate();
});

deleteButton.addEventListener("click", function () {
  del();
});

clearButton.addEventListener("click", function () {
  clearOutput();
});

decimalButton.addEventListener("click", function () {
  inputDecimal();
});

function displayResult() {
  // update content of current operation with result and previous operand with the calculation, make storedNumber = result
  previousOperand.textContent =
    firstNumber + " " + clickedOperator + " " + storedNumber + " " + "=";
}

function inputDecimal() {
  if (calculationInProgress) {
    if (storedNumber.includes(".")) return;
    storedNumber += ".";
  } else {
    if (firstNumber.includes(".")) return;
    firstNumber += ".";
  }
}

// Round long decimals
function roundResult(number) {
  return Math.round(number * 1000) / 1000
}

// operator functions
function calculate() {
  result = operate(
    parseFloat(firstNumber),
    parseFloat(storedNumber),
    clickedOperator
  );
  currentOperand.textContent = roundResult(result);
  storedNumber.textContent = roundResult(result);
  displayResult();
  firstNumber = roundResult(result);
  calculationInProgress = false;
  calculated = true;
}

function del() {
  if (calculationInProgress) {
    storedNumber = currentOperand.textContent.slice(
      0,
      currentOperand.textContent.length - 1
    );
    currentOperand.textContent = storedNumber;
  } else {
    firstNumber = currentOperand.textContent.slice(
      0,
      currentOperand.textContent.length - 1
    );
    currentOperand.textContent = firstNumber;
  }
}

function clearOutput() {
  firstNumber = "";
  currentOperand.textContent = 0;
  previousOperand.textContent = " ";
  storedNumber = " ";
}