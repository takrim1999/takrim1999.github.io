// Canvas declaration
canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
const canvas_height = 600;
const canvas_width = 1250;

// Model declarations
var left = document.getElementById('left');
var right = document.getElementById('right');
var up = document.getElementById('up');
var down = document.getElementById('down');

// Images declarations
var img_main = new Image();
img_main.src = './images/main.png';
var img_horny = new Image();
img_horny.src = './images/horny.png';

// Image functions
var avatar_height = 50;
var avatar_width = 50;

function load_avatar(){
img_main.onload = function(){
    context.beginPath();
    context.drawImage(img_main, 20, 20, avatar_width, avatar_height);};
};

var horny_height = 50;
var horny_width = 50;

function make_horny(){
    img_horny.onload = function(){
        context.beginPath();
        context.drawImage(img_horny, 20, 20, horny_width, horny_height);};
};
    
// Control functions
function clear_canvas(){
    context.clearRect(0,0,canvas_width,canvas_height);
}
// function left(){

// }

load_avatar();
// clear_canvas();
make_horny();
// clear_canvas();