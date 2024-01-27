
function getGridSize(){
    const gridSize = document.querySelector('.slider');
    const sliderNum = document.querySelector('#inp');
    const values = [1, 2, 4, 8, 16, 32, 64];
    gridSize.addEventListener('input',()=>{
        setGrid(values[gridSize.value]);
        sliderNum.innerHTML=`<span id="inp">${values[gridSize.value]}x${values[gridSize.value]}</span>`;
    });
}

function setGrid(gridSize = 16){
    const grid = document.querySelector('.grid');
    const sqr = Math.floor(512/gridSize);
    grid.innerHTML='';
    for(let i = 0; i < gridSize * gridSize; i++){
        grid.innerHTML += `<div style="background-color:white; width:${sqr}px; height:${sqr}px"></div>`;
    }
}

function main(){
    const pickColor = document.querySelector('.rbg');
    const colorMode = document.querySelector('#color');
    const Eraser = document.querySelector('#eraser');
    const clear = document.querySelector('#clear');
    const start = document.querySelector('.grid');
    const rainbow = document.querySelector("#rainbow");

    let color;
    let mode;
    
    pickColor.addEventListener('input',()=>{
        color = pickColor.value;
    });
    
    colorMode.addEventListener('click', () =>{
        mode = 'color';
    });

    rainbow.addEventListener('click',()=>{
        mode = 'rainbow';
    });

    Eraser.addEventListener('click',()=>{
        mode = 'eraser';
    });

    clear.addEventListener('click', ()=>{
        const pixels = document.querySelectorAll('.grid > div');
        pixels.forEach((pixel) => {
            pixel.style.backgroundColor = 'white';
        });
    });
    start.addEventListener('mouseover',()=>{
        draw(color,mode);
    });


}

function draw(color,mode){
    const pixels = document.querySelectorAll('.grid > div');
    if(mode ==='color'){
        pixels.forEach((pixel) => {
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = color;
            });
        });
    }
    else if (mode ==='eraser'){
        pixels.forEach((pixel) => {
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = 'white';
            });
        });
    }
    else if (mode ==='rainbow'){
        let r = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        pixels.forEach((pixel) => {
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            });
        });
    }

}
window.onload = () => {
    setGrid(getGridSize());
    main();
};
