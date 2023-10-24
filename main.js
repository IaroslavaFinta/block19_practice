const squaresEl = document.querySelector('squares');

const squares = [];

//Render maps through those squares and adds those properties
function render() {
    const template = squares.map(square => {
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.classList.add('red');
        return newSquare;
    })

    //It replaces the existing children of a Node with specified new children
    squaresEl.replaceChildren(...template);
}

function addSquare() {
    squares.push({
        color: 'red',
        size: 'small'
    })
    render();
}

setInterval(() => {
    addSquare();
}, 1000);
