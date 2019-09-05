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



const keys = {};





mmm.onload = function(){
    q.drawImage(mmm, 100, 100, 200, 200);
}


document.onkeydown = function(e){
    if(e.keyCode > 60  && e.keyCode < 95){
        keys[e.key] = true;
    }
}


document.onkeyup = function(e){
    if(e.keyCode > 60  || e.keyCode < 95){
        keys[e.key] = false;
    }

    // keys.m = true;
   
}



function animate(){
    if(keys.m){
        q.clearRect(100,100,200,200)
        q.drawImage(mmm, 100, 100, 200, 200);  
    }
    
    if(keys.l){
            q.clearRect(100,100,200,200)
            q.drawImage(l, 100, 100, 200, 200);
    }

    if(keys.a){
        q.clearRect(100,100,200,200)
        q.drawImage(ah, 100, 100, 200, 200);  
    }
    if(keys.i){
        q.clearRect(100,100,200,200)
        q.drawImage(ih, 100, 100, 200, 200);   
    }
    if(keys.w){
        
        q.clearRect(100,100,200,200)
        q.drawImage(w, 100, 100, 200, 200); 
    }
    if(keys.f){
        q.clearRect(100,100,200,200)
        q.drawImage(f, 100, 100, 200, 200);  
    }
    if(keys.o){
        q.clearRect(100,100,200,200)
        q.drawImage(oh, 100, 100, 200, 200);  
    }
    if(keys.e){
        q.clearRect(100,100,200,200)
        q.drawImage(eh, 100, 100, 200, 200);  
    }
 
    if(keys.k){
        q.clearRect(100,100,200,200)
        q.drawImage(ck, 100, 100, 200, 200);  
    }



    requestAnimationFrame(animate)
}










animate();




