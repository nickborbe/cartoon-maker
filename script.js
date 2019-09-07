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



const mouth = {};





mmm.onload = function(){
    q.drawImage(mmm, 100, 100, 200, 200);
}


document.onkeydown = function(e){
    if(e.keyCode > 60  && e.keyCode < 95){
        mouth[e.key] = true;
    }
}


document.onkeyup = function(e){
    if(e.keyCode > 60  || e.keyCode < 95){
        mouth[e.key] = false;
    }

    mouth.q = true;
   
}



function animate(){

    
    q.clearRect(0,0,1000,1000);



    q.beginPath();
    q.arc(295, 235, 200, 0, 2 * Math.PI);
    q.lineWidth = 5;
    q.stroke();




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




