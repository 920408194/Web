var Width = window.innerWidth * 0.9;
var Height = window.innerHeight * 0.9;
var num = 5000;
var liuxing;
var starArr = [];
for (var i = 0; i < num; i++) {
    starArr.push({
        x: Math.round(Math.random() * Width),
        y: Math.round(Math.random() * Height),
        r: Math.random() * 3,
        ra: Math.random() * 0.05,
        alpha: Math.random(),
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1
    });
}

var fly = function() {
    var time = Math.round(Math.random() * 3000 + 33);
    setTimeout(function () {
        liuxing = Math.ceil(Math.random() * starArr.length)
        fly();
    }, time)
}

var DrawStar = function(){
    context.clearRect(0, 0, Width, Height);
    for (var i = 0; i < num; i++) {
        var p = starArr[i];

        if (i == liuxing) {
            p.vx = -5;
            p.vy = 20;
            context.beginPath();
            context.strokeStyle = 'rgba(255,255,255,' + p.alpha + ')';
            context.lineWidth = p.r;
            context.moveTo(p.x, p.y);
            context.lineTo(p.x + p.vx, p.y + p.vy);
            context.stroke();
            context.closePath();
        }

        p.alpha += p.ra;

        if (p.alpha <= 0) {
            p.alpha = 0;
            p.ra = -p.ra;
            p.vx = Math.random() * 0.2 - 0.1;
            p.vy = Math.random() * 0.2 - 0.1;
        } else if (p.alpha > 1) {
            p.alpha = 1;
            p.ra = -p.ra
        }
        p.x += p.vx;
        if (p.x >= Width) {
            p.x = 0;
        } else if (p.x < 0) {
            p.x = Width;
            p.vx = Math.random() * 0.2 - 0.1;
            p.vy = Math.random() * 0.2 - 0.1;
        }
        p.y += p.vy;
        if (p.y >= Height) {
            p.y = 0;
            p.vy = Math.random() * 0.2 - 0.1;
            p.vx = Math.random() * 0.2 - 0.1;
        } else if (p.y < 0) {
            p.y = Height;
        }

        context.beginPath();
        var bulinbulin = context.createRadialGradient(p.x, p.y, 0, p.x, p.y,p.r);
        bulinbulin.addColorStop(0, 'rgba(255,255,255,' + p.alpha + ')');
        bulinbulin.addColorStop(1, 'rgba(255,255,255,0)');
        context.fillStyle = bulinbulin;
        context.moveTo(p.x, p.y);
        context.arc(p.x, p.y, p.r, 0, 2 * Math.PI, false);
        context.fill();
        context.closePath();
    }
}
    
window.onload = function(){
    canvas = document.getElementById('canvas');
    canvas.width = Width;
    canvas.height = Height;
    context = canvas.getContext('2d');
    setInterval(function(){DrawStar(context);},50);
    fly();
}