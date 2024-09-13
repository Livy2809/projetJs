const list = [
    { product: "Milk", quantity: 2, price: 1.50 },
    { product: "Bread", quantity: 1, price: 2.00 },
    { product: "Eggs", quantity: 12, price: 0.10 }
];

function getTotalPrice(produits) {
    let totalPrice = 0;

    for (let i = 0; i < produits.length; i++) {
        const item = produits[i];
        totalPrice += item.quantity * item.price;
    }

    return totalPrice;
}

console.log(getTotalPrice(list)); 
