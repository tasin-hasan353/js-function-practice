function gonoVote(array) {
    //write your code here

    if(Array.isArray(array)) {

        let haVote = 0;
        let naVote = 0;

        for(const vote of array) {
            if(vote === "ha") {
                haVote++;
            }else if(vote === "na") {
                naVote++;
            }
        }

        // console.log(haVote, naVote);

        if(haVote > naVote) {
            return true;
        }else if(haVote === naVote) {
            return "equal";
        }else {
            return false;
        }

    }else {
        return "Invalid";
    }

}


// const gonoVoteResult = gonoVote(12345);
// console.log(gonoVoteResult); 


