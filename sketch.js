// Start off with 16x16 grid.
createDivs(16);

// Add event listener for the button
const buttons = document.querySelector('button');
buttons.addEventListener('click', () => {
    let size_of_grid = prompt("Please Enter a grid size:")
    createDivs(size_of_grid);
});

// Removes all Child Nodes from the container to set a new grid size.
function removeAllChildNodes(parent) {
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

//Creates a grid of inputxinput squares
function createDivs(input) {
    // Target the container
    const container = document.querySelector('.grid-container');
    // Remove the old grid
    removeAllChildNodes(container);
    for(let i = 1; i <= input; i++){
        let row = document.createElement('div');
        for(let j = 1; j <= input; j++){
            // Create a div
            const div = document.createElement('div');
            // give the div a unique id based on i
            div.id = 'c' + i + 'r' + j;
            //give the div a class of 'grid'
            div.classList.add('grid');

            
            div.style.minWidth = 512/input + "px";
            div.style.minHeight = 512/input + "px";

            // append the div to the container
            row.appendChild(div);
        }
        container.appendChild(row);
    }

    // Add event listener for 'hovering' over any of the grid squares.
    const grids = document.querySelectorAll('.grid');
    grids.forEach((grid) => {
    // For each of the grid squares, if the mouse passes over change the color to red.
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = 'black';
    });
    });

}

