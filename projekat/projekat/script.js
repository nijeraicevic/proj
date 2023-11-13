let x = 0;



function plus(){
    x++;
    if(x>10){
        alert("x ne sme da bude veci od 10");
        x=0;
    }
    br.textContent = x;
}
function minus(){
    x--;
    if(x<0){
        alert("x ne sme da bude manji od 0");
        x=0;
    }
    br.textContent = x;
}


let br = document.getElementById('broj');
br.textContent = x;