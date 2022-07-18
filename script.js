var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

var x = 100;
var pos = 1;

function clear(){
    context.clearRect(0,0,600,600);
}

function square()
{
    context.beginPath();
    context.rect(0,120,600,340);
    context.fillStyle = "#0a4218";
    context.stroke()
    context.fill();
}

function circle(){
    context.beginPath();
    context.strokeStyle = 'red';
    context.arc(300,300,x,0,Math.PI*2);
    context.stroke();
    context.fillStyle = 'red';
    context.fill();
};

function animate(){
    if (x>150 || x < 50){
        pos = pos * (-1);
    }
    clear();
    square();
    circle();
    x = x + pos;
    
}

// text
// function text(){
//     context.beginPath();
//     context.font = '42px Arial';
//     context.fillStyle = '#FFFF00'
//     context.strokeStyle = 'blue';
//     context.lineWidth = 2;
//     context.strokeText('Flag',270,500);
//     context.fill();
// };
// context.beginPath();
// var img = new Image();
// img.src = 'https://blob.sololearn.com/avatars/sololearn.jpg';
// context.drawImage(img,250,0,50,50);

// setInterval(square,5);
// setInterval(circle,5);
// setInterval(text,5);

setInterval(animate,10);