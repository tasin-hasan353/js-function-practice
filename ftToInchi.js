// conveerting ft height to inchis

function intHeight(heightInFt) {

    let mainHeight = parseInt(heightInFt * 12);

    return mainHeight;

}

function totalHeight(heightInt, floatPart) {
    let totalheightinInch = heightInt + parseFloat(floatPart);
    
    console.log("Your total height in inch: ", totalheightinInch , "inch");
}


function ftHeight(heightInFt) {
    const heightInt = intHeight(heightInFt);

    let floatPart = heightInFt - parseInt(heightInFt);

    totalHeight(heightInt, floatPart.toFixed(1));
    
}


ftHeight(6.3);
ftHeight(6.2);

