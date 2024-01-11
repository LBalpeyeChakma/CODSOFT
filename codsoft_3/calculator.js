let screen = document.getElementById('screen');
let expression = '';

function appendNumber(number) {
    expression += number;
    updateScreen();
}

function clearScreen() {
    expression = '';
    updateScreen();
}

function deleteLast() {
    expression = expression.slice(0, -1);
    updateScreen();
}

function calculate() {
    try {
        expression = eval(expression).toString();
    } catch (error) {
        expression = 'Error';
    }
    updateScreen();
}

function updateScreen() {
    screen.textContent = expression;
}
