
function shirtPantShoe(Shirt, Pant, Shoe) {

    const perShirtPrice = 200;
    const perPantPrice = 300;
    const perShoePrice = 800;

    const totalShirtPrice = perShirtPrice * Shirt;
    const totalPantPrice = perPantPrice * Pant;
    const totalShoePrice = perShoePrice * Shoe;

    const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;

    return totalPrice;

}
const totalPrice = shirtPantShoe(3, 2, 1);
console.log("The total price of my clothes and shoe is: $", totalPrice);


