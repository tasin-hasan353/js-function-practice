// question: Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(zero_one_str) {

    // let totalZero = 0;
    // for(let i = 0; i < zero_one_str.length; i++) {
    //     if(zero_one_str[i] === "0") {
    //         totalZero++;
    //     }
    // }

    return zero_one_str.split('0').length - 1;

}

let result =  count_zero("011100001010");

console.log(result);






