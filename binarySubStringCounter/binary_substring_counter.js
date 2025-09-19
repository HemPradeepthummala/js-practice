const number = 65;
const substringToSearch = 10;
let duplicatedNumber = number;
let resultedBinary = 0;
let binaryNumber = 0
let remainder = 0;

while (duplicatedNumber !== 0){
    remainder = duplicatedNumber % 2;
    if (remainder) {
        duplicatedNumber = duplicatedNumber - 1;
    }
    duplicatedNumber = duplicatedNumber / 2;
    resultedBinary = (resultedBinary * 10) + remainder;
}

duplicatedNumber = number;

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

console.log(binaryNumber);

