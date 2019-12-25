/*
===============
Shortest Word
===============

[INSTRUCTIONS]
shortestWords adalah sebuah function yang menerima satu parameter berupa string,
di mana string tersebut adalah sebuah kalimat dengan rangkaian kata-kata.
function akan mereturn sebuah array yang terdiri dari kata dengan jumlah huruf paling sedikit di kalimat tersebut.

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan indexOf, match, reduce, map dan regex

[EXAMPLE]
input: Do you want to become a great coder.
proses: panjang kata paling sedikit dalam kalimat tersebut: 1, maka akan mencari kata dengan huruf tersebut
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
proses: panjang kata paling sedikit dalam kalimat tersebut: 3, maka akan mencari kata dengan huruf tersebut
output: ['you', 'it!']
*/
function split(word, separator) {
    var hasil = []
    var temp = ''
    for (var i = 0; i < word.length + 1; i++) {
        if (word[i] == separator || i == word.length) {
            hasil.push(temp)
            temp = ''
        }
        else {
            temp += word[i]
        }
    }
    return hasil
}
function shortestWords(words) {
    // Write your code here
    var kata = split(words, ' ')
    // console.log(kata)
    var short = 0
    for (var i = 0; i < kata.length; i++) {
        // var katashort = []
        if (kata[i].length < short || short == 0) {
            short = kata[i].length
            katashort=[kata[i]]
        }
        if (short == kata[i].length) {
            for (var j = 0; j < katashort.length; j++) {
                if (katashort[j].toLowerCase()!==kata[i].toLowerCase()) {
                    katashort.push(kata[i])
                }
            }
        }
    }
    return katashort
}

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!']
console.log(shortestWords('I am diligent')); // ['I']
console.log(shortestWords('Apapun hasilnya, kita sudah berusaha, serahkan saja')); // ['kita', 'saja']