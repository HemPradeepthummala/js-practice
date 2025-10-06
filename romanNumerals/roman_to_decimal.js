function romanToDecimal(romanNumeral) {
  return 1;
}

function composeMessage(description, input, actual, expected) {
  if (expected === actual) {
    return "✅ " + description;
  }
  return `| ❌ | ${description}\n| ${input} | ${expected} | ${actual} |`;
}

function testRomanTODecimal(description, romanNumeral, expected) {
  const actual = romanToDecimal(romanNumeral);
  const input = `${romanNumeral}`;
  const message = composeMessage(description, input, actual, expected);
  console.log(message);
}

function testAll() {
  testRomanTODecimal("Roman I", "I", 1);
}

testAll();
