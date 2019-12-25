/*
Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).

Contoh 1
--------
input: 3
x
xo
x

Contoh 2
--------
input: 6
tampilan:
x
xo
xox
xox
xo
x

*/

var baris=6;

for(i=0;i<baris;i++) {
    kolom='';
    if(i<baris/2) {
        for(j=0;j<=i;j++) {
            if(j%2==0) {
                kolom+='x';
            }
            else {
                kolom+='o';
            }
        }
    }
    else {
        for(j=0;j<(baris-i);j++) {
            if(j%2==0) {
                kolom+='x';
            }
            else {
                kolom+='o';
            }
        }
    }
    console.log(kolom);
}