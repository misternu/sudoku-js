var nineNull = Array.apply(null, Array(9))

function rowFor(row) {
  return nineNull.map(function(x,i) { return row*9 + i })
}

function colFor(col) {
  return nineNull.map(function(x,i) { return i*9 + col })
}

function boxFor(box) {
  var row = Math.floor(box/3)*3 // Row index for top of box
  var col = box%3*3 // Col index for left of box
  return [0,1,2].reduce(function(a,b){
    return a.concat(rowFor(row+b).slice(col,col+3));
  }, []);
}

var NUMBERS = nineNull.map(function(x,i){ return (i+1).toString()});
var BOARD_RANGE = Array.apply(null, Array(81)).map(function(x,i){ return i });
var ROWS = nineNull.map(function(x,i){ return rowFor(i) });
var COLS = nineNull.map(function(x,i){ return colFor(i) });
var BOXES = nineNull.map(function(x,i){ return boxFor(i) });