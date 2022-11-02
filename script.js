// // DOM

// const numberButton = document.querySelectorAll('.number');
// const operatorButton = document.querySelectorAll('.operator');
// const clearButton = document.querySelector('.clear');
// const deleteButton = document.querySelector('.delete');
// const showResult = document.querySelector('.result');
// const currentOperand = document.querySelector('.current-operand');
// const previousOperand = document.querySelector('.previous-operand');
// const equalsKey = document.querySelector('.equal-sign');

// currentOperand.textContent = ' ';
// previousOperand.textContent = ' ';

// // basic operators for calculator

// const add = (x,y) => {
//     return x + y;
//   };
  
// const subtract = (x,y) => {
//       return x - y;
//   };

//   const multiply = (x,y) => {
//     return x * y;
//   };

// const divide = (x,y) => {
//     return x / y;
// };

// // Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

// function calculate(x, operator, y) {
//     var operators = {
//       '+': function (a, b) { return a + b },
//       '-': function (a, b) { return a - b },
//       '*': function (a, b) { return a * b },
//       '/': function (a, b) { return a / b }
//     }
  
//     return operate in operators ? operators[operate](x, y) : NaN
//   }

// // Create the functions that populate the display when you click the number buttons.
// // You should be storing the ‘display value’ in a variable somewhere for use in the next step.

// let storedNumber = '';
// let clickedOperator = ''
// let firstNumber = '';
// let result = '';
// currentOperand.textContent = 0;

// numberButton.forEach((number) => {
//     number.addEventListener('click', function() {
//       storedNumber += number.value;
//       currentOperand.textContent = storedNumber;
//     })
//   });
  
//   operatorButton.forEach((operator => {
//     operator.addEventListener('click', function() {
//       if (firstNumber && storedNumber) {
//         displayResult();
//       }
//       // save the first number
//       firstNumber = storedNumber;
  
//       // get the operator that was clicked
//       clickedOperator = operator.textContent;
//       previousOperand.textContent = storedNumber + clickedOperator;
//       storedNumber = '';
  
//       console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber)
//       console.log(clickedOperator);
  
//     })
//   }));
  
//   equalsKey.addEventListener('click', function() {
//     displayResult();
//   });
  
//   function displayResult() {
//     result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)
//     // update content of current operation with result and previous operand with the calculation, make storedNumber = result
//     currentOperand.textContent = result;
//     previousOperand.textContent = firstNumber + ' ' + clickedOperator + ' ' + storedNumber;
//     storedNumber = result;
//     console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber);
//   }

// DOM elements 
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete')
const showResult = document.querySelector('.result');
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const equalsKey = document.querySelector('.equals-key');

currentOperand.textContent = ' ';
previousOperand.textContent = ' ';

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

let storedNumber = '';
let clickedOperator = ''
let firstNumber = '';
let result = '';
currentOperand.textContent = 0;


numberButton.forEach((number) => {
  number.addEventListener('click', function() {
    storedNumber += number.value;
    currentOperand.textContent = storedNumber;
  })
});

operatorButton.forEach((operator => {
  operator.addEventListener('click', function() {
    if (firstNumber && storedNumber) {
      displayResult();
    }
    // save the first number
    firstNumber = storedNumber;

    // get the operator that was clicked
    clickedOperator = operator.textContent;
    previousOperand.textContent = storedNumber + clickedOperator;
    storedNumber = '';

    console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber)
    console.log(clickedOperator);

  })
}));

equalsKey.addEventListener('click', function() {
  displayResult();
});

function displayResult() {
  result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)
  // update content of current operation with result and previous operand with the calculation, make storedNumber = result
  currentOperand.textContent = result;
  previousOperand.textContent = firstNumber + ' ' + clickedOperator + ' ' + storedNumber;
  storedNumber = result;
  console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber);
}