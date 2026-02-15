/*
if any year is not divisible with 100 && divisible by 4 is a leap year
or if any year is not divisible with 400 is a leap year

*/

function isLeapYear(year) {
    if(year % 100 !== 0 && year % 4 === 0) {
        return true;
    }else if(year % 400 === 0) {
        return true;
    }
    return false;
}

let year = 2024;

const leapYear1 =  isLeapYear(year);
console.log( year, "is a leap year");



