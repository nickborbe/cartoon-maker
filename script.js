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

    keys.m = true;
   
}



function animate(){

    
    q.clearRect(0,0,1000,1000);



    q.beginPath();
    q.arc(200, 200, 150, 0, 2 * Math.PI);
    q.lineWidth = 5;
    q.stroke();




    if(keys.m){
        
        q.drawImage(mmm, 100, 100, 200, 200);  
    }
    
    if(keys.l){
            q.drawImage(l, 100, 100, 200, 200);
    }

    if(keys.a){
        q.drawImage(ah, 100, 100, 200, 200);  
    }
    if(keys.i){
        q.drawImage(ih, 100, 100, 200, 200);   
    }
    if(keys.w){
        
        q.drawImage(w, 100, 100, 200, 200); 
    }
    if(keys.f){
        q.drawImage(f, 100, 100, 200, 200);  
    }
    if(keys.o){
        q.drawImage(oh, 100, 100, 200, 200);  
    }
    if(keys.e){
        q.drawImage(eh, 100, 100, 200, 200);  
    }
 
    if(keys.k){
        q.drawImage(ck, 100, 100, 200, 200);  
    }



    requestAnimationFrame(animate)
}










animate();




