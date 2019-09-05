console.log('yo');

const q = document.getElementById('canvas').getContext('2d');

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



mmm.onload = function(){
    q.drawImage(mmm, 100, 100, 200, 200);
}


document.onkeydown = function(e){


    if(e.key ==="l"){
            q.clearRect(100,100,200,200)
            q.drawImage(a, 100, 100, 200, 200);
    }

    if(e.key ==="k"){
        q.clearRect(100,100,200,200)
        q.drawImage(o, 100, 100, 200, 200);
        
    }
    if(e.key ==="j"){
        q.clearRect(100,100,200,200)
        q.drawImage(smile, 100, 100, 200, 200);
        
    }



}

document.onkeyup = function(){
    q.drawImage(closed, 100, 100, 200, 200);
}
