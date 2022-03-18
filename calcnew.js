/**
 * Add click handlers to the number buttons
 * Create an array of the numbers clicked
 * Execute a function when a user clicks on a button:
 */
document.getElementById("button").addEventListener("click", clickHandler);


function clickHandler() {
    document.getElementById("calc").innerHTML = "Bitch, you doing a good job"();
}

















/*
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingforSecondOperand: false,
    operator: null,
};

function inputDigit(digit) {
    const { displayValue, waitingforSecondOperand } = calculator;

    if (waitingforSecondOperand == true) {
        calculator.displayValue = digit;
        calculator.waitingforSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

function inputDecimal(dot) {
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingforSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }

    if (firstOperand == null) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
            const currentValue = firstOperand || 0;
            const result = performCalculation[operator](currentValue, inputValue);

            calculator.displayValue = String(result);
            calculator.firstOperand = result;
        }

        calculator.waitingforSecondOperand = true;
        calculator.operator = nextOperator;
    }


const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingforSecondOperand = false; 
    calculator.operator = null;
}

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

updateDisplay();

// Button functionality
const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('all-clear')) {
        resetCalculator();
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});
*/