
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
        console.log(x);
    }
    
    b.addEventListener("mousedown",randomPos);
    function randomPos(){
        
        let ry = Math.random()*(window.innerHeight-100);
        let rx = Math.random()*(window.innerWidth-100);

        b.style.top = ry+"px";
        b.style.left = rx+"px";

        document.getElementById("ran-num").innerHTML = Math.ceil(Math.random()*23);
    }

  
}
function init(){
 
    let k = document.getElementById("navbrand");
    let n = document.getElementById("nav");
    setTimeout(box,1000);
    blinken(document.getElementById("box"));
}



window.addEventListener("load", init);