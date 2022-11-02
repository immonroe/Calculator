// DOM

const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const showResult = document.querySelector('.result');
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const equalsKey = document.querySelector('.equal-sign');

currentOperand.textContent = ' ';
previousOperand.textContent = ' ';

// basic operators for calculator

const add = (x,y) => {
    return x + y;
  };
  
const subtract = (x,y) => {
      return x - y;
  };

  const multiply = (x,y) => {
    return x * y;
  };

const divide = (x,y) => {
    return x / y;
};

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function calculate(x, operate, y) {
    var operators = {
      '+': function (a, b) { return a + b },
      '-': function (a, b) { return a - b },
      '*': function (a, b) { return a * b },
      '/': function (a, b) { return a / b }
    }
  
    return operate in operators ? operators[operate](x, y) : NaN
  }

// Create the functions that populate the display when you click the number buttons.
// You should be storing the ‘display value’ in a variable somewhere for use in the next step.

let storedNumber = '';
let clickedOperator = ''
let firstNumber = '';
let result = '';
currentOperand.textContent = 0;

