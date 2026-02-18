

function newPrice(currentPrice , discount ) {
    // You have to write your code here
    
    

    if(typeof currentPrice === 'string' || typeof discount === 'string' || discount < 0 || discount > 100) {
        return "Invalid";
    }else {
        const discountPrice = (discount * currentPrice) / 100;
        const updatePrice = currentPrice - discountPrice;
        // console.log(updatePrice.toFixed(3));
        return updatePrice.toFixed(3);
    }
    

}





// const updatePrice = newPrice(500, "5");
// console.log(updatePrice);


