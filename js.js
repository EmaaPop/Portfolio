$(document).foundation();


var fov = 2000;

var canvas = document.querySelector(".render");
var width = window.innerWidth;
var height = window.innerHeight;
var context = canvas.getContext("2d");
canvas.setAttribute("width", width);
canvas.setAttribute("height", height);
canvas.addEventListener('mousemove',getMouse,false);
var mouseX=0;
var mouseY=0;

var point = [];
var points = [];
var point3d = [];

var angleX = 0;
var angleY = 0;
var HALF_WIDTH = width / 2;
var HALF_HEIGHT = height / 2;

var x3d = 90;
var y3d = 10;
var z3d = 10;

var counter=1000;

var lastx2d = 0;
var lasty2d = 0;
var dim = 50;
var spacing = ((Math.PI * 2) / dim);
var numPoints = dim * dim;
var size = 300;

function draw() {

counter= 0.07;

var points = [];

    for (var i = 0; i < numPoints; i++) {

     var z = size * Math.sin(spacing * i);

     var s = size * Math.cos(spacing * i);

point = [Math.cos(spacing * i * mouseX) * Math.sin(spacing * i * counter) * s,
         Math.sin(spacing * i * mouseY) * Math.sin(spacing * i * counter) * s,z];
         points.push(point);


}

    context.globalAlpha = "10";
    context.fillStyle = "rgba(255, 255, 255)";
    context.fillRect(0, 0, width, height);

    angleX+=((mouseX/width)-0.5)/4;
    angleY+=((mouseY/height)-0.5)/4;


    
        z3d = point3d[2];
        point3d[2] = z3d;for (var i = 0; i < numPoints; i++) {
        point3d = points[i];

    rotateX(point3d,angleX);
    rotateY(point3d,angleY);

        x3d = point3d[0];
        y3d = point3d[1];
        z3d = point3d[2];

        var scale = fov / (fov + z3d);

        var x2d = (x3d * scale) + HALF_WIDTH;

        var y2d = (y3d * scale) + HALF_HEIGHT;

        if (scale>20) scale =20;
        context.lineWidth = scale;
        context.strokeStyle = "rgba(0, 57, 245)";
        context.beginPath();
        context.moveTo(x2d-30, y2d);
        context.lineTo(lastx2d-30, lasty2d);
        context.stroke();

        lastx2d=x2d;
        lasty2d=y2d;
    }

}

setInterval(draw, 10);

function rotateX(point3d,angleX) {
        var	x = point3d[0];
        var	z = point3d[2];

        var	cosRY = Math.cos(angleX);
        var	sinRY = Math.sin(angleX);

        var	tempz = z;
        var	tempx = x;

        x= (tempx*cosRY)+(tempz*sinRY);
        z= (tempx*-sinRY)+(tempz*cosRY);

        point3d[0] = x;
        point3d[2] = z;

}

function rotateY(point3d,angleY) {
        var y = point3d[1];
        var	z = point3d[2];

        var cosRX = Math.cos(angleY);
        var sinRX = Math.sin(angleY);

        var	tempz = z;
        var	tempy = y;

        y= (tempy*cosRX)+(tempz*sinRX);
        z= (tempy*-sinRX)+(tempz*cosRX);

        point3d[1] = y;
        point3d[2] = z;

}

function getMouse (mousePosition) {
  if (mousePosition.layerX || mousePosition.layerX === 0) { // Firefox?
    mouseX = mousePosition.layerX;
    mouseY = mousePosition.layerY;
  } else if (mousePosition.offsetX || mousePosition.offsetX === 0) { // Opera?
    mouseX = mousePosition.offsetX;
    mouseY = mousePosition.offsetY;
  }
}

var lastOut=0;

function lowPassFilter(input,coeff){
    var output = lastOut+coeff*(input-lastOut);
    lastOut=output;
    return output;
}
