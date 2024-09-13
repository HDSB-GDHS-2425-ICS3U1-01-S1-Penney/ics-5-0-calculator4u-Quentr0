console.log("Calculator");
console.log(" ");


function getValidNumber(promptMessage) {
    let number;
    while (true) {
        let input = prompt(promptMessage, "0");
        number = parseInt(input);
        if (!isNaN(number)) {
            return number;
        }
        console.log("invalid input, please enter a valid number.");
    }
}
// added code above and from search and edited below blurb with search

function getValidOperator(){
    let operator;
    while (true){
        operator = prompt("Choose a function (+, -, *, /)");
        if (operator == "+" || operator == "-" || operator == "*" || operator == "/"){
            return operator;
        }
        console.log("invalid operator, please enter one of the following: +, -, *, /");
    }
}

let num1 = getValidNumber("enter the first value (valid #)");
let num2 = getValidNumber("enter the second value (valid #)");
let operator = getValidOperator();


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
        console.log("cannot divide by 0");
    } else {
    const result = num1 / num2;
    console.log(result);
    }
}

// changed "z" to operator, accounting for new function

if (operator == "+") {
    addNumber();
} 

else if (operator == "-"){
    subtractNumber();
}

else if (operator == "*"){
    multiplyNumber();
    console.log("multiply")
}

else if (operater == "/"){
    divideNumber();
}
