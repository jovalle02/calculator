const button1 = document.getElementById('1btn');
const button2 = document.getElementById('2btn');
const button3 = document.getElementById('3btn');
const button4 = document.getElementById('4btn');
const button5 = document.getElementById('5btn');
const button6 = document.getElementById('6btn');
const button7 = document.getElementById('7btn');
const button8 = document.getElementById('8btn');
const button9 = document.getElementById('9btn');
const button0 = document.getElementById('0btn');
const buttonClear = document.getElementById('clearbtn');
const buttonDelete = document.getElementById('deletebtn');
const buttonDivision = document.getElementById('divisionbtn');
const buttonSum = document.getElementById('plusbtn');
const buttonMultiply = document.getElementById('multiplicationbtn');
const buttonEquals = document.getElementById('equalsbtn');
const buttonSubstract = document.getElementById('substractbtn');
const buttonDecimal = document.getElementById('decimalbtn');
const currentDisplay = document.querySelector('.current')
const lastDisplay = document.querySelector('.last')


let firstNumber = '';
let secondNumber = '';
let typeOperation = null;
let defined = false;
let pressed = false;
let dot = false;

button1.addEventListener('click', () => {
    currentDisplay.textContent += '1';
});

button2.addEventListener('click', () => {
    currentDisplay.textContent += '2';
});

button3.addEventListener('click', () => {
    currentDisplay.textContent += '3';
});

button4.addEventListener('click', () => {
    currentDisplay.textContent += '4';
});

button5.addEventListener('click', () => {
    currentDisplay.textContent += '5';
});

button6.addEventListener('click', () => {
    currentDisplay.textContent += '6';
});

button7.addEventListener('click', () => {
    currentDisplay.textContent += '7';
});

button8.addEventListener('click', () => {
    currentDisplay.textContent += '8';
});

button9.addEventListener('click', () => {
    currentDisplay.textContent += '9';
});

button0.addEventListener('click', () => {
    currentDisplay.textContent += '0';
});

buttonSum.addEventListener('click', () => {
    firstNumber = currentDisplay.textContent;
    if (defined === false) {
        firstNumber = currentDisplay.textContent;
        defined = true;
    }
    currentDisplay.textContent = '';
    lastDisplay.textContent = `${+firstNumber}`;
    lastDisplay.textContent += ' + '
    typeOperation = 'sum';
    pressed = false;
    dot = false;
});

buttonMultiply.addEventListener('click', () => {
    firstNumber = currentDisplay.textContent;
    if (defined === false) {
        firstNumber = currentDisplay.textContent;
        defined = true;
    }
    currentDisplay.textContent = '';
    lastDisplay.textContent = `${+firstNumber}`;
    lastDisplay.textContent += ' X '
    typeOperation = 'mult';
    pressed = false;
    dot = false;
});

buttonDivision.addEventListener('click', () => {
    firstNumber = currentDisplay.textContent;
    if (defined === false) {
        firstNumber = currentDisplay.textContent;
        defined = true;
    }
    currentDisplay.textContent = '';
    lastDisplay.textContent = `${+firstNumber}`;
    lastDisplay.textContent += ' ÷ '
    typeOperation = 'division';
    pressed = false;
    dot = false;
});

buttonSubstract.addEventListener('click', () => {
    firstNumber = currentDisplay.textContent;
    if (defined === false) {
        firstNumber = currentDisplay.textContent;
        defined = true;
    }
    currentDisplay.textContent = '';
    lastDisplay.textContent = `${+firstNumber}`;
    lastDisplay.textContent += ' - '
    typeOperation = 'substract';
    pressed = false;
    dot = false;
});

buttonClear.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    typeOperation = null;
    currentDisplay.textContent = '';
    lastDisplay.textContent = ``;
    defined = false;
    pressed = false;
    dot = false;
});

buttonDelete.addEventListener('click',() => {
    currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
    if (!currentDisplay.textContent.includes('.')) {
        dot = false;
    }
});

buttonDecimal.addEventListener('click',() => {
    if (dot === true) {
        return
    }
    currentDisplay.textContent += '.'
    dot = true;
});

buttonEquals.addEventListener('click', () => {
    if (pressed === true) {
        return
    }
    secondNumber = currentDisplay.textContent;
    if (typeOperation === 'sum') {
        currentDisplay.textContent = `${+firstNumber + +secondNumber}`
        lastDisplay.textContent += `${secondNumber} =`;
        firstNumber = `${+firstNumber + +secondNumber}`
    } else if (typeOperation === 'mult') {
        currentDisplay.textContent = `${+firstNumber * +secondNumber}`
        lastDisplay.textContent += `${secondNumber} =`;
        firstNumber = `${+firstNumber * +secondNumber}`
    } else if (typeOperation === 'division') {
        currentDisplay.textContent = `${+firstNumber / +secondNumber}`
        lastDisplay.textContent += `${secondNumber} =`;
        firstNumber = `${+firstNumber / +secondNumber}`
    } else if (typeOperation === 'substract') {
        currentDisplay.textContent = `${+firstNumber - +secondNumber}`
        lastDisplay.textContent += `${secondNumber} =`;
        firstNumber = `${+firstNumber - +secondNumber}`
    }

    if (currentDisplay.textContent === 'Infinity') {
        currentDisplay.textContent = 'not defined';
    }
    pressed = true;
});
