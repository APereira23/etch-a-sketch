let squareNum = 4;
createGrid(squareNum);


function createGrid(squareNum) {

  for (let i = 0; i < squareNum * squareNum; i++) {
    const gridContainer = document.querySelector('.gridContainer');
    const gridSquare = gridContainer.appendChild(document.createElement('div'));
    gridSquare.classList.add('gridSquare');
    gridSquare.setAttribute('id', i + 1);
    gridSquare.textContent = "";
    gridContainer.appendChild(gridSquare);
  }
}


/* mouse click event

const grid = document.querySelectorAll('.gridSquare');

grid.forEach(grid => grid.addEventListener('mousemove', (e) => {
  e.target.style.background = 'grey'
}));
*/


