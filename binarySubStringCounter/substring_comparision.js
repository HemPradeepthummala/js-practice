const substring = 10;
let binaryNumber = 1000001;
let divisor = 1;
let duplicatedSubstring = substring;

while(duplicatedSubstring !== 0) {
    let remainder = duplicatedSubstring % 2;
    remainder && duplicatedSubstring--;
    divisor = divisor * 10;
    duplicatedSubstring = duplicatedSubstring / 10;
}

console.log(duplicatedSubstring)
console.log(substring, divisor);
