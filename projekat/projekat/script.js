let x = 0;

let br = document.getElementById('broj');
br.textContent = x;

function plus(){
    x++;
    br.textContent = x;
}
function minus(){
    x--;
    br.textContent = x;
}