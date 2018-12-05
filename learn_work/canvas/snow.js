var Width = window.innerWidth * 0.9;
var Height = window.innerHeight * 0.9;
var snow = 100;
var snowArr = []; 
for (var i = 0; i < snow; i++) {
    snowArr.push({
        x: Math.random() * Width,
        y: Math.random() * Height,
        r: Math.random() * 10 + 1
    })
}

var SnowFall = function() {
    for (var i = 0; i < snow; i++) {
        var p = snowArr[i];
        p.y += Math.random() * 2 + 1;
        if (p.y > Height) {
            p.y = 0;
        }
        p.x += Math.random() * 2 + 1;
        if (p.x > Width) {
            p.x = 0;
        }
    }
}

var DrawSnow = function(context) {
    context.clearRect(0, 0, Width, Height);
    context.fillStyle = "white";
    context.beginPath();
    for (var i = 0; i < snow; i++) {
        var p = snowArr[i];
        context.moveTo(p.x, p.y);
        context.arc(p.x, p.y, p.r, 0, 2 * Math.PI, false);
    }
    context.fill();
    SnowFall();
    context.closePath();
}

window.onload = function(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    canvas.width = Width;
    canvas.height = Height;

    setInterval(function(){DrawSnow(context)},50);
}
