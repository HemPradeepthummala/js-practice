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

function convertToDecimal(romanNumber) {
  let prevValue = findValue(romanNumber[0])
  let decimalNumber = prevValue;
  for (let index = 1; index < romanNumber.length; index++) {
    const currentValue = findValue(romanNumber[index]);
    decimalNumber = prevValue < currentValue ? currentValue - decimalNumber : decimalNumber += currentValue;
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
}

testAll();
