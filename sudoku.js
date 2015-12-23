var puzzle = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

for (var i = 0; i < 9; i++) {
  var row = $('<div>').addClass('row')
  for (var j = 0; j < 9; j++) {
    row.append($('<input>').attr('id', (i*9)+j));
  }
  $('body').append(row);
}

$('body').append($('<div>').addClass('bar').attr('id', 'b0'));
$('body').append($('<div>').addClass('bar').attr('id', 'b1'));
$('body').append($('<div>').addClass('bar').attr('id', 'b2'));
$('body').append($('<div>').addClass('bar').attr('id', 'b3'));

for (var i = 0; i < 81; i++) {
  if (puzzle[i] != "-") {
    $('#'+i).val(puzzle[i])
  }
}