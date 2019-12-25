/*
HACKTIV8 Online Live Coding 3

Nama:

===============
Angka Terbilang
===============

[Perintah]

Buatlah sebuah function yang mengubah kata didalam kalimat menjadi kata bilangan (TWO, FOUR) berdasarkan jumlah huruf yang ada didalam kata dan diurutkan berdasarkan jumlah huruf yang terbesar.
jika dalam 1 kata memiliki:

1 huruf = One
2 huruf = Two
3 huruf = Three
4 huruf = Four
5 huruf = Five
6 huruf = Six
7 huruf = Seven
8 huruf = Eight
9 huruf = Nine

[Hint]
1. ubah kata menjadi angka

2. lakukan pengurutan dari yang terbesar ke terkecil

3. ubah angka menjadi bilangan angka


[Contoh]
input : 'Aku Budi'
output = ['Four', 'Three']

[DOKUMENTASI SOLUSI / STEP]
*/

function strtoNum(str) {
    // Write your code here
    var eng={
        'One':1,
        'Two':2,
        'Three':3,
        'Four':4,
        'Five':5,
        'Six': 6,
        'Seven':7,
        'Eight':8,
        'Nine':9
    }
    var str2=str.split(' ')
    var run=true
    while(run) {
        run=false
        for(var i=0;i<str2.length-1;i++) {
            if(str2[i].length<str2[i+1].length) {
                [str2[i],str2[i+1]]=[str2[i+1],str2[i]]
                run=true
            }
        }
    }
    // console.log(str2)
    var hasil=[]
    for(var i=0;i<str2.length;i++) {
        for(num in eng) {
            if(str2[i].length==eng[num]) {
                hasil.push(num)
            }
        }
    }
    return hasil
}

console.log(strtoNum('Gray Fox')); //[ 'Four', 'Three' ]
console.log(strtoNum('Budi Learning JS')); //[ 'Eight', 'Four', 'Two' ]
console.log(strtoNum('Web Developer')); //[ 'Nine', 'Three' ]
console.log(strtoNum('I Become Developer')); //[ 'Nine', 'Six', 'One' ]