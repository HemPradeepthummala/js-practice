const number = 8;
let resultedBinary = 1;
let duplicatedNumber = number;
let binaryNumber = 0;
let remainder = 0;

while (duplicatedNumber !== 0) {
    remainder = resultedBinary % 10;
    binaryNumber = binaryNumber * 10 + remainder;
    if (remainder === 1) {
        resultedBinary = resultedBinary - 1;
    }
    if (duplicatedNumber % 2) {
        duplicatedNumber -= 1;
    }
    resultedBinary = resultedBinary / 10;
    duplicatedNumber = duplicatedNumber / 2;
}

console.log(binaryNumber)
