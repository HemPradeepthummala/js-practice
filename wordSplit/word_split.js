function findType(character) {
  const isAOrE = character === 'a' || character === 'e';
  const isIOrOOrU = character === 'i' || character === 'o' || character === 'u';
  return isAOrE || isIOrOOrU ? 'vowel' : 'consonant';
}

function splitWord(input) {
  let string = input;
  let result = '';
  
  while (string.length > 1) {
    let remainingString = '';
    let type = '';
    let split = '';

    for (let index = 0; index < string.length; index++) {
      const currentType = findType(string[index]);
      split += type !== currentType ? string[index] : '';
      remainingString += type === currentType ? string[index] : '';
      type = currentType;
    }

    string = remainingString;
    result += split + ',';
  }
  
  return result + string;
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
  testSplitWord('threee', 'te,he,r');
  testSplitWord('abyss', 'ab,y,s,s');
}

testAll();
