var Game = function() {
    var gameDiv;
    var nextDiv;
    var timeDiv;
    var scoreDiv;
    var score = 0;

    var gameData = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    
    var cur;
    var next; 

    var nextDivs = [];
    var gameDivs = [];

    var initDiv = function(container,data,divs ) {
        for (var i = 0; i < data.length; i++) {
            var div = [];
            for (var j = 0; j < data[0].length; j++) {
                var newNode = document.createElement('div');
                newNode.className = 'none';
                newNode.style.top = (i * 20) + 'px';
                newNode.style.left = (j * 20) + 'px';
                container.appendChild(newNode);
                div.push(newNode);
            }
            divs.push(div);
        }
    }

    var refreshDiv = function(data,divs) {
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[0].length; j++) {
                if (data[i][j] == 0) {
                    divs[i][j].className = 'none';
                } else if (data[i][j] == 1) {
                    divs[i][j].className = 'done';
                } else if (data[i][j] == 2) {
                    divs[i][j].className = 'current';
                }
            }
        }
    } 

    var check = function(pos,x,y){
        if (pos.x + x < 0) {
            return false;
        }else if(pos.x + x >= gameData.length){
            return false;
        }else if(pos.y + y < 0){
            return false;
        }else if(pos.y + y >= gameData[0].length){
            return false;
        }else if(gameData[pos.x + x][pos.y + y] == 1){
            return false;
        }else{
            return true;
        }
    }

    var isValid = function(pos,data){
        for(var i = 0; i < data.length; i++){
            for(var j = 0; j < data.length; j++){
                if(data[i][j] != 0){
                    if(!check(pos,i,j)){
                        return false;
                    }
                }
            }
        }
        return true;
    }

    var clearData = function() {
        for (var i = 0; i < cur.data.length; i++) {
            for (var j = 0; j < cur.data[0].length; j++) {
                if(check(cur.origin,i,j)){
                    gameData[cur.origin.x + i][cur.origin.y + j] = 0;
                }               
            }
        }
    }

    var setData = function(){
        for(var i = 0;i < cur.data.length;i++){
            for(var j = 0;j < cur.data[0].length;j++){ 
                if(check(cur.origin,i,j)){
                    gameData[cur.origin.x + i][cur.origin.y + j] = cur.data[i][j];
                }               
            }
        }
    }

    var down = function(){
        if(cur.canDown(isValid)){
            clearData();
            cur.down();
            setData();
            refreshDiv(gameData,gameDivs);
            return true;
        }else{
            return false;
        }      
    }
    this.down = down;

    var fall = function(){
        while(down());  
    }
    this.fall = fall;

    var left = function() {
        if (cur.canLeft(isValid)) {
            clearData();
            cur.left();
            setData();
            refreshDiv(gameData, gameDivs);
        }
    } 
    this.left = left;

    var right = function() {
        if (cur.canRight(isValid)) {
            clearData();
            cur.right();
            setData();
            refreshDiv(gameData, gameDivs);
        }
    }
    this.right = right;

    var rotate = function() {
        if (cur.canRotate(isValid)) {
            clearData();
            cur.rotate();
            setData();
            refreshDiv(gameData, gameDivs);
        }
    }
    this.rotate = rotate;

    var fixed = function() {
        for(var i = 0; i < cur.data.length; i++){
             for(var j = 0; j < cur.data[0].length; j++){
                if(check(cur.origin,i,j)){
                    if(gameData[cur.origin.x + i][cur.origin.y + j] == 2){
                        gameData[cur.origin.x + i][cur.origin.y + j] = 1;
                    }
                }
             }
        }
        refreshDiv(gameData,gameDivs);
    }
    this.fixed = fixed; 
 
    var checkClear = function() {
        var line = 0;
        for(var i = gameData.length - 1; i >= 0; i--){
            var clear = true;
            for(var j = 0; j < gameData[0].length; j++){
                if(gameData[i][j]!=1){
                    clear = false;
                    break;   
                }
            }
            if(clear){
                line++;
                for(var m = i; m > 0; m--){
                    for(var n = 0; n<gameData[0].length; n++){
                        gameData[m][n] = gameData[m-1][n];
                    }
                }
                for (var n = 0; n < gameData[0].length; n++) {
                    gameData[0][n] = 0;
                }
                i++;
            }
        }
        return line;
    }
    this.checkClear = checkClear; 

    var checkGameOver = function() {
        var gameOver = false;
        for(var i =0; i < gameData[0].length; i++){
            if(gameData[1][i] == 1){
                gameOver = true;  
            }
        }
        return gameOver;
    }
    this.checkGameOver = checkGameOver;

    var performNext = function(type,dir){
        cur = next;
        setData();
        next = SquareFactory.make(type,dir);
        refreshDiv(gameData,gameDivs);
        refreshDiv(next.data,nextDivs);
    }
    this.performNext = performNext;

    var setTime = function(time) { 
        timeDiv.innerHTML = time;
    }
    this.setTime = setTime;

    var addScore = function(line) {
        var s = 0;
        switch (line) {
            case 1:
                s = 10;
                break;
            case 2:
                s = 30;
                break;
            case 3:
                s = 60;
                break;
            case 4:
                s = 100;
                break;
            default:
                alert('你怕是神仙吧！');
                break;
        }
        score = score + s;
        scoreDiv.innerHTML = score;
    }
    this.addScore = addScore;

    var init = function(doms,type,dir) {
        gameDiv = doms.gameDiv;
        nextDiv = doms.nextDiv;
        timeDiv = doms.timeDiv; 
        scoreDiv = doms.scoreDiv;
        SquareFactory = new SquareFactory;
        next = SquareFactory.make(type,dir);
        initDiv(gameDiv,gameData,gameDivs);
        initDiv(nextDiv,next.data,nextDivs);
        refreshDiv(next.data,nextDivs);
    }
    this.init = init;
}