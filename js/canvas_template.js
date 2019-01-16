var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}
var colorArray = [
    '#111625',
    '#341931',
    '#571B3C',
    '#7A1E48',
    '#9D2053',
]
window.addEventListener("mousemove", 
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
})
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})
function randomIntFromRange( min, max){
    return Math.floor(Math.random()* (max + min + 1) + 1);
}
function randomColor(colors){
    return colors[Math.floor(Math.random * colors.length)];
}
/* 
        LINES
        c.beginPath();
        c.moveTo(50,300);
        c.lineTo(300,100);
        c.lineTo(400,300);
        c.strokeStyle = "pink";
        c.stroke();

        SQUARES
        c.fillRect(100, 100, 100, 100);

        CIRCLES
        c.beginPath();
        c.arc(x, y, radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();
*/