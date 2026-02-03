/* below --> 100
* more than 100 --> 90
* more than 200 --> 70
*/



function discount(quantity) {
    if (quantity <= 100) {
        const total = quantity * 100;
        return total
    } else if (quantity <= 200) {
        const total = quantity * 90;
        return total
    }
    else {
        const total = quantity * 70;
        return total;
    }
}

const total = discount(201);
console.log(total);


// multi layered discount
function layeredDiscount(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const third100Price = 70;
    if (quantity <= 100) {
        total = quantity * 100;
        return total;
    } else if (quantity <= 200) {
        const firstHundredPrice = 100 * first100Price;
        const remains = quantity - 100;
        const remainingPrice = remains * secondHundred;
        const total = firstHundredPrice + remainingPrice;
        return total;
    }
    else {
        const firstHundredPrice = 100 * first100Price;
        const secondHundred = 100 *second100Price;
        const remain = quantity - 200;
        const remainingPrice = remain * third100Price;
        const total = firstHundredPrice + secondHundred + remainingPrice;
        return total;
    }
}

const total2 = layeredDiscount(230);
console.log("total price with multi layered discount : " + total2);