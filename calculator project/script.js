let displayElement = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (displayElement.innerText === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    const lastChar = currentInput.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function calculate() {
    try {
        if (currentInput !== '') {
            let result = eval(currentInput);
            currentInput = String(result);
        }
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    displayElement.innerText = currentInput || '0';
}