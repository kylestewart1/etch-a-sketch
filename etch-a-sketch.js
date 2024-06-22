const screen = document.querySelector("#screen");
const resetButton = document.querySelector("button");

resetButton.addEventListener("click", () => {
    const sizeInput = Number(prompt("Enter a grid size for the etch-a-sketch (max 100): "));
    if (sizeInput > 100) {
        alert("That's too big!");
    } else if (sizeInput < 1) {
        alert("Grid size must be at least 1.")
    } else {
        buildGrid(sizeInput);
    }
})

function buildGrid(gridSize) {
    screen.innerHTML = "";
    const boxSize = 100/gridSize;

    for (let i = 0; i < gridSize**2; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${boxSize}%`;
        box.style.height = `${boxSize}%`;
        box.style.backgroundColor = "black";
        box.style.opacity = "0";
        box.addEventListener("mouseover", () => {
            const opacity = Number(box.style.opacity);
            if (opacity < 1) {
                box.style.opacity = `${opacity + 0.1}`;
            }
        })
        screen.appendChild(box);
    }
}

buildGrid(16);




