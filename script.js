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

var img_horny = new Image();
img_horny.src = './images/horny.png';

// Image functions
var avatar_height = 50;
var avatar_width = 50;
var avatar_x = 20;
var avatar_y = 20;

function load_avatar(){
var img_main = new Image();
img_main.src = './images/main.png';
img_main.onload = function(){
    context.beginPath();
    context.drawImage(img_main, avatar_x, avatar_y, avatar_width, avatar_height);};
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

// right movement 
var change = 0.5;
function move_right(){
    load_avatar();
    clear_canvas();
    if(change>0){
    avatar_x = avatar_x + change;
    change = change + 0.5;
    requestAnimationFrame(move_right);
    };
}
right.onmousedown = function(){
    if (change==0){
        change = 0.5;
    }
    clear_canvas();
    move_right();
}
right.onmouseup = function(){
    change = 0;
}

// left movement

function move_left(){
    load_avatar();
    if(change>0){
    avatar_x = avatar_x - change;
    change = change + 0.5;
    requestAnimationFrame(move_left);
    };
}
left.onmousedown = function(){
    if (change==0){
        change = 0.5;
    }
    move_left();
}
left.onmouseup = function(){
    change = 0;
}

// move up
function move_up(){
    load_avatar();
    if(change>0){
    avatar_y = avatar_y - change;
    change = change + 0.5;
    requestAnimationFrame(move_up);
    };
}
up.onmousedown = function(){
    if (change==0){
        change = 0.5;
    }
    move_up();
}
up.onmouseup = function(){
    change = 0;
}

function move_down(){
    load_avatar();
    if(change>0){
    avatar_y = avatar_y + change;
    change = change + 0.5;
    requestAnimationFrame(move_down);
    };
}
down.onmousedown = function(){
    if (change==0){
        change = 0.5;
    }
    move_down();
}
down.onmouseup = function(){
    change = 0;
}

// load_avatar();
// setInterval(right_move,10);
// clear_canvas();
// make_horny();
// clear_canvas();