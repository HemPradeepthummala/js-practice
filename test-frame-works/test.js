import { generatePattern } from "./01_patterns.js";

function composeMessage(description, input, actual, expected) {
  if (expected === actual) {
    return "✅ " + description;
  }
  return `| ❌ | ${description}\n| ${input} | ${expected} | ${actual} |`;
}

const runTest = ({ style, dim, des, ex }) =>
  console.log(composeMessage(des, [dim, style], generatePattern(style, dim), ex))

const testPatterns = (test) => {
  test.forEach(runTest)
};

const tests = [
  {
    style: "filled-rectangle",
    des: "square",
    dim: [3, 3],
    ex: "***\n***\n***",
  },
  {
    style: "hollow-rectangle",
    des: "hollow square",
    dim: [3, 3],
    ex: "***\n* *\n***",
  },
  {
    style: "alternating-rectangle",
    des: "altering rectangle",
    dim: [3, 3],
    ex: "***\n---\n***",
  },
  {
    style: "spaced-alternating-rectangle",
    des: "spaced altering rectangle",
    dim: [3, 3],
    ex: "***\n---\n   ",
  },
  {
    style: "triangle",
    des: "triangle",
    dim: [3],
    ex: "*\n**\n***",
  },
  {
    style: "right-aligned-triangle",
    des: "right aligned triangle",
    dim: [3],
    ex: "  *\n **\n***",
  },
];

testPatterns(tests);
