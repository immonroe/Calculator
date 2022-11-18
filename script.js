// DOM 
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete')
const decimalButton = document.querySelector('.decimal')
const showResult = document.querySelector('.result');

const equalsKey = document.querySelector('.equals-key');

// Add... 
function add(a, b) {
  return a + b;
};

// Subtract...
function subtract(a, b) {
  return a - b;
};

// Multiply... 
function multiply(a, b) {
  return a * b;
};

// Divide... 
function divide(a, b) {
  return a / b;
};

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
// switch statement is much better than seperate const/functions for each operator - cleaner code.

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
};

//Create the functions that populate the display when you click the 
//number buttons… you should be storing the ‘display value’ in a variable somewhere
//for use in the next step.

let storedNumber = ''; // stored numbers are giving an error when trying to add operators to them to make new calculations
let clickedOperator = ''
let firstNumber = '';
let result = '';
previousOperand.textContent = ' ';
currentOperand.textContent = 0;
let calculationInProgress = false;


numberButtons.forEach((number) => {
  number.addEventListener('click', function() {
    if (firstNumber == '' || !calculationInProgress) {
        firstNumber += number.value;
        currentOperand.textContent = firstNumber;
    } else {
        storedNumber += number.value;
        currentOperand.textContent = storedNumber;
    }
  })
});



operatorButtons.forEach((operator => {
  operator.addEventListener('click', function() {
    calculationInProgress = true;
    displayResult();

    // get the operator that was clicked
    clickedOperator = operator.textContent;
    previousOperand.textContent = firstNumber + clickedOperator;
    storedNumber = '';
    // console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber)
    // console.log(clickedOperator);
  })
}));

equalsKey.addEventListener('click', function() {
  calculate();
});

deleteButton.addEventListener('click', function() {
    del();
  });

  clearButton.addEventListener('click', function() {
    clearOutput();
  });

function displayResult() {
  // update content of current operation with result and previous operand with the calculation, make storedNumber = result
//   currentOperand.textContent = result;
  previousOperand.textContent = firstNumber + ' ' + clickedOperator + ' ' + storedNumber + ' ' + '=';
  console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber);
};

function calculate() {
    result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)
    currentOperand.textContent = result;
    displayResult()
    firstNumber = result;
    calculationInProgress = false;
}

// Delete button
function del(){
    if (calculationInProgress) {
        storedNumber = currentOperand.textContent.slice(0,currentOperand.textContent.length-1);
        currentOperand.textContent = storedNumber;
    } else {
        firstNumber = currentOperand.textContent.slice(0,currentOperand.textContent.length-1);
        currentOperand.textContent = firstNumber;
    }
};

// Clear button... Pressing “clear” should wipe out any existing data... make sure the user is really starting fresh after pressing “clear”
function clearOutput(){
    firstNumber = '';
    currentOperand.textContent= 0;
    previousOperand.textContent= ' ';
    storedNumber = ' ';
};

// You should round answers with long decimals so that they don’t overflow the screen.
// currentOperand.textContent.length
// previousOperand.textContent.length
// .toFixed()
// https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary


// Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!


// Keyboard support