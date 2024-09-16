// NAME: Quentin Robinson
// DATE: 9/16/24
// TITLE: Calc (short for calculator if you're just joining)


// state name of the 'app'
console.log("Calc");
console.log("if adding two numbers, click 0 and '+' operation")
console.log(" ");

// ask for a number, if invalid ask again
function getValidNumber(promptMessage) {
    let number;
    while (true) {
        let input = prompt(promptMessage, "0");
        number = parseInt(input);
        if (!isNaN(number)) {
            return number;
        }
        console.log("invalid input - enter a valid number");
    }
}

// ask for an operator, if invalid ask again
function getValidOperator(text) {
    let operator;
    while (true) {
        operator = prompt(`choose a function (+, -, *, /) for ${text}`);
        if (operator == "+" || operator == "-" || operator == "*" || operator == "/") {
            return operator;
        }
        console.log("invalid operator - enter one of the following: +, -, *, /");
    }
}

// claim variables as what the user inputs
let num1 = getValidNumber("enter the first value (valid #)"); // first value
let num2 = getValidNumber("enter the second value (valid #)"); // second value
let num3 = getValidNumber("enter the third value (valid #)"); // third value

let operator = getValidOperator("function one"); // first operator
let operator2 = getValidOperator(); // second operator


// run functions to add, subtract, etc. 3 numbers

// --------------------------------- adding primary

function addAddNumber() {
    const result = num1 + num2 + num3;
    console.log(result);
}


function addSubtractNumber() {
    const result = num1 + num2 - num3;
    console.log(result);
}


function addMultiplyNumber() {
    const result = num1 + num2 * num3;
    console.log(result);
}


function addDivideNumber() {
    const result = num1 + num2 / num3;
    console.log(result);
}


// --------------------------------- subtracting primary


function subtractAddNumber() {
    const result = num1 - num2 + num3;
    console.log(result);
}


function subtractSubtractNumber() {
    const result = num1 - num2 - num3;
    console.log(result);
}


function subtractMultiplyNumber() {
    const result = num1 - num2 * num3;
    console.log(result);
}


function subtractDivideNumber() {
    const result = num1 - num2 / num3;
    console.log(result);
}


// --------------------------------- multiplying primary


function multiplyAddNumber() {
    const result = num1 * num2 + num3;
    console.log(result);
}


function multiplySubtractNumber() {
    const result = num1 * num2 - num3;
    console.log(result);
}


function multiplyMultiplyNumber() {
    const result = num1 * num2 * num3;
    console.log(result);
}


function multiplyDivideNumber() {
    const result = num1 * num2 / num3;
    console.log(result);
}


// --------------------------------- dividing primary


function divideAddNumber() {
    const result = num1 / num2 + num3;
    console.log(result);
}


function divideSubtractNumber() {
    const result = num1 / num2 - num3;
    console.log(result);
}


function divideMultiplyNumber() {
    const result = num1 / num2 * num3;
    console.log(result);
}


function divideDivideNumber() {
    const result = num1 / num2 / num3;
    console.log(result);
}

// ---------------------------------


// --------------------------------- in prompt, if adding primary run corresponding function


if (operator == "+" && operator2 == "+") {
    addAddNumber();
}


else if (operator == "+" && operator2 == "-") {
    addSubtractNumber();
}


else if (operator == "+" && operator2 == "*") {
    addMultiplyNumber();
}


else if (operator == "+" && operator2 == "/") {
    addDivideNumber();
}


// --------------------------------- in prompt, if subtracting primary run corresponding function

if (operator == "-" && operator2 == "+") {
    subtractAddNumber();
}


else if (operator == "-" && operator2 == "-") {
    subtractSubtractNumber();
}


else if (operator == "-" && operator2 == "*") {
    subtractMultiplyNumber();
}


else if (operator == "-" && operator2 == "/") {
    subtractDivideNumber();
}

// --------------------------------- in prompt, if multiplying primary run corresponding function

if (operator == "*" && operator2 == "+") {
    multiplyAddNumber();
}


else if (operator == "*" && operator2 == "-") {
    multiplySubtractNumber();
}


else if (operator == "*" && operator2 == "*") {
    multiplyMultiplyNumber();
}


else if (operator == "*" && operator2 == "/") {
    multiplyDivideNumber();
}

// --------------------------------- in prompt, if dividing primary run corresponding function

if (operator == "/" && operator2 == "+") {
    divideAddNumber();
}


else if (operator == "/" && operator2 == "-") {
    divideSubtractNumber();
}


else if (operator == "/" && operator2 == "*") {
    divideMultiplyNumber();
}


else if (operator == "*/" && operator2 == "/") {
    divideDivideNumber();
}
