const number = 8;
const substringToSearch = 1;
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
console.log(binaryNumber,"=> binaryNumber");

let divisor = 1;
let duplicatedSubstring = substringToSearch;

while(duplicatedSubstring !== 0) {
    remainder = duplicatedSubstring % 2;
    remainder && duplicatedSubstring--;
    divisor = divisor * 10;
    duplicatedSubstring = duplicatedSubstring / 10;
}

let stringOccuranceCounter = 0;

while (binaryNumber !== 0) {
    let comparableString = binaryNumber % divisor;
    remainder = binaryNumber % 2;
    remainder && binaryNumber--;
    binaryNumber = binaryNumber / 10;
    comparableString === substringToSearch && stringOccuranceCounter++;
}

console.log(substringToSearch,"=> substring", divisor, "=> divisor");
console.log(stringOccuranceCounter, "=> occurance");
