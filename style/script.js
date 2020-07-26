let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
let temp = '0';
//let currentNumber2 = '0';

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})   

const inputNumber = (number) => {    
    if(currentNumber === '0' || temp > 0) {
        currentNumber = number;
        temp = '0';
    } else {
        currentNumber = currentNumber + number ;
}}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

const inputOperator = (operator) => {
    if(calculationOperator ==='') {
        prevNumber = currentNumber; 
    }
    calculationOperator = operator;
    currentNumber = '0';
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
//    console.log('equal button is pressed');
})

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const calculate = () => {
    let result = 0;
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
    temp +=1;
}

function calculation(){
    
    equalSign.addEventListener('click',() => {
        calculate()
        updateScreen(currentNumber);       
    })    
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})

const clearAll = () =>{
    prevNumber ='';
    calculationOperator = '';
    currentNumber = '0';
}

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);    
})

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return;
    }    
    currentNumber += dot;
}

const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', (event) => {
    if (currentNumber > 0 && calculationOperator === "")
    {
        currentNumber = parseFloat(currentNumber)/100;
    } else {
        currentNumber = ((parseFloat(prevNumber) * parseFloat(currentNumber))/100);
    }
    updateScreen(currentNumber);
})
/*
const inputPercentage = () => {
 
    currentNumber = (parseFloat(prevNumber) * parseFloat(currentNumber))/100;
}*/
