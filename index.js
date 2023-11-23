const container = document.getElementById('container');

function createGrid(size) {
  container.innerHTML = ''; // Clear existing grid
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);

    // Add event listener to change cell color on mouseover
    cell.addEventListener('mouseover', () => {
      // Uncomment one of the following options based on your preference

      // Option 1: Randomize RGB value
      // cell.style.backgroundColor = getRandomColor();

      // Option 2: Progressive darkening effect
      darkenCell(cell);
    });
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function darkenCell(cell) {
  let currentColor = getComputedStyle(cell).getPropertyValue('background-color');
  currentColor = currentColor.substring(4, currentColor.length - 1).replace(/ /g, '').split(',');

  let r = parseInt(currentColor[0]);
  let g = parseInt(currentColor[1]);
  let b = parseInt(currentColor[2]);

  // Add 10% more black to each color component
  r = Math.max(0, r - 25.5);
  g = Math.max(0, g - 25.5);
  b = Math.max(0, b - 25.5);

  cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function clearGrid() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => (cell.style.backgroundColor = 'white'));
}

function changeGridSize() {
  let newSize = prompt('Enter new grid size (e.g., 16 for a 16x16 grid):');
  newSize = parseInt(newSize);

  if (newSize && newSize > 0) {
    clearGrid();
    createGrid(newSize);
  } else {
    alert('Please enter a valid number greater than 0.');
  }
}

// Initial grid creation
createGrid(16);
