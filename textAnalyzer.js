function analyzeText(str) {
    // Your code here

    if(typeof str === 'string' && str.length > 0) {

        const totalStr = str.split(" ");
    
        let totalStrLength = 0;
        let longestWord = totalStr[0];

        const newObj = {};
    
        for(let i = 0; i< totalStr.length; i++) {
            let word = totalStr[i];
    
            totalStrLength += word.length;
    
            if(word.length > longestWord.length) {
                longestWord = word;
            }
        }

        newObj["longwords"] = longestWord;
        newObj["token"] = totalStrLength;

        return newObj;

    }else {
        return "Invalid";
    }

}


// const names = "Keep coding keep shining";

// const result =  analyzeText("");
// console.log(result);



