function encode(data) {
  const type = typeof data;

  switch (type) {
    case 'number': return `i${data}e`;
    case 'string': return `${data.length}:${data}`;
  }
}

function bencode(data) {
  return encode(data);
}

function composeMessage(description, input, actual, expected) {
  if (expected === actual) {
    return "✅ " + description;
  }
  return `| ❌ | ${description}\n| ${input} | ${expected} | ${actual} |`;
}

function testBencode(description, data, expected) {
  const actual = bencode(data);
  const input = `${data}`;
  const message = composeMessage(description, input, actual, expected);
  console.log(message);
}

function testAll() {
  testBencode('number type', 123, "i123e");
  testBencode('number type', -42, "i-42e");
  testBencode('number type', 0, "i0e");
  testBencode('string data', "hello", "5:hello");
  testBencode('string data', "", "0:");
  testBencode('string data', "hello world", "11:hello world");
  testBencode('string data', "special!@#$chars", "16:special!@#$chars");
  testBencode('list type', ["apple", 123, ["banana", -5]], "l5:applei123el6:bananai-5eee");
  testBencode('empty list', [], "le");
  testBencode('nested list', [0, "", ["test"]], "li0e0:l4:testee");
  testBencode('nested empty list', ["", 0, []], "l0:i0ele");
  testBencode('nested list of strings', ["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee");
}

testAll();
