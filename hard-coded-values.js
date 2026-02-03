/*
* parrameter operations with hardcoded or you can say fixed values.
*/

/* shirt price = 500
* pant price = 300
*shoe price= 900
*/

function total(shirtQuantity, pantQuantity, shoeQuantity) {
    const perShirt = 500;
    const perPant = 300;
    const perShoe = 900;

    const totalShirtPrice = shirtQuantity * perShirt;
    const totalPantPrice = pantQuantity * perPant;
    const totalShoePrice = shoeQuantity * perShoe;

    const total = totalShirtPrice + totalPantPrice + totalShoePrice;
    console.log(total) ;
}
 
total(3, 4, 5);