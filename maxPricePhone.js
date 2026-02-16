
// Find out expensive phone from different objects of an array 
const mobiles = [
    {name: "Samsung", price: 20000, camera: '12mp', color: 'Black'},
    {name: "Xiaomi", price: 18000, camera: '10mp', color: 'Blue'},
    {name: "Iphone", price: 120000, camera: '12mp', color: 'Black'},
    {name: "Opp", price: 30000, camera: '12mp', color: 'Black'},
    {name: "Walton", price: 12000, camera: '12mp', color: 'Black'},
    {name: "HTC", price: 31000, camera: '12mp', color: 'Black'}
]

function maxPrice(mobiles) {
    let maxPhonePrice = mobiles[0];
    
    for(const mobile of mobiles) {
        if(maxPhonePrice.price < mobile.price) {
            maxPhonePrice = mobile;
        }
    }

    return maxPhonePrice;

}

const maxPriceMobile = maxPrice(mobiles);
console.log("The most priced mobile is: ", maxPriceMobile);
