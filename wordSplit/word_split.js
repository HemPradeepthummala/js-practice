function findType(character) {
  const isAOrE = character === 'a' || character === 'e';
  const isIOrOOrU = character === 'i' || character === 'o' || character === 'u';
  return isAOrE || isIOrOOrU ? 'vowel' : 'consonant';
}

function splitWord(input) {
  let string = input[0];
  let type = findType(input[0]); 
  return string;
}

function composeMessage(input, expected, actual) {
  const symbol = actual === expected ? '✅' : '❌';
  const inputMessage = ' | ' + input + ' | ';
  const outcomeMessage = expected + ' | ' + actual + ' |';
  return symbol + inputMessage + outcomeMessage;
}

function testSplitWord(input, expected) {
  const actual = splitWord(input);
  const message = composeMessage(input, expected, actual);
  console.log(message);
}

function testAll() {
  testSplitWord('apple', 'ape,p,l');
  testSplitWord('there', 'tere,h');
}

testAll();
