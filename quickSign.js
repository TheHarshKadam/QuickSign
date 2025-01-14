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
});

canvasColor.addEventListener('change',(e)=>{
    can.fillStyle = e.target.value;
    can.fillRect(0,0,800,500);
});

fontSize.addEventListener('change',(e)=>{
    can.lineWidth = e.target.value;
});

clearButton.addEventListener('click',()=>{
    can.clearRect(0,0,canvas.width, canvas.height);
})

saveButton.addEventListener('click',()=>{
    localStorage.setItem('canvasContents',canvas.toDataURL());
    let lnk = document.createElement('a');
    lnk.download = 'mySign.png';
    lnk.href = canvas.toDataURL();
    lnk.click();
})

retrieveButton.addEventListener('click',()=>{
    let savedCanvas = localStorage.getItem('canvasContents');
    if(savedCanvas){
        let img = new Image();
        img.src = savedCanvas;
        can.drawImage(img,0,0);
    }
})