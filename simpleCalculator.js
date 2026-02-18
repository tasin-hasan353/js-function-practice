

function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

function substract(num1, num2) {
    const result = num1 - num2;
    return result
}

function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    const result = num1 / num2;
    return result;
}

function calculator(num1, num2, operation) {
    if(operation === "add") {
        const outcome = add(num1, num2);
        return outcome;
    }else if(operation === "substract") {
        const outcome = substract(num1, num2);
        return outcome;
    }else if(operation === "multiply") {
        const outcome = multiply(num1, num2);
        return outcome;
    }else if(operation === "divide") {
        const outcome = divide(num1, num2);
        return outcome;
    }else {
        console.log("Please, use 'add', 'substract', 'multiply', 'divide' ");
    }
}


const result = calculator(2, 3, "multiply");
console.log(result);


