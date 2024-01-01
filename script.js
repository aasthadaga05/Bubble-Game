function makeBubble(){
    var clutter="";
for(var i=0;i<133;i++){
    var rn=Math.floor(Math.random()*10);
    clutter+=`  <div class="bubble">${rn}</div>`;
}
document.querySelector("#panel-bottom").innerHTML=clutter;
}
makeBubble();

var hitrn=0;
function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitrn;
}
getNewHit();

var timer=60;
function runTimer(){
var timerint=setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#time").textContent=timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector("#panel-bottom").innerHTML=`<h1>Game Over</h1>`
    }
},1000);
}
runTimer();

var score=0;
function increaseScore(){
score+=10;
document.querySelector("#score").textContent=score;
}

document.querySelector("#panel-bottom").addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent);
    if(clickednum==hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})


