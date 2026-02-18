
function checkNumber(num1, num2) {
    if(typeof num1 !== 'string' || typeof num2 !== 'string') {
        return "Please provide strings";
    }

    return num1 + " " + num2;
}



const number = checkNumber('Tasin', 'Hasan');
console.log(number);


const mobile = {name:"Oppo", price: 12000};

function checkObject(phone) {
    if(Array.isArray(phone) === false) {
        return "Please provide an array"
    }

    return phone;
}

const mobilePrice = checkObject(mobile);
console.log(mobilePrice);
