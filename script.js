

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
      board: board,
      tiles: tiles
  };
})();

console.log(gameBoard);


  ////////// DISPLAY \\\\\\\\\\

  const infoDisplay = document.getElementById('info');
  
  
