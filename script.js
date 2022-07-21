var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

const page_width = 1300;
const page_height = 600;

function clear(){
    context.clearRect(0,0,page_width,page_height);
}

function text(){
    context.beginPath();
    context.font = '42px Arial';
    context.fillStyle = '#FFFF00'
    context.strokeStyle = 'blue';
    context.lineWidth = 2;
    context.strokeText('Gas',0,500);
    context.fill();
};

context.beginPath();
var img = new Image();
// img.src = 'https://blob.sololearn.com/avatars/sololearn.jpg';
img.src = 'https://i.ibb.co/vvH8pKX/1060466.png';
// img.onload = 
start_x =0;
start_y =250;
car_height = 60;
car_width = 80
function car(){
context.drawImage(img,start_x,start_y,car_width,car_height);
};
var x = 0
function drive(){
    clear();
    car();
    if (start_x < (page_width-car_width)){
        start_x = start_x + 1;
    }
}

car();
text();
window.onclick = function(){ setInterval(drive,5);};