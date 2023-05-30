const createPlayer = (name, maker) => {
  return { name, maker };
};

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




/*

const createPlayer = (name, maker) => {
    return{name, maker};
}


const gameBoard = (() => {
    let board = [];
    for(i = 0; i < 9; i++) {
        board.push(" ");
    }
    return board;

    let tiles = document.querySelector('.tiles');

board.forEach((item, index) => {
    const tiles = document.createElement('div');
    tiles.classname = 'tiles';

    tiles.appendChild(tiles);
})
})

*/