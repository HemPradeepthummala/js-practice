const substring = 101;
let binaryNumber = 10101;
let divisor = 1;
let duplicatedSubstring = substring;

while(duplicatedSubstring !== 0) {
    let remainder = duplicatedSubstring % 2;
    remainder && duplicatedSubstring--;
    divisor = divisor * 10;
    duplicatedSubstring = duplicatedSubstring / 10;
}

let stringOccuranceCounter = 0;

while (binaryNumber !== 0) {
    let comparableString = binaryNumber % divisor;
    let remainder = binaryNumber % 2;
    remainder && binaryNumber--;
    binaryNumber = binaryNumber / 10;
    comparableString === substring && stringOccuranceCounter++;
}

console.log(substring,"=> substring", divisor, "=> divisor");
console.log(stringOccuranceCounter, "=> occurance");
