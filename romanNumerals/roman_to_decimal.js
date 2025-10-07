function findValue(romanChar) {
  switch (romanChar) {
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
  }
}

function calculateDecimalNumber(decimalNumber, prevValue, currentValue) {
  if (prevValue < currentValue) {
    return  currentValue - decimalNumber;
  }
  return decimalNumber + currentValue;
}

function convertToDecimal(romanNumber) {
  let prevValue = findValue(romanNumber[0])
  let decimalNumber = prevValue;

  for (let index = 1; index < romanNumber.length; index++) {
    const currentValue = findValue(romanNumber[index]);
    decimalNumber = calculateDecimalNumber(decimalNumber, prevValue, currentValue);
    prevValue = currentValue;
  }
  return decimalNumber;
}

function romanToDecimal(romanNumber) {
  return convertToDecimal(romanNumber);
}

function composeMessage(description, input, actual, expected) {
  if (expected === actual) {
    return "✅ " + description;
  }
  return `| ❌ | ${description}\n| ${input} | ${expected} | ${actual} |`;
}

function testRomanTODecimal(description, romanNumber, expected) {
  const actual = romanToDecimal(romanNumber);
  const input = `${romanNumber}`;
  const message = composeMessage(description, input, actual, expected);
  console.log(message);
}

function testAll() {
  testRomanTODecimal("Roman I", "I", 1);
  testRomanTODecimal("Roman II", "II", 2);
  testRomanTODecimal("Roman III", "III", 3);
  testRomanTODecimal("Roman IV", "IV", 4);
  testRomanTODecimal("Roman V", "V", 5);
  testRomanTODecimal("Roman VI", "VI", 6);
  testRomanTODecimal("Roman VII", "VII", 7);
  testRomanTODecimal("Roman VIII", "VIII", 8);
  testRomanTODecimal("Roman IX", "IX", 9);
  testRomanTODecimal("Roman X", "X", 10);
  testRomanTODecimal("Roman XI", "XI", 11);
  testRomanTODecimal("Roman XII", "XII", 12);
  testRomanTODecimal("Roman XIII", "XIII", 13);
  testRomanTODecimal("Roman XIV", "XIV", 14);
  testRomanTODecimal("Roman XV", "XV", 15);
  testRomanTODecimal("Roman XVI", "XVI", 16);
  testRomanTODecimal("Roman XVII", "XVII", 17);
  testRomanTODecimal("Roman XVIII", "XVIII", 18);
  testRomanTODecimal("Roman XXI", "XIX", 19);
  testRomanTODecimal("Roman XX", "XX", 20);
}

testAll();
