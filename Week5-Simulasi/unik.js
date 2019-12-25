/*
=============
UNIQUE FINDER
=============

Name :_____________

[INSTRUCTIONS]

uniqueFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn array yang berisi setiap kata yang ditemukan dalam kalimat.
Tidak boleh ada kata yang berulang, dan besar kecil dari kata tidak dianggap.
Sehingga, Hello dan HELLO di anggap kata yang sama.

Function harus mereturn string "NO WORD" jika di kalimat tersebut tidak ditemukan kata apapun.

[CONSTRAINTS]
Tidak ada batasan untuk soal ini.


[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
kata unik: saya, dan, suka, makan, nasi
output: ['saya', 'dan', 'suka', 'makan', 'nasi']

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!


function uniqueFinder(sentence) { 
    // Write your code here
    if(!sentence.length) {
        return 'NO WORDS'
    }
    var split=sentence.split(' ')
    
    var unik=[]
    for(var i=0;i<split.length;i++) {
        value=false
        for(var j=0;j<unik.length;j++) {
            if(unik[j].toLowerCase()==split[i].toLowerCase()) {
                value=true
            }
        }
        if(!value) {
            unik.push(split[i])
        }
    }
    return unik

}

console.log(uniqueFinder('hello black dragon and hello red dragon')); // ['hello', 'black', 'dragon', 'and', 'red']
console.log(uniqueFinder('hello HELLo hEllO hlloe')); // ['hello', 'hlloe']
console.log(uniqueFinder('john is coding and he is coding')); // ['john', 'is', 'coding', 'and', 'he']
console.log(uniqueFinder('blue blue red blue violet red violet')); // ['blue', 'red', 'violet']
console.log(uniqueFinder('')); // 'NO WORDS'