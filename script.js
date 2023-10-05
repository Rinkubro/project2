var clutter = "";
var score = 0;
var hitnum = 0;
function increeseScore(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
  hitnum = Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent =hitnum;
}
function runTimer(){
  var timer = 60; 
  setInterval (function(){
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else{ 
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over<br>Your Score:${score}</h1>`;
      clearInterval(timerint);
    };
 },1000);
}

function makebubble(){
for (var i =1;i<=168;i++){
    
    clutter += `<div class="bubble">${rn}</div>`;
    var rn = Math.floor(Math.random()*10);
  
}
  document.querySelector("#pbtm").innerHTML = clutter;
}
document.querySelector("#pbtm")
.addEventListener("click",function(dts){
  var clickednum = Number(dts.target.textContent) ;
  if (clickednum === hitnum) {
   increeseScore(); 
   getNewHit();
   makebubble();
  }
});

getNewHit();
runTimer();
makebubble(); 

