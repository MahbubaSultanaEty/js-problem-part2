const mobiles = [
    {name: "Samsung", price : 80000, camera : "12mp", color: "black"},
    {name: "Oppo", price : 20000, camera : "12mp", color: "white"},
    {name: "Redmi", price : 12000, camera : "12mp", color: "blue"},
    {name: "Apple", price : 120000, camera : "12mp", color: "gray"}
]

function getCheapestPhone(phones) {
    // console.log(phones);
    let cheapest = phones[0];
    for (let phone of phones) {
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    } console.log(cheapest);
}

getCheapestPhone(mobiles);