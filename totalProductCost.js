
const products = [
    {name: "shari", price: 20000, quantity: 2},
    {name: "chiruni", price: 200, quantity: 1},
    {name: "shampoo", price: 1200, quantity: 3},
    {name: "Facewash", price: 2500, quantity: 5}
]

function productPrice(products) {
    let total = 0;

    for(const product of products) {
        total += product.price * product.quantity;
    }

    return total;
}



const totalProductPrice = productPrice(products);
console.log(totalProductPrice);


