/*
==================================
Array Mastery: Shortest Word
==================================

Nama:________

[INSTRUCTION]
Disediakan sebuah kalimat. Function shortestWords akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan jumlah huruf paling sedikit dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan jumlah kata yang paling sedikit tersebut.

[EXAMPLE]
input (kalimat): Do you want to become a great coder.
panjang kata paling sedikit dalam kalimat: 1
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
panjang kata paling sedikit dalam kalimat: 3
output: ['you', 'it!']

[CONSTRAINTS]
Dilarang menggunakan function .map/.filter/.reduce!
Diarang menggunakan regex!

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!

function shortestWords(words) {
    // Write your code here
    var kata=words.split(' ')
    // var hasil=[]
    var min=0
    for(var i=0;i<kata.length;i++) {
        if(kata[i].length<min || min==0) {
            min=kata[i].length
            hasil=[kata[i]]
        }
        if(kata[i].length==min) {
            for(var j=0;j<hasil.length;j++) {
                if(hasil[j].toLowerCase()!==kata[i].toLowerCase()) {
                    hasil.push(kata[i])
                }
            }
        }
    }
    return hasil
}

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!']
console.log(shortestWords('I am diligent')); // ['I']