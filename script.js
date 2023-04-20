function boardFactory(){
    const arr = [];

    const move = function(marker) {
        
    }

    const isGameOver = function(marker) {

    }
}

function playerFactory(marker){
    return  { marker };
}


const game = (() => {
    const playerOne = playerFactory("X");
    const playerTwo = playerFactory("O");
    const board = boardFactory();

    const play = function(){
        let turn = 1;
        while (!isGameOver) {
            let currentPlayer = (turn % 2 == 1) ? playerOne : playerTwo;
            board.move(currentPlayer.marker);
        }
        win(currentPlayer);
    }

    const isGameOver = (marker) => board.isGameOver(marker);
    const win = function(player) {

    }
})();

// main

game.play();