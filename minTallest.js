

const heights = [23, 45, 40, 67, 80, 20, 10];


function minHeights(numbers) {
    
    let min_num = numbers[0];

    for(const num of numbers) {
        if(min_num > num) {
            min_num = num;
        }
    }
    return min_num;

}


const min_height =  minHeights(heights);
console.log("The minimum height is: ", min_height);

