
function blinken(el){
    let on = true;

    setInterval(blink,100);
    function blink(){
        if(on){
            el.style.visibility ="hidden";
        }else{
            el.style.visibility ="visible";
        }
        on = !on;
    }
}

let interval;
let b;
function box(){

    b = document.getElementById("box");
    let x = 0;
    let speed = 1;
    let y = 0;
    let num = document.createTextNode(Math.ceil(Math.random()*23));
    let h1 = document.createElement("h1");
    h1.setAttribute("id","ran-num");
    h1.appendChild(num);
    h1.style.margin = "auto";
    b.appendChild(h1);
    interval = setInterval(moveBox, 20);
    function moveBox(){
        
        if(x > window.innerWidth/2-50){
            clearInterval(interval);
        }
        speed++;
        x+=speed;
        b.style.left = x + "px";
        //console.log(x);
    }
    
    

  
}

function randomPosition(){

    let box = document.getElementById("popcon");

    box.style.left = 0;

    let ry = Math.random()*(window.innerHeight/2)-window.innerHeight/2;
    let rx = Math.random()*(window.innerWidth/2)-window.innerWidth/2;

    box.style.top = ry+"px";
    box.style.left = rx+"px";

    let randomnum = Math.ceil(Math.random()*23);
    document.getElementsByClassName("num")[0].innerHTML = randomnum;
    document.getElementsByClassName("num")[1].innerHTML = randomnum;

    console.log(ry+" "+rx);
}

let inta;
function aufklappen(){
    let box = document.getElementById("popcon");

    box.style.height = 0 +"px";
    let ys = box.style.height.substring(0, box.style.height.indexOf("p"));
    inta = setInterval(anim,10);
    function anim(){
        ys++;
        if(ys==200){
            clearInterval(inta);
        }

        box.style.height=ys+"px";

        //console.log(ys);
    }
    
}

let opInt;
function blendIn(){
    let text = document.getElementById("popcon");
    let op = 0;
    let inc = 0.05;
    text.style.opacity = 0;

    randomPosition();
    opInt = setInterval(anim,100);


    function anim(){

        if(op >= 1){
            clearInterval(opInt);
        }
        op+=inc;
        text.style.opacity = op;
        console.log("Blend in"+op);

    }
    
    //console.log(text);
}

let into;
function closePop(){
    let box = document.getElementById("popcon");
    let op = 1;
 

    into = setInterval(opacityChange,100);
   
    function opacityChange(){

        if(op < 0){
            clearInterval(into);
        }
        op-=0.1;
        box.style.opacity = op;

       // console.log("close"+op);
    }


    setTimeout(blendIn,5000);
    //console.log("hallo");
}

function playSound(){
    let audio = document.getElementById("popsound");

    audio.play();
}
function init(){
 
    let k = document.getElementById("navbrand");
    let n = document.getElementById("nav");
    setTimeout(box,1000);
    blinken(document.getElementById("poptitle"));
    setTimeout(aufklappen,500);
    blendIn();
    //document.getElementById("accept").addEventListener("click",document.getElementById("popsound").play);
    let denied = document.getElementById("deny");
    denied.addEventListener("mousedown",randomPosition);
    //stick();

   
}

function stick(){

    let box = document.getElementById("box");
    let boxY = box.style.top.substring(0,box.style.top.indexOf("p"));
}

function scrollNot(){

    let box = document.getElementById("box");
    let curYpos = box.style.top.substring(0,box.style.top.indexOf("p"));
    box.style.top = window.pageYOffset+500+ "px";
    console.log(curYpos);


}


window.addEventListener("load", init);