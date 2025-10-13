const ROWS = 10;
const COLUMNS = 10;
const SNAKES = [12, 25, 50, 86, 98, 77, 47];
const LADDER = [14, 21, 56, 8, 34];

function pad(value, length = 4) {
  return value.toString().padStart(length, '_')
}

function addItems(col, row) {
  const value = addNumber(col,row);
  if (SNAKES.includes(value)) {
    return '_🐍_';
  }
  if (LADDER.includes(value)) {
     return '_🪜_';
  }
  return '____';
}

function addNumber(col, row) {
  return row % 2 === 0 ? col + 1 + row * 10 : COLUMNS - col  + row * 10;
}

function makeRow(size, row) {
  const array = [];

  for (let index = 0; index < size; index++) {
    array.push(addItems(index, row));
  }
  return array;
}

function displayBoard(array) {
  const board = [];
  board.unshift(' ____'.repeat(array[0].length))
  for (let row = 0; row < ROWS; row++) {
    board.push('|' + array[row].join('|') + '|');
  }
  console.log(board.join('\n'));
}

function generateBoard() {
  const array = [];
  for (let row = 0; row < ROWS; row++) {
    array.unshift(makeRow(COLUMNS, row));
  }

  return displayBoard(array);
}

generateBoard()
