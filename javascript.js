const gridContainer = document.querySelector('.gridContainer');

//get grid size from html form:
const form = document.forms['form'];
form.onsubmit = function(e) {
  e.preventDefault();
  const gridSize = document.form.gridSize.value;
  createGrid(gridSize);
  
//make the cursor paint the canvas  
const grid = document.querySelectorAll('.gridSquare');

grid.forEach(grid => grid.addEventListener('mousemove', (e) => {
  e.target.setAttribute('style', 'background: red; transition: 400ms')
  }));
}


// aux functions
function createGrid(gridSize) {

  for (let i = 0; i < gridSize * gridSize; i++) {
    
    const gridSquare = gridContainer.appendChild(document.createElement('div'));
    gridSquare.classList.add('gridSquare');
    gridSquare.setAttribute('id', i + 1);
    gridSquare.textContent = "";
    gridContainer.appendChild(gridSquare);
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  }
}


