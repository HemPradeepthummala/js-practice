const substring = 10;
let binaryNumber = 1000001;
let lengthOfSubstring = 0;
let remainder = 0;
let duplicatedSubstring = substring;

remainder = duplicatedSubstring % 2;
remainder && duplicatedSubstring--;
lengthOfSubstring++;
duplicatedSubstring = duplicatedSubstring / 10;

console.log(duplicatedSubstring)
console.log(substring, binaryNumber, "occurance is 1");
