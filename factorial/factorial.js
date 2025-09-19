const limit = 10;
let factorial = 1;

for (let number = 0; number <= limit; number++){
    if (number !== 0) {
        factorial = factorial * number;
    }
    console.log(factorial, "is factorial of", number);
}
