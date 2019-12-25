/**
===============
NON PALINDROME
===============

Problem
--------
nonPalindrome adalah sebuah function yang akan menerima satu parameter bertipe string.
Function ini akan mengembalikan array satu dimensi yang berisikan kumpulan kata yang tidak palindrome.

Contoh 1:
input: 'Wow mereka janji bertemu di makam'
output: ['mereka', 'janji', 'bertemu', 'di']

Contoh 2:
input: 'Katak naik honda civic pada malam hari di mimpi Dimitri'
output: ['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']


RULES:
- Tidak boleh menggunakan .reverse(), .join()
**/
function cekPalindrom(kata) {
    for(var i=0;i<kata.length;i++) {
        if(kata[i].toLowerCase()!==kata[kata.length-1-i].toLowerCase()) {
            return false
        }
    }
    return true
}
// console.log(cekPalindrom('katak'))
function nonPalindrome(sentence) {
    // Write your code here
    var hasil=[]
    var split=sentence.split(' ')
    // console.log(split)
    for(var i=0;i<split.length;i++) {
        if(!cekPalindrom(split[i])) {
            hasil.push(split[i])
        }
    }
    return hasil

}

console.log(nonPalindrome('Wow mereka janji bertemu di makam'));
//['mereka', 'janji', 'bertemu', 'di']

console.log(nonPalindrome('Katak naik honda civic pada malam hari di mimpi Dimitri'));
//['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']

console.log(nonPalindrome('kasurrusak kalo dipisah menjadi kasur rusak'));
//['kalo', 'dipisah', 'menjadi', 'kasur', 'rusak']