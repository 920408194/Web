var Local = function() {
    var game;
    var INTERVAL = 200;
    var timer = null;
    var timeCount = 0;
    var time = 0;

    var bindKeyEvant = function(){
        document.onkeydown = function(e){
            if (e.keyCode == 38) {// up
                game.rotate();
            }else if(e.keyCode == 39){// right
                game.right();
            }else if(e.keyCode == 40){// down
                game.down();
            }else if(e.keyCode == 37){// left
                game.left();
            }else if(e.keyCode == 32){// space
                game.fall();
            }
        }
    }

    var move = function () {
        timeFunc();
        if(!game.down()){
            game.fixed();
            var line = game.checkClear();
            if(line){
                game.addScore(line);
            }
            var gameOver = game.checkGameOver();
            if(gameOver){
                stop();
            }else{
                game.performNext(generateType(),generateDir());
            }
        }
    }

    var timeFunc = function () {
        timeCount++;
        if(timeCount == 5){
            timeCount = 0;
            time = time + 1;
            game.setTime(time);
        }
    }

    var generateType = function() {
        return Math.ceil(Math.random() * 7) - 1;
    }

    var generateDir = function () {
        return Math.ceil(Math.random() * 4) - 1;
    }

    var start = function() {
        var doms = {
            gameDiv:document.getElementById('game'),
            nextDiv:document.getElementById('next'),
            timeDiv:document.getElementById('time'),
            scoreDiv:document.getElementById('score')
        }
        game = new Game();
        game.init(doms,generateType(),generateDir());
        bindKeyEvant();
        game.performNext(generateType(), generateDir());
        timer =  setInterval(move,INTERVAL);
    }
    this.start = start;

    var stop = function(){
        if(timer){
            clearInterval(timer);
            timer = null;
        }
        document.onkeydown = null;
        alert("GameOver!")
    }
}