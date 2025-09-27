function findType(character) {
  const isAOrE = character === 'a' || character === 'e';
  const isIOrOOrU = character === 'i' || character === 'o' || character === 'u';
  return isAOrE || isIOrOOrU ? 'vowel' : 'consonant';
}

function splitWord(input) {
  let string = '';
  let type;
  let split = '';

  for (let index = 0; index < input.length; index++) {
    const currentType = findType(input[index]);
    string += type !== currentType ? input[index] : '';
    split += type === currentType ? ',' + input[index] : '';
    type = currentType;
  }

  return string + split;
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
  testSplitWord('hello', 'helo,l');
  testSplitWord('abc', 'ab,c');
  testSplitWord('abcd', 'ab,c,d');
  testSplitWord('abcde', 'abe,c,d');
  testSplitWord('three', 'te,he,r');
  testSplitWord('abyss', 'ab,y,s,s');
}

testAll();
