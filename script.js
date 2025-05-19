
function calculate(num1,num2,op){
    num1 = parseFloat(num1 === "" ? 0 : num1);
    num2 = parseFloat(num2 === "" ? 0 : num2);
    if (op == "+"){
    return num1 + num2;
    }
    else if (op == "-"){
        return num1 - num2;
        }
    else if (op == "*"){
        return num1 * num2;
        }
    else if (op == "/"){
        return num1 / num2;
        }
    }

var text = document.getElementById("result");

var a = document.getElementById("num1");
var b = document.getElementById("num2");
var op = document.getElementById("operator");

window.onchange = function(){
    text.innerHTML =  calculate(a.value,b.value,op.value);
}
window.onkeydown = function(){
    text.innerHTML =  calculate(a.value,b.value,op.value);
}
window.onkeyup = function(){
    text.innerHTML =  calculate(a.value,b.value,op.value);
}