let gamseq=[];
let userSeq=[];

let stated=false;

let btns=["yellow","red","purple","green"];
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(stated == false){
    console.log("game stated");
    stated=true;
    levelup();
    }
    
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout( function() {
         btn.classList.remove("flash");
        
    }, 250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout( function() {
         btn.classList.remove("userflash");
        
    }, 250);
}
function levelup(){
    userSeq=[];

    level++;
    h2.innerText=`level up${level}`;

    let randinx=Math.floor(Math.random()*3);
    let randcolor=btns[randinx];
    let randbtn=document.querySelector(`.${randcolor}`);
    
    gamseq.push(randcolor);
    console.log(gamseq);
    btnFlash(randbtn);
}
function chechAns(idx){
   
    if(userSeq[idx] === gamseq[idx]){
        if(userSeq.length == gamseq.length){
            setTimeout(levelup,1000);
        }
        
    }
    else{
        h2.innerHTML=`game over ! your score was <b> ${level}</b ><br>press any kay to start`;
       
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
           document.querySelector("body").style.backgroundColor="white"; 
        },1500);
         reset();
    }
}
function btnPress(){
    let btn=this;
    console.log(this);
    btnFlash(btn);
    userflash(btn);

     userColor= btn.getAttribute("id");
    userSeq.push(userColor);
    chechAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    stated =false;
    gamseq=[];
    userSeq=[];
    level=0;
}