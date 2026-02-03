const maria = 56;
const amena = 89;
const moyna = 45;

function highestScore(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1 +" is the highest score.";
    }
    else if (num2 > num1 && num2 > num3) {
        return num2 +" is the highest score.";
    }
    else {
        return num3 +" is the highest score.";
    } 
}

const highest = highestScore(amena, moyna, maria);
console.log(highest);

// use Math.max method when you need to find the highest number from unlimited input
const max = Math.max(34, 56, 976, 43, 56, 234);
console.log(max);

// what if i want to show the names