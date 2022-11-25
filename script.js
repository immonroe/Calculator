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

// Keyboard support

function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key) // create function for appending numbers
  if (e.key === '.') inputDecimal()
  if (e.key === '=' || e.key === 'Enter') calculate()
  if (e.key === 'Backspace') del()
  if (e.key === 'Escape') clear()
  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
    setOperation(convertOperator(e.key))
}

function convertOperator(keyboardOperator) {
  if (keyboardOperator === '/') return '÷'
  if (keyboardOperator === '*') return '×'
  if (keyboardOperator === '-') return '−'
  if (keyboardOperator === '+') return '+'
}

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
    case "*":
      return multiply(a, b);
    case "/":
      // Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
      if(storedNumber === '0') {
        return "ERROR"
      } else {
        return divide(a, b);
      }
  }
}

let storedNumber = "";
let clickedOperator = "";
let firstNumber = "";
let result = "";
previousOperand.textContent = " ";
currentOperand.textContent = 0;
let calculationInProgress = false;

// event listeners for numberButtons and operatorButtons
numberButtons.forEach((number) => {
  number.addEventListener("click", function () {
    if (firstNumber == "" || !calculationInProgress) {
      firstNumber += number.value;
      currentOperand.textContent = firstNumber;
    } else {
      storedNumber += number.value;
      currentOperand.textContent = storedNumber;
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
  console.log("FirstNumber" + firstNumber + "Stored" + storedNumber);
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
  // can more be added to the round function to make less code?
  currentOperand.textContent = roundResult(result);
  storedNumber.textContent = roundResult(result);
  displayResult();
  firstNumber = roundResult(result);
  calculationInProgress = false;
  console.log(roundResult(result))
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