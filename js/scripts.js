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

//End of user interface

//Business logic

function Player(name, points) {
    this.name = name;
    this.points = points;
}

//The following alert promts for names for both players

var player1 = new Player();
var player2 = new Player();

var score1 = 0;
var score2 = 0;

Player.prototype.checkWin2 = function () {
    var diceRoll2 = Math.floor(Math.random() * 6 + 1);

    if (diceRoll2 === 1) {
        alert('its Players 1 turn');
        score2 = 0;
    } else {
        if (diceRoll2 >= 100) {
            alert('player 2 wins the game');
        } else {
            console.log('game continues');
            player2.points = diceRoll2;
            score2 += diceRoll2;
            console.log(score2);
            console.log('You rolled a die of: ' + diceRoll2 + ' for a score of: ' + score2);
        }
    }
}
