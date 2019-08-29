console.log('yo');

const q = document.getElementById('canvas').getContext('2d');

const closed = new Image();
closed.src = "./images/closedmouth.png";
const a = new Image();
closed.src = "./images/a.png";
const o = new Image();
closed.src = "./images/o.png";
const smile = new Image();
closed.src = "./images/smile.png";


closed.onload = function(){

    q.drawImage(closed, 100,100, 200, 200)
}


document.onkeydown = function(e){

    if(e.key ==="l"){

    }

    if(e.key ==="k"){
        
    }
    if(e.key ==="j"){
        
    }
    if(e.key ==="h"){
        
    }


}
