function soal1(num) {
    simbol='!@#';
    hasil=[];
    counter=1;

    if(!num) {
        return `Invalid input`
    }

    for(var i=0;i<num;i++) {
        if(counter>simbol.length) {
            counter-=simbol.length

        }
        if(counter%3==0) {
            hasil.push(simbol[2])
            // hasil.push(counter)
        }
        else if (counter%2==0) {
            hasil.push(simbol[1])
            // hasil.push(counter)
        }
        else {
            hasil.push(simbol[0])
            // hasil.push(counter)
        }
        counter++
    }
    return hasil;
}
console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(6));
// output : ['!','@','#','!','@','#']

console.log(soal1(4))
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input


// 0 3 6 -> ! var tandaSeru = 0 += 3