console.log('yo');

const q = document.getElementById('canvas').getContext('2d');

const closed = new Image();
closed.src = "./images/closedmouth.png";
const a = new Image();
a.src = "./images/a.png";
const o = new Image();
o.src = "./images/o.png";
const smile = new Image();
smile.src = "./images/smile.png";


closed.onload = function(){
    q.drawImage(closed, 100, 100, 200, 200);
}


document.onkeydown = function(e){


    if(e.key ==="l"){

            q.clearRect(100,100,200,200)
            q.drawImage(a, 100, 100, 200, 200);
      

    }

    if(e.key ==="k"){
        q.drawImage(o, 100, 100, 200, 200);
        
    }
    if(e.key ==="j"){
        q.drawImage(smile, 100, 100, 200, 200);
        
    }



}
