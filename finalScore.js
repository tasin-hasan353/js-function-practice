function finalScore(omr) {
    //write your code here
    // console.log(typeof omr);
    if(typeof omr === 'object') {

        let totalNumber = 0;

        for(const num in omr) {
            totalNumber = totalNumber + omr[num];
            // console.log(totalNumber);
        }

        if(totalNumber === 100) {
            const result = omr["right"] * 1 - omr["wrong"] * 0.5 - omr["skip"] * 0;
            return Math.round(result);
        }else{
            return "Invalid";
        }


    }else {
        return "Invalid";
    }
}


// const result = finalScore(["Raj"]);
// console.log(result);


// const objScore = {"right":67,"wrong":23,"skip":10};
// console.log(objScore["right"]);
