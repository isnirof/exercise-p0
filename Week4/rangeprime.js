/*
    ==================
    Range Prime Number
    ==================

    [INSTRUCTION]
    jika ditanya berapa angka prima yg pertama maka jawabannya adalah 2.
    yang mana prime[0] = 2; 
    maka :
    
    [EXAMPLE]
    jika 10 angka prime pertama : [2,3,5,7,11,13,17,19]
    jika angka prime index ke-4 sampai index ke-11 maka : [11,13,17,19,23,29,31]
    
    diberikan 2 parameter "start","finish"
    "start" yaitu index angka prime yang ditentukan.  
    "finish" yaitu batas index angka prime 

    hasil akhirnya adalah deret angka prime yg telah ditentukan batasnya dalam bentuk array

*/
function isPrime(num) {
    if(num==1) {
        return false
    }
    if(num==2) {
        return true
    }
    for(var i=2;i<num;i++) {
        if(num%i==0) {
            return false
        }
    }
    return true
}
function rangePrimeNumber(start,finish) {
    // your code is here
    var counter=0;
    var arrPrima=[]
    var i=2

    while(counter<finish) {
        if(isPrime(i)) {
            if(counter>=start) {
                arrPrima.push(i)
            }
            counter++
        }
        i++
    }
    return arrPrima
    
}

console.log(rangePrimeNumber(5,10))
// output 
// [11,13,17,19,23,29]

console.log(rangePrimeNumber(4,9));
// output [7,11,13,17,19,23]