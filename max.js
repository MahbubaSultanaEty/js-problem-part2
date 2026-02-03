function getMax(num1, num2) {
    if (num1 > num2) {
        return num1
    }
    else {
        return num2;
    }
}
const max1 = getMax(34, 78);
const max2 = getMax(23, 1);

console.log(max1);
console.log(max2);

const ultimateMax = getMax(max1, max2);