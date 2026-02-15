function oddAverage(numbers) {
    let sumNumbers = 0;
    let totalOdd = 0;
    for(const number of numbers) {
        if(number % 2 !== 0) {
            sumNumbers = sumNumbers + number;
            totalOdd++;
        }
    }

    const average = sumNumbers / totalOdd; 
    return average.toFixed(2);

}



const numbers = [25, 40, 44, 45, 79];
const result = oddAverage(numbers);
console.log("The odd average of the array is: ", result);



