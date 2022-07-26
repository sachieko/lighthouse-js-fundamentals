const generateBoard = (whiteQ, blackQ) => {
  let board = [];
  for (let i = 0; i < 8; i++) {
    board.push([0, 0, 0, 0, 0, 0, 0, 0]);
  }
  board[whiteQ[0]][whiteQ[1]] = 1;
  board[blackQ[0]][blackQ[1]] = 1;
  return board;
};
const queenThreat = (board) => {
  let bool = false;
  //Rows
  let rowSum = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      rowSum += board[i][j];
    }
    if (rowSum > 1) {
      bool = true;
    }
    rowSum = 0;
  }
  //Columns
  let colSum = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      colSum += board[j][i];
    }
    if (colSum > 1) {
      bool = true;
    }
    colSum = 0;
  }
  //Diagonals - each double nested for loop does 1 half of the board, checking diagonals in both directions.
  let diaSum = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0, x = i; j <= i && x >= 0; j++, x--) {
      diaSum += board[x][j];
    }
    if (diaSum > 1) {
      bool = true;
    }
    diaSum = 0;
  }
  for (let i = 7; i >= 0; i--) {
    for (let j = 0; i + j <= 7; j++) {
      diaSum += board[7 - j][i + j];
    }
    if (diaSum > 1) {
      bool = true;
    }
    diaSum = 0;
  }
  for (let i = 7; i >= 0; i--) {
    for (let j = 0; i + j <= 7; j++) {
      diaSum += board[i + j][j];
    }
    if (diaSum > 1) {
      bool = true;
    }
    diaSum = 0;
  }
  for (let i = 7; i >= 0; i--) {
    for (let j = 0; i + j <= 7; j++) {
      diaSum += board[j][i + j];
    }
    if (diaSum > 1) {
      bool = true;
    }
    diaSum = 0;
  }
  return bool;
};
let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
console.log(queenThreat(generateBoard([0, 0], [7, 7])));
console.log(queenThreat(generateBoard([3, 3], [4, 4])));
console.log(queenThreat(generateBoard([0, 6], [4, 2])));


