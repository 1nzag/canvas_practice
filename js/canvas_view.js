
var ColorGreen = "#01DFD7";
var ColorRed = "#FF00BF";
var ColorBlue = "#0000FF";
var IsVisible = 1;

function Initial()
{
    var canvas = document.getElementById("Canvas");
    var context = canvas.getContext("2d");
    
    
    context.fillStyle = ColorGreen;
    context.fillRect(200, 100, 400, 250);
    
    context.fillStyle = ColorRed;
    context.fillRect(580, 100 , 20, 20);
    
    context.fillStyle = ColorBlue;
    context.fillRect(560, 100, 20, 20);
    
    context.fillStyle = ColorGreen;
    context.fillRect(500, 700, 200, 100);
    
    context.fillStyle = ColorGreen;
    context.fillRect(1000, 200, 300, 150);
    
    
    context.beginPath();
    context.moveTo(200, 120);
    context.lineTo(600, 120);
    context.stroke();

    context.fillStyle = "Black";
    context.font = "12px Arial";
    context.fillText("My Window", 200, 120);
    context.font = "25px Arial";
    context.fillText("-", 560, 120);
    context.fillText("X", 580, 120);

}


