function findType(character) {
  const isAOrE = character === 'a' || character === 'e';
  const isIOrOOrU = character === 'i' || character === 'o' || character === 'u';
  return isAOrE || isIOrOOrU ? 'vowel' : 'consonant';
}

function splitWord(input) {
  let string = input[0];
  let type = findType(input[0]);
  let stringSplit = '';

  if (type === findType(input[1])) {
    stringSplit += ',' + input[1];
  } else {
    string += input[1];
  }
  type = findType(input[1]);
  
  if (type === findType(input[2])) {
    stringSplit += ',' + input[2];
  } else {
    string += input[2];
  }
  type = findType(input[2]);

  if (type === findType(input[3])) {
    stringSplit += ',' + input[3];
  } else {
    string += input[3];
  }
  type = findType(input[3]);


  if (type === findType(input[4])) {
    stringSplit += ',' + input[4];
  } else {
    string += input[4];
  }
  type = findType(input[4]);

  return string + stringSplit;
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
