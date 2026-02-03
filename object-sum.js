const products = [
    { name: "Hair Oil", price: 400 },
    { name: "perfume", price: 900 },
    { name : "Cream", price: 1200}
]

function sum(products) {
    let sum = 0;
    for (let product of products) {
        sum += product.price;
    }
    console.log(sum);
}
sum(products)