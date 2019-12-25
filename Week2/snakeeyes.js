var dadu1 = 3;
var dadu2 = 5;
// Write your code here

function snakeEyes(dadu1, dadu2) {
    if(dadu1==dadu2) {
        dadu1++;
        if(dadu1>6) {
            dadu1=1;
        }
        return dadu1+dadu2;
    }
    else {
        return dadu1+dadu2;
    }
}

console.log(snakeEyes(dadu1, dadu2));