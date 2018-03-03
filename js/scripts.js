//User Interface

console.log(player1);
console.log(player2);

$(document).ready(function() {
    $('#form#player1Form').submit(function(event) {
        event.preventDefault();
            var name1Display = ($('input#player1Name').val());
            console.log(name1Display);
            $('#player1NameDisplay').text (name1Display);
            $('#score1').text (score1);
            $('#roll1').click(player1.checkWin1());
    });
});