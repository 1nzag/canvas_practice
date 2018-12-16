var ColorGreen = "#01DFD7";
var ColorRed = "#FF00BF";
var ColorBlue = "#0000FF";

var IsVisible = 1;

function HandleEvent()
{
    var x = event.offsetX;
    var y = event.offsetY;
    
    var canvas = document.getElementById("Canvas");
    var context = canvas.getContext("2d");

    if(x >= 580 && x <= 600 && y >= 100 && y <= 120)
    {
        context.clearRect(200, 100, 400, 250);
        context.beginPath();
    }
    
    if(x >= 560 && x <= 580 && y >= 100 && y <= 120)
    {
        if(IsVisible == 1)
        {
            context.clearRect(200, 120, 400, 230);
            IsVisible = 0;
        }
        else
        {
            context.fillStyle = ColorGreen;
            context.fillRect(200, 120, 400, 230);
            IsVisible = 1;
        }
    }
    
    
}
