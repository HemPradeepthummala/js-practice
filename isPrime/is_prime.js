const limit = 1000;

for (let number = 2; number <= limit; number++) {
    let hasNoFactor = true;
    let divisor = 2;
    while (divisor < number) {
        if (number % divisor === 0) {
            hasNoFactor = false;
        }
        divisor = divisor + 1;
    }

    const suffix = (hasNoFactor) ? "is Prime" : "is Composite";
    console.log(number, suffix);
}
