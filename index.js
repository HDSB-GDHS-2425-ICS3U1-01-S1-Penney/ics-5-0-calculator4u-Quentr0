console.log("Calculator")
console.log(" ")



var x = prompt("Enter a Value", "0");
var y = prompt("Enter a Value", "0");
var z = prompt("choose a function (+,-,*,/)");
var num1 = parseInt(x);
var num2 = parseInt(y);


if (z == "+") {
    addNumber()
} 

else if (z == "-"){
    subtractNumber()
}

else if (z == "*"){
    multiplyNumber();
    console.log("multiply")
}

else if (z == "/"){
    divideNumber()
}

else if (z != "+" || z != "-" || z!= "*" || z!= "/"){
    var z = prompt("invalid input, re-enter (+,-,*,/)")
}


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
    const result = num1 / num2;
    console.log(result);
}
