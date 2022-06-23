const board = document.querySelector('#board')
const colors = ['#B22222', '#7B68EE', '#9400D3', 'purple', '#FF1493']
const SQUARES_NUMBERS = 444

for (let i = 0; i < SQUARES_NUMBERS; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)

}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px black`
}


function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors [index]
}