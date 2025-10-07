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

function isValidInput(prevValue, currentValue) {
  return prevValue * 0.1 === currentValue || prevValue * 0.2 === currentValue
}

function calculateDecimal(currentValue, prevValue, decimalNumber) {
  if (prevValue > currentValue) {
    return decimalNumber - currentValue;
  }
  return decimalNumber + currentValue;
}

function convertToDecimal(romanNumber) {
  let prevValue = 0;
  let decimalNumber = prevValue;

  for (let index = romanNumber.length - 1; index >= 0; index--) {
    const currentValue = findValue(romanNumber[index]);

    if (!isValidInput(prevValue, currentValue) && prevValue > currentValue) {
      return 0;
    }
    decimalNumber = calculateDecimal(currentValue, prevValue, decimalNumber);
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
  // Basic single symbols
  testRomanTODecimal("Single symbol I", "I", 1);
  testRomanTODecimal("Single symbol V", "V", 5);
  testRomanTODecimal("Single symbol X", "X", 10);
  testRomanTODecimal("Single symbol L", "L", 50);
  testRomanTODecimal("Single symbol C", "C", 100);
  testRomanTODecimal("Single symbol D", "D", 500);
  testRomanTODecimal("Single symbol M", "M", 1000);

  // Additive notation
  testRomanTODecimal("Additive II", "II", 2);
  testRomanTODecimal("Additive III", "III", 3);
  testRomanTODecimal("Additive VI", "VI", 6);
  testRomanTODecimal("Additive VIII", "VIII", 8);
  testRomanTODecimal("Additive LX", "LX", 60);
  testRomanTODecimal("Additive LXX", "LXX", 70);
  testRomanTODecimal("Additive CL", "CL", 150);
  testRomanTODecimal("Additive MCC", "MCC", 1200);
  testRomanTODecimal("Additive MD", "MD", 1500);

  // Subtractive notation
  testRomanTODecimal("Subtractive IV", "IV", 4);
  testRomanTODecimal("Subtractive IX", "IX", 9);
  testRomanTODecimal("Subtractive XL", "XL", 40);
  testRomanTODecimal("Subtractive XC", "XC", 90);
  testRomanTODecimal("Subtractive CD", "CD", 400);
  testRomanTODecimal("Subtractive CM", "CM", 900);
  testRomanTODecimal("Subtractive XLIX", "XLIX", 49);
  testRomanTODecimal("Subtractive XCIV", "XCIV", 94);
  testRomanTODecimal("Subtractive CDXLIV", "CDXLIV", 444);
  testRomanTODecimal("Subtractive CMXCIX", "CMXCIX", 999);

  // Mixed complex numbers
  testRomanTODecimal("Complex MCMLXXXIV", "MCMLXXXIV", 1984);
  testRomanTODecimal("Complex MMXXV", "MMXXV", 2025);
  testRomanTODecimal("Complex MCMXC", "MCMXC", 1990);
  testRomanTODecimal("Complex MMCMXCIX", "MMCMXCIX", 2999);
  testRomanTODecimal("Complex MMM", "MMM", 3000);
  testRomanTODecimal("Complex MMMCMXCIV", "MMMCMXCIV", 3994);

  // Boundary / Edge cases
  testRomanTODecimal("Boundary smallest I", "I", 1);
  testRomanTODecimal("Boundary largest standard", "MMMCMXCIX", 3999);
  testRomanTODecimal("Empty string should be 0 or invalid", "", 0);

  // Invalid cases (expected depends on your handling, here using 0)
  testRomanTODecimal("Invalid IC (should be XCIX)", "IC", 0);
  testRomanTODecimal("Invalid IL (should be XLIX)", "IL", 0);
  testRomanTODecimal("Invalid VX", "VX", 0);
  testRomanTODecimal("Invalid XM (should be CMXC)", "XM", 0);
}

testAll();
