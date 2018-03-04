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
    $('#form#player2Form').submit(function (event) {
        event.preventDefault();
        var name2Display = ($('input#player2Name').val());
        console.log(name2Display);
        $('#player2NameDisplay').text(name2Display);
        $('#score2').text(score2);
        $('#roll2').click(player2.checkWin2());
    });
});