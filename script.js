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


const head = new Image();
head.src = './images/head.png';




let mouth = {};
let eyes = {};


// this is mostly gonna change once I get sprites




document.onkeydown = function(e){
    if(['q', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].includes(e.key)){
        mouth = {};
        mouth[e.key] = true;
    }

    if(['z', 'x', 'c', 'v', 'b', 'n', 'm'].includes(e.key)){
        eyes = {};
        eyes[e.key] = true;

    }
    

}


document.onkeyup = function(e){
    if(['e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].includes(e.key)){
        mouth[e.key] = false;
    }

    mouth.q = true;
   
}



eyes.z = true;
let frames = 0;




function animate(){




    
    q.clearRect(0,0,1000,1000);

    q.drawImage(head, 30, 0, 700, 800)





    if(eyes.z){
        q.clearRect(250,350,200,100)
        q.drawImage(wideEyes, 250, 350, 250, 100);
    }

    if(eyes.x){
        q.clearRect(250,350,200,100)
        q.drawImage(bored, 250, 350, 250, 100);
    }

    if(eyes.c){
        q.clearRect(250,350,200,100)
        q.drawImage(mad, 250, 350, 250, 100);
    }

    if(eyes.v){
        q.clearRect(250,350,200,100)
        q.drawImage(bugginOut, 250, 350, 250, 100);
    }

    if(eyes.b){
        q.clearRect(250,350,200,100)
        q.drawImage(skeptical, 250, 350, 250, 100);
    }

    if(eyes.n){
        q.clearRect(250,350,200,100)
        q.drawImage(crying, 250, 350, 250, 100);
    }
    if(eyes.m){
        q.clearRect(250,350,200,100)
        q.drawImage(knockedOut, 250, 350, 250, 100);
    }




    if(mouth.q){
        q.clearRect(300,450,200,200)
        q.drawImage(mmm, 300,450, 200, 200);  
    }
    
    if(mouth.y){
            q.clearRect(300,450,200,200)
            q.drawImage(l, 300, 450, 200, 200);
    }

    if(mouth.u){
        q.clearRect(300,450,200,200)
        q.drawImage(ah, 300, 450, 200, 200);  
    }
    if(mouth.i){
        q.clearRect(300,450,200,200)
        q.drawImage(ih, 300, 450, 200, 200);   
    }
    if(mouth.p){
        q.clearRect(280,450,200,200)
        q.drawImage(w, 280, 450, 200, 200); 
    }
    if(mouth.t){
        q.clearRect(275,450,200,200)
        q.drawImage(f, 275, 450, 200, 200);  
    }
    if(mouth.o){
        q.clearRect(305,450,200,200)
        q.drawImage(oh, 305, 450, 200, 200);  
    }
    if(mouth.e){
        q.clearRect(300,450,200,200)
        q.drawImage(eh, 300, 450, 200, 200);  
    }
 
    if(mouth.r){
        q.clearRect(290,450,200,200)
        q.drawImage(ck, 290, 450, 200, 200);  
    }



    requestAnimationFrame(animate)
}

// need to refactor to remove hardcoded numbers









animate();




