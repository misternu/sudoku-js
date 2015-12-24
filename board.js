// Input Squares
for (var i = 0; i < 9; i++) {
  var row = $('<div>').addClass('row')
  for (var j = 0; j < 9; j++) {
    row.append($('<input>').attr('id', (i*9)+j));
  }
  $('body').append(row);
}
$('input').addClass('square').attr('maxlength', 1);

// Box separator lines
$('body').append($('<div>').addClass('bar').attr('id', 'b0'));
$('body').append($('<div>').addClass('bar').attr('id', 'b1'));
$('body').append($('<div>').addClass('bar').attr('id', 'b2'));
$('body').append($('<div>').addClass('bar').attr('id', 'b3'));

// Solve button
$('body').append($('<button>').attr('id', 'solve').html('Solve'));


function showBoard(board) {
  for (var i = 0; i < 81; i++) {
    if (board[i] != "-") {
      $('#'+i).val(board[i]);
    }
  }
}

function getBoard() {
  return BOARD_RANGE.reduce(function(a, index) {
    var squareValue = $('#'+index).val();
    if (squareValue) {
      return a + squareValue;
    } else {
      return a + "-";
    }
  }, "");
}

function checkBoard() {
  for (i in BOARD_RANGE) {
    if (!NUMBERS.includes($('#'+i).val())){
      $('#'+i).val('');
    }
  }
  var board = getBoard()
  if (board != previousBoard){
    process(board);
  }
  previousBoard = board;
}

// Board is ready
$(document).ready(function() {
  previousBoard = getBoard()

  $("#solve").click(function(){
    console.log(getBoard());
  });

  $(".square").on("change keyup paste click", function() {
    checkBoard();
  })
});