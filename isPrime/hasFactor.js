const number = 2;
let hasFactor = false;

for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor === 0) {
        hasFactor = false;
    }
}

console.log(hasFactor);
