var puzzle = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

function process(board) {
  console.log(board)
}

function solve(board, poss, empties) {
  poss = poss || getPoss(board);
  empties = empties || getEmpties(board);
  return iterate(board, poss, empties);
}

function iterate(board, poss, empties) {
  for (var i = 0; i < empties.length; i++) {
    if (poss[empties[i]].length == 1) {
      var newBoard = fillSquare(empties[i], board, poss[empties[i]][0]);
      elim(empties[i], poss, newBoard);
      empties.splice(i,1);
      return iterate(newBoard, poss, empties);
    }
  }
  return board;
}

function fillSquare(index, board, character) {
  return board.substring(0,index) + character + board.substring(index+1)
}

function getPoss(board) {
  var poss = BOARD_RANGE.map(function(x,i) { return NUMBERS.slice() })
  for (index in BOARD_RANGE) {
    elim(index, poss, board);
  }
  return poss
}

function getEmpties(board) {
  return BOARD_RANGE.reduce(function(array, i) {
    if (board[i] == "-") { array.push(i) }
    return array
  }, [])
}

function removeItemFromArray(item, array) {
  var index = array.indexOf(item);
  if (index != -1) {
    array.splice(index,1)
  }
}

function elim(index, poss, board) {
  if (board[index] != "-") {
    var value = board[index]
    function elimHelper(i) {
      removeItemFromArray(value, poss[i]);
    }
    ROWS[Math.floor(index/9)].forEach(elimHelper)
    COLS[index%9].forEach(elimHelper)
    BOXES[(Math.floor(index/27)*3)+Math.floor((index%9)/3)].forEach(elimHelper)
    poss[index] = [];
  }
}

showBoard(puzzle);