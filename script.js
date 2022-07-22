canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
var img_main = new Image();
img_main.src = './main.png';
var img_horny = new Image();
img_horny.src = './horny.png';
function load_avatar(){
img_main.onload = function(){context.drawImage(img_main, 20, 20, 50, 50);};
};
function make_horny(){
    img_horny.onload = function(){context.drawImage(img_horny, 20, 20, 50, 50);};
};
    
// load_avatar();
// make_horny();