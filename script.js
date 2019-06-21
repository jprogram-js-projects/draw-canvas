var canvas = document.getElementById("canvas");

/* Component settings inside the canvas */
var x;
var y;
var width;
var height;

var component1, component2;

function draw_component1(){
    x = 50, y = 25, width = 40, height = 40; 
    component1 = canvas.getContext("2d");
    component1.fillRect(x, y, width, height);
    canvas.setAttribute("onclick","draw_component2();");    
}

function draw_component2(){
    x = 50, y = 160, width = 40, height = 40;
    component2 = canvas.getContext("2d");
    component2.fillStyle = "green";
    component2.fillRect(x, y, width, height);
    canvas.setAttribute("onclick","clean();");  
}

function clean(){
    canvas.width = canvas.width;
    canvas.setAttribute("onclick","draw_component1();");
}