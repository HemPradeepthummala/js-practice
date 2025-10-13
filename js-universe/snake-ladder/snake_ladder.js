const ROWS = 10;
const COLUMNS = 10;

function pad(value, length = 2) {
  return value.toString().padStart(length, '_')
}

function makeRow(size, row) {
  const array = [];

  for (let index = 0; index < size; index++) {
    array.push('__');
  }
  return array;
}

function displayBoard(array) {
  const board = [];
  board.unshift(' __'.repeat(array[0].length))
  for (let row = 0; row < ROWS; row++) {
    board.push('|' + array[row].join('|')+'|');
  }
  console.log(board.join('\n'))
}

function generateBoard() {
  const array = [];
  for (let row = 0; row < ROWS; row++) {
    array.unshift(makeRow(COLUMNS, row));
  }

  return displayBoard(array);
}

generateBoard()
