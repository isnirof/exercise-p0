/*
================
A in the Middle
================

Nama:________

[INSTRUKSI]
function aInTheMiddle adalah sebuah function yang menerima satu parameter yaitu sebuah array yang menampung string.
Function akan mengumpulkan semua string dalam array tersebut yang memiliki karakter di tengah yaitu 'a'. Abaikan kecil besar dari karakter.
Jika string genap, dua huruf di tengah harus 'a'.
Kumpulan string yang memiliki 'a' ditengah akan ditampung dalam array dan di kembalikan oleh function tersebut.

[CONTOH]

input: ['asafw', 'test', 'waw']
output: ['asafw', 'waw']

input: ['baon', 'test', 'taqs']
output: []

input: ['graail', 'nAn', 'naAn']
output: ['graail', 'nAn', 'naAn']

input: ['asafw', 'wow', 'o', 'graail', 'nAn']
output: ['asafw', graail', 'nAn']
*/

function aInTheMiddle(words) {
    // Write your code here
    var hasil = []
    for (var i = 0; i < words.length; i++) {
        if (words[i].length % 2 == 1) {
            if (words[i][(words[i].length - 1) / 2].toLowerCase() == 'a') {
                hasil.push(words[i])
            }
        }
        else {
            if(words[i][words[i].length/2].toLowerCase()=='a' && words[i][(words[i].length/2)-1].toLowerCase()=='a' ) {
                hasil.push(words[i])
            }
        }
    }
    return hasil
}

console.log(aInTheMiddle(['asafw', 'test', 'waw'])); // ['asafw', 'waw']
console.log(aInTheMiddle(['baon', 'test', 'taqs'])); // []
console.log(aInTheMiddle(['graail', 'nAn', 'naAn'])); // ['graail', 'nAn', 'naAn']
console.log(aInTheMiddle(['asafw', 'wow', 'o', 'graail', 'nAn'])); // ['asafw', graail', 'nAn']
console.log(aInTheMiddle([])); // []