// get the highest from an array

const prices = [23, 56, 78, 90, 678, 90]
function getMax(numbers) {
        let max = numbers[0];
    for (num of numbers) {
        if (num > max) {
            max = num
        }
    } console.log("max value is a " + max);
}
getMax(prices);

// get the lowest from an array 
function getMin(numbers) {
    let min = numbers[0]
    for (let num of numbers) {
        if (num < min) {
            min = num;
        }
        
    } return "lowest is " + min;
}
const prices2 = [567, 567, 234, 721];
const min = getMin(prices2);
console.log(min);