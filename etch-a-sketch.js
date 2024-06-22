const container = document.querySelector("#container");

let gridSize = 16;
const boxSize = 100/gridSize;
console.log(boxSize);

for (let i = 0; i < gridSize**2; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${boxSize}%`;
    box.style.height = `${boxSize}%`;
    container.appendChild(box);
}

const leftKnob = document.createElement("div");
const rightKnob = document.createElement("div");
