let h2=document.querySelector('h2');
let allBtns=document.querySelectorAll(".btn");
let h3=document.querySelector('h3');
let colors=['yellow', 'red', 'green', 'purple'];
let gameSeq=[];
let userSeq=[];


let started=false;
let maxScore=0;
let level=0;

console.log("hello");
document.addEventListener("keypress", function(){
    if(started==false){
        started=true;
        levelUP();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove('userFlash');
    },250);
}

function levelUP(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random() * 3);
    let randColor=colors[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function max(){
   if(level>maxScore){
      maxScore=level;
   }
}

function check(idx){
   if(userSeq[idx]===gameSeq[idx]){
     if(userSeq.length==gameSeq.length){
        setTimeout(levelUP,1000);
     }
   }
   else{
    max();
    h3.innerText=`Max Score : ${maxScore}`;
    h2.innerHTML=`Game Over ! Your score...<b>${level}</b> <br> Press any key to start,`
    document.querySelector('body').style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector('body').style.backgroundColor="white" ;

    },150)
    reset();
}
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute('id');
    userSeq.push(userColor);

    check(userSeq.length-1);
}


for(btn of allBtns){
    btn.addEventListener('click', btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
