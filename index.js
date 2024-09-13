console.log("Calc");
console.log(" ");


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
// added code above and from search and edited below blurb with search

function getValidOperator(){
    let operator;
    while (true){
        operator = prompt("choose a function (+, -, *, /)");
        if (operator == "+" || operator == "-" || operator == "*" || operator == "/"){
            return operator;
        }
        console.log("invalid operator - enter one of the following: +, -, *, /");
    }
}

let num1 = getValidNumber("enter the first value (valid #)");
let num2 = getValidNumber("enter the second value (valid #)");
let num3 = getValidNumber("enter the third value (valid #)");
let operator = getValidOperator();
let operator2 = getValidOperator();

// ---------------------------------

function addNumber(){
    const result = num1 + num2;
    console.log(result);
}

function subtractNumber(){
    const result = num1 - num2;
    console.log(result);
}

function multiplyNumber(){
    const result = num1 * num2;
    console.log(result);
}

function divideNumber(){
    if (num2 == 0){
        console.log("cannot divide by 0 - retry");
    } else {
    const result = num1 / num2;
    console.log(result);
    }
}

// ---------------------------------

function addAddNumber(){
    const result = num1 + num2 + num3;
    console.log(result);
}

function addSubtractNumber(){
    const result = num1 + num2 - num3;
    console.log(result);
}

function addMultiplyNumber(){
    const result = num1 + num2 * num3;
    console.log(result);
}

function addDivideNumber(){
    const result = num1 + num2 / num3;
    console.log(result);
}

// ---------------------------------

function subtractAddNumber(){
    const result = num1 - num2 + num3;
    console.log(result);
}

function subtractSubtractNumber(){
    const result = num1 - num2 - num3;
    console.log(result);
}

function subtractMultiplyNumber(){
    const result = num1 - num2 * num3;
    console.log(result);
}

function subtractDivideNumber(){
    const result = num1 - num2 / num3;
    console.log(result);
}

// ---------------------------------

function multiplyAddNumber(){
    const result = num1 * num2 + num3;
    console.log(result);
}

function multiplySubtractNumber(){
    const result = num1 * num2 - num3;
    console.log(result);
}

function multiplyMultiplyNumber(){
    const result = num1 * num2 * num3;
    console.log(result);
}

function multiplyDivideNumber(){
    const result = num1 * num2 / num3;
    console.log(result);
}

// ---------------------------------

function divideAddNumber(){
    const result = num1 / num2 + num3;
    console.log(result);
}

function divideSubtractNumber(){
    const result = num1 / num2 - num3;
    console.log(result);
}

function divideMultiplyNumber(){
    const result = num1 / num2 * num3;
    console.log(result);
}

function divideDivideNumber(){
    const result = num1 / num2 / num3;
    console.log(result);
}

// ---------------------------------





// ---------------------------------

if (operator == "+") {
    addNumber();
} 

else if (operator == "-"){
    subtractNumber();
}

else if (operator == "*"){
    multiplyNumber();
}

else if (operator == "/"){
    divideNumber();
}

// ---------------------------------

if (operator == "+" || operator2 == "+") {
    addAddNumber();
} 

else if (operator == "+" || operator2 == "-") {
    addSubtractNumber();
} 

if (operator == "+" || operator2 == "*") {
    addMultiplyNumber();
} 

if (operator == "+" || operator2 == "/") {
    addDivideNumber();
} 

// ---------------------------------




else if (operator == "-"){
    subtractNumber();
}

else if (operator == "*"){
    multiplyNumber();
}

else if (operator == "/"){
    divideNumber();
}

