const body = document.body;
const amount = 150;
const colors = ['red', 'yellow', 'blue'];
let i = 0;

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

while (i < amount){
    const square = document.createElement('div');
    const width = random(25, 250);
    const height = random(25, 250);
    const color = colors[random(0, colors.length)];

    square.classList.add('block');

    square.style.width = `${width}px`;
    square.style.height = `${height}px`;
    square.style.background = `var(--${color})`;

    document.body.appendChild(square);
    i++
}