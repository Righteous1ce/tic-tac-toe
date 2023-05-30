////////// CREATE PLAYER \\\\\\\\\\

const createPlayer = (name, marker) => {
    return { name, marker };
  };



////////// GAMEBOARD OBJECT \\\\\\\\\\
const gameBoard = (() => {
    let board = [];
    for (let i = 0; i < 9; i++) {
      board.push(" ");
    }
  
    let gameBoardContainer = document.querySelector('.gameboard');
  
    board.forEach((item, index) => {
      const tile = document.createElement('div');
      tile.className = 'tile';
      gameBoardContainer.appendChild(tile);
    });


    let tile = gameBoardContainer.querySelectorAll('.tile');

    tiles.forEach((item, index) => {
        tile.addEventListener('click', () => {
            if(tile.tileContent === ' ') {
                const player = currentPlayerSymbol();
                tile.tileContent  = player;
            }
        })

    })
  
    return board;
  })();
  
  console.log(gameBoard);
  








/*


////////// CREATE PLAYER \\\\\\\\\\

const createPlayer = (name, maker) => {
  return { name, maker };
};



////////// GAMEBOARD OBJECT \\\\\\\\\\ 
const gameBoard = (() => {
  let board = [];
  for (let i = 0; i < 9; i++) {
    board.push(" ");
  }

  let tiles = document.querySelector('.tiles');

  board.forEach((item, index) => {
    const tile = document.createElement('div');
    tile.className = 'tiles';

    tiles.appendChild(tile);
  });

  return board;
})();

console.log(gameBoard);



*/
