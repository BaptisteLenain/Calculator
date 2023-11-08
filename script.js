let num1 = '';
let operator = '';
let num2 = '';

function add(a,b) {
    return a + b
};

function substract(a,b) {
    return a - b
};

function multiply(a,b) {
    return a * b
};

function divide(a,b) {
    return a / b
};

function operate(num1,operator,num2) {
    if (operator == '+') {
       result = add(num1,num2);
    } else if (operator == '-') {
        result = substract(num1,num2);
    } else if (operator == '*') {
       result = multiply(num1,num2);
    } else {
       result = divide(num1,num2);
    }
    return result;
};

operate(2,'*',4);
console.log(operate())