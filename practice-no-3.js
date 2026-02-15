// question: Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(zero_one_str) {
    // console.log(zero_one_str);
    const arr_length = zero_one_str.length;

    let totalZero = 0;
    for(let i = 0; i < arr_length; i++) {
        if(zero_one_str[i] === "0") {
            totalZero++;
        }
    }

    return totalZero;

}


let binary_str = "011100001010";
let result =  count_zero(binary_str);

console.log(result);



