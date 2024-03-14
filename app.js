const container = document.querySelector("#container");
const clearBoard = document.querySelector("#clearBoard");
const changeGrid = document.querySelector("#gridNumber");
const applyGrid = document.querySelector("#applyGrid");
const rainbowMode = document.querySelector("#rainbowMode");
const numberDisplay = document.querySelector("#numberDisplay");
const eraserButton = document.querySelector("#eraser");
const guidelinesButton = document.querySelector("#guidelines");
let repeat = 16;
let eraserBool = true;
let guidelinesBool = true;
let rainbowBool = false;
changeGrid.value = repeat;
const getColor = document.getElementById("getColor");
let color;
numberDisplay.textContent = changeGrid.value;

const newGrid = document.getElementsByClassName("grid");

function clearSketch(grids){
    grids.style.backgroundColor = "transparent";
}

changeGrid.addEventListener("click", (event) =>{
    numberDisplay.textContent = changeGrid.value;
});

function toggleRainbow(){
    rainbowBool = !rainbowBool;
    if(!rainbowBool){
        rainbowMode.textContent = "Rainbow Mode!🌈";
    }
    else if(rainbowBool){
        rainbowMode.textContent = "Color Mode!🎨";
    }
}

function toggleButton(){
    eraserBool = !eraserBool;
    if(eraserBool){
        eraserButton.textContent = "Use Eraser!🧽"; 
    }else if(!eraserBool){
        eraserButton.textContent = "Use Brush!🖌️"; 
    }
}

function toggleGuidleline(){
    guidelinesBool = !guidelinesBool;
    if(guidelinesBool){
        guidelinesButton.textContent = "Turn Guidelines Off!";
    }else if(!guidelinesBool){
        guidelinesButton.textContent = "Turn Guidelines On!"; 
    }
}

function updateGridAppearance() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {
        if (guidelinesBool) {
            grid.style.border = "1px solid black";
        } else {
            grid.style.border = "none";
        }
    });
}

guidelinesButton.addEventListener("click", () => {
    toggleGuidleline();
    updateGridAppearance();
});

for(let i = 0; i < repeat; i++){    
    const gridX = document.createElement("div"); 
    gridX.classList.add("gridX");
    container.appendChild(gridX);
    for(let j = 0; j < repeat; j++){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        gridX.appendChild(grid);
        grid.style.cssText = `height: calc(800px / ${repeat}); width: calc(800px / ${repeat});`;
        grid.addEventListener("mouseover", (event) => {
            if(eraserBool){
                if(!rainbowBool){
                    color = getColor.value;       
                }else if(rainbowBool){
                    let rainbowColor = Math.floor(Math.random()*16777215).toString(16);
                    color = "#" + rainbowColor;
                }
                grid.style.backgroundColor = color;    
            }else if(!eraserBool){
                grid.addEventListener("mousedown", (event) => {
                    grid.style.backgroundColor = "transparent";
                });
            }
                clearBoard.addEventListener("click", (event) =>{
                clearSketch(grid);
            });
        });
    }
    updateGridAppearance();
} 

applyGrid.addEventListener("click", (event) =>{
    let newRepeat = changeGrid.value;
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    for(let i = 0; i < newRepeat; i++){    
        const gridX = document.createElement("div"); 
        gridX.classList.add("gridX");
        container.appendChild(gridX);
        for(let j = 0; j < newRepeat; j++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            gridX.appendChild(grid);
            grid.style.cssText = `height: calc(800px / ${newRepeat}); width: calc(800px / ${newRepeat});`;
            grid.addEventListener("mouseover", (event) => {
                if(eraserBool){
                    if(!rainbowBool){
                        color = getColor.value;       
                    }else if(rainbowBool){
                        let rainbowColor = Math.floor(Math.random()*16777215).toString(16);
                        color = "#" + rainbowColor;
                    }
                    grid.style.backgroundColor = color;    
                }else if(!eraserBool){
                    grid.addEventListener("mousedown", (event) => {
                        grid.style.backgroundColor = "transparent";
                    });
                }
                    clearBoard.addEventListener("click", (event) =>{
                    clearSketch(grid);
                });
            });
        }
    } 
    updateGridAppearance();
}); 