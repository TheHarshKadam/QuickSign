const colorPicker = document.getElementById('colorPicker');
const canvasColor = document.getElementById('backgroundPicker');
const canvas = document.getElementById('myCanvas');
const clearButton = document.getElementById('clearButton');
const saveButton = document.getElementById('saveButton');
const retrieveButton = document.getElementById('retrieveButton');
const fontSize = document.getElementById('fontSize');

const can = canvas.getContext('2d');


colorPicker.addEventListener('change', (e) => {
    can.strokeStyle = e.target.value;
    can.fillStyle = e.target.value;
});

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
})

canvas.addEventListener('mousemove', (e) => {
    if(isDrawing){
        can.beginPath();
        can.moveTo(lastX, lastY);
        can.lineTo(e.offsetX, e.offsetY);
        can.stroke();

        lastX = e.offsetX;
        lastY = e.offsetY;
    }
});

canvas.addEventListener('mouseup',()=>{
    isDrawing = false;
})