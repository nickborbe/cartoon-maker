//grab the canvas
const q = document.getElementById('canvas').getContext('2d');
// get all the mouth-shape images ready
const mmm = new Image();
mmm.src = "./images/mmm.png";
const ah = new Image();
ah.src = "./images/ah.png";
const oh = new Image();
oh.src = "./images/oh.png";
const eh = new Image();
eh.src = "./images/eh.png";
const f = new Image();
f.src = "./images/f.png";
const l = new Image();
l.src = "./images/l.png";
const w = new Image();
w.src = "./images/w.png";
const ck = new Image();
ck.src = "./images/ck.png";
const ih = new Image();
ih.src = "./images/ih.png";


// create our character object

const bored = new Image();
bored.src="./images/bored.png";
const bugginOut = new Image();
bugginOut.src="./images/buggin-out.png";
const crying = new Image();
crying.src="./images/crying.png";
const mad = new Image();
mad.src="./images/mad.png";
const wideEyes = new Image();
wideEyes.src="./images/wide-eyes.png";
const knockedOut = new Image();
knockedOut.src="./images/knocked-out.png";
const skeptical = new Image();
skeptical.src="./images/skeptical.png";



let mouth = {};
let eyes = {};







document.onkeydown = function(e){
    if(e.keyCode > 60  && e.keyCode < 95){
        mouth = {};
        mouth[e.key] = true;
    }

    if(['z', 'x', 'c', 'v', 'b', 'n', 'm'].includes(e.key)){
        eyes = {};
        eyes[e.key] = true;

    }
    

}


document.onkeyup = function(e){
    if(e.keyCode > 60  || e.keyCode < 95){
        mouth[e.key] = false;
    }

    mouth.q = true;
   
}

eyes.z = true;
let frames = 0;


function animate(){




    
    q.clearRect(0,0,1000,1000);



    q.beginPath();
    q.arc(295, 235, 200, 0, 2 * Math.PI);
    q.lineWidth = 5;
    q.stroke();


    


    if(eyes.z){
        q.clearRect(200,100,200,100)
        q.drawImage(wideEyes, 175, 100, 250, 100);
    }

    if(eyes.x){
        q.clearRect(200,100,200,100)
        q.drawImage(bored, 175, 100, 250, 100);
    }

    if(eyes.c){
        q.clearRect(200,100,200,100)
        q.drawImage(mad, 175, 100, 250, 100);
    }

    if(eyes.v){
        q.clearRect(200,100,200,100)
        q.drawImage(bugginOut, 175, 100, 250, 100);
    }

    if(eyes.b){
        q.clearRect(200,100,200,100)
        q.drawImage(skeptical, 175, 100, 250, 100);
    }

    if(eyes.n){
        q.clearRect(200,100,200,100)
        q.drawImage(crying, 175, 100, 250, 100);
    }
    if(eyes.m){
        q.clearRect(200,100,200,100)
        q.drawImage(knockedOut, 175, 100, 250, 100);
    }




    if(mouth.q){
        q.clearRect(200,200,200,200)
        q.drawImage(mmm, 200, 200, 200, 200);  
    }
    
    if(mouth.y){
            q.clearRect(200,200,200,200)
            q.drawImage(l, 200, 200, 200, 200);
    }

    if(mouth.u){
        q.clearRect(200,200,200,200)
        q.drawImage(ah, 200, 200, 200, 200);  
    }
    if(mouth.i){
        q.clearRect(200,200,200,200)
        q.drawImage(ih, 200, 200, 200, 200);   
    }
    if(mouth.p){
        q.clearRect(200,200,200,200)
        q.drawImage(w, 200, 200, 200, 200); 
    }
    if(mouth.t){
        q.clearRect(200,200,200,200)
        q.drawImage(f, 200, 200, 200, 200);  
    }
    if(mouth.o){
        q.clearRect(200,200,200,200)
        q.drawImage(oh, 200, 200, 200, 200);  
    }
    if(mouth.e){
        q.clearRect(200,200,200,200)
        q.drawImage(eh, 200, 200, 200, 200);  
    }
 
    if(mouth.r){
        q.clearRect(200,200,200,200)
        q.drawImage(ck, 200, 200, 200, 200);  
    }



    requestAnimationFrame(animate)
}










animate();




