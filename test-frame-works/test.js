import { filledRectangle, hollowRectangle } from "./01_patterns.js";

function composeMessage(description, input, actual, expected) {
  if (expected === actual) {
    return "✅ " + description;
  }
  return `| ❌ | ${description}\n| ${input} | ${expected} | ${actual} |`;
}

const testPatterns = (test) => {
  for (const key in test) {
    console.log(key);

    const runTest = ({ des, input, expected }) => {
      const actual = test[key].fn(...input);
      console.log(composeMessage(des, input, actual, expected));
    };

    test[key].testWith.forEach(runTest);
  }
};

const test = {
  "filled-rectangle": {
    fn: filledRectangle,
    testWith: [
      {
        des: "square",
        input: [2, 2],
        expected: "**\n**",
      },
    ],
  },
  "hollow-rectangle": {
    fn: hollowRectangle,
    testWith: [
      {
        des: "single line",
        input: [3, 1],
        expected: "***",
      },
    ],
  },
};

