const products = [
    { name: "Hair Oil", price: 400, quantity: 3 },
    { name: "perfume", price: 900, quantity: 5 },
    { name: "Cream", price: 120, quantity: 2 }
]

function cartTotal(products) {
    let total = 0;
    for (let product of products) {
        const thisProductCost = product.price * product.quantity;
        total += thisProductCost;
    } console.log(total);
}

cartTotal(products);