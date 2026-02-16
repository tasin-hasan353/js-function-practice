
/**
 * Find out the discount price based on quantity.
 * If the quantity is 100 or less, then the price wil be 120|- for per one
 * If quantity is greater than 100, the price will be 120|- for per one for first 100 and rest of the quantity will 100|- 
 * If quantity is greater than 200, the price will be 120|- for per one for first 100, second 100|- for every quantity, and 
 * 80 for the last 100 or less 
 *
 */ 

function layerdDiscount(quantity) {
    
    const first100Price = 120;
    const second100Price = 100;
    const third100Price = 80;

    if(quantity <= 100) {
        const productPrice = quantity * first100Price;
        return productPrice;
    }else if(quantity <= 200) {
        const first100quantityPrice = first100Price * 100;
        const secondQuantity = quantity - 100;
        const secondQuantityPrice = secondQuantity * second100Price;
        const totalPrice = first100quantityPrice + secondQuantityPrice;
        return totalPrice;
        
    }else{
        const first100quantityPrice = first100Price * 100;

        const seondQuantity = quantity - 100;
        const secondQuantityPrice = seondQuantity * 100;

        const thirdQuantity = quantity - 200;
        const thirdQuantityPrice = thirdQuantity * third100Price;

        const totalPrice = first100quantityPrice + secondQuantityPrice + thirdQuantityPrice;
        
        return totalPrice;

    }


}


const totalPrice = layerdDiscount(202);
console.log("Total price of the product: ", totalPrice);

