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
  e.target.setAttribute('style', `background: hsl(${getRandomColor()},
  70%, ${e.target.getAttribute('light')}%); transition: 400ms`)


  let light = e.target.getAttribute('light');
  e.target.setAttribute('light', `${light -= 3}`);

  }));
}



// aux functions
function createGrid(gridSize) {

  for (let i = 0; i < gridSize * gridSize; i++) {
    
    const gridSquare = gridContainer.appendChild(document.createElement('div'));
    gridSquare.classList.add('gridSquare');
    gridSquare.setAttribute('id', i + 1);
    
    //will be used to modify the div's HSL light value with each mouse hover
    gridSquare.setAttribute('light', 50);
    
    gridSquare.textContent = "";
    gridContainer.appendChild(gridSquare);
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  }
}

function getRandomColor() {
  return Math.floor(Math.random() * 360); 
}