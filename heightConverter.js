

function inchiToFeet(heightInInchi) {
    let ft = parseInt(heightInInchi / 12);

    return ft;

}


function totalHeight(heightInInchi) {
    let ft =  inchiToFeet(heightInInchi);

    let remainingInch = heightInInchi % 12;

    console.log("Your height is:", ft, "ft ", remainingInch, " inch");
  
}


totalHeight(70);
totalHeight(75);






