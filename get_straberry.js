const jisan = 45;
const rimon = 56;

if(jisan > rimon) {
    console.log("Jisan will get the strawberry");
}else{
    console.log("Rimon will get the strawberry");
}

function getMax(num1, num2) {
    if(num1 > num2) {
        console.log("Num1 will get the strawberry");
    }else{
        console.log("Num2 will get the strawberry");
    }
}


const max1 = getMax(96, 87);
const max2 = getMax(100, 112);

const ultimateMax = getMax(max1, max2);



function maxOfThree(jim, rim, kim) {
    if(jim > rim && jim > kim) {
        console.log("Jim is the boss");
    }else if(rim > jim && rim > kim) {
        console.log("Rim is the ultimate boss");
    }else{
        console.log("Kim is the kardasians boss");
    }
}

const jim = 34;
const rim = 100;
const kim = 396;

maxOfThree(jim, rim, kim);




