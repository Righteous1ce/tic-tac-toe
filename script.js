

////////// CREATE PLAYER \\\\\\\\\\

const createPlayers = (name1, name2) => {
    const player1 = {
      name: name1,
      symbol: "X"
    };
  
    const player2 = {
      name: name2,
      symbol: "O"
    };
  
    return { player1, player2 };
  };
  
  const players = createPlayers("Player 1", "Player 2");


  const currentPlayerSymbol = (() => {
    let currentPlayer = players.player1;
  
    return () => {
      if (currentPlayer === players.player1) {
        currentPlayer = players.player2;
      } else {
        currentPlayer = players.player1;
      }
      return currentPlayer.symbol;
    };
})();


////////// GAMEBOARD OBJECT \\\\\\\\\\
const gameBoard = (() => {
  let board = [];
  for (let i = 0; i < 9; i++) {
      board.push(" ");
  }

  let gameBoardContainer = document.getElementById('gameboard');



  const winningCombo = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6],
  ]



function checkForWinner(player){
  for (let combination of winningCombo){
    let isWinningCombo = true;
    for (let position of combination){
      if (board[position] !== player){
        isWinningCombo = false;
        break;
      }
    }
    if (isWinningCombo){
      return true;
    }

  }
  return false;
}

function updateBoard(tileIndex, currentPlayerSymbol){
  board[tileIndex] = currentPlayerSymbol;
}



  board.forEach((item, index) => {
      const tile = document.createElement('div');
      tile.className = 'tile';
      tile.dataset.tileContent = "";
      gameBoardContainer.appendChild(tile);
  });

  let tiles = gameBoardContainer.querySelectorAll('.tile');

  tiles.forEach((tile, index) => {
      tile.addEventListener('click', () => {
          if (tile.dataset.tileContent === "") {
              const player = currentPlayerSymbol();
              tile.dataset.tileContent = player;
              tile.textContent = player;
          }
      });
  });

  
  return {
      board,
      updateBoard,
      checkForWinner,
      
  };
})();




  ////////// DISPLAY \\\\\\\\\\

  const infoDisplay = document.getElementById('info');
  

console.log(gameBoard);
gameBoard.updateBoard(0, "X");
gameBoard.updateBoard(1, "X");
gameBoard.updateBoard(2, "X");
const playerXWins = gameBoard.checkForWinner('X');

console.log(playerXWins);