var canvas = document.getElementById('myCanvas');
var ctx= canvas.getContext('2d');

setInterval(draw,10);// 일정한 시간 간격으로 작업을 수행한다 

var x= canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0,Math.PI*2);
    ctx.fillStyle="#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
    ctx.fillStyle="#0095DD";
    ctx.fill();
    ctx.closePath();
}
function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBall();

    // if(y + ballRadius > canvas.height || y -ballRadius <0 {dy=-dy; } 
        
    //if(x +ballRadius > canvas.width || x -ballRadius <0 ){ dx=-dx;}

    if(y + dy > canvas.height-ballRadius  || y + dy < ballRadius ){
        dy=-dy; // 공의 방향을 바꿈
        
    }
    if(x +dx > canvas.width -ballRadius || x + dx < ballRadius ){
        dx=-dx; // 공의 방향을 바꿈
        
    }
   

    x +=dx; // y= y+dx
    y +=dy;
}