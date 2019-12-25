/*

Diberikan sebuah function angka terbesar yang menerima satu parameter berupa array. 
fungsi ini akan mengembalikan atau me return nilai berupa angka terbesar dari array. 
Jika array kosong maka akan mengembalikan nilai -1

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/

function angkaTerbesar(sentence) {
    // Write your code here
    if(sentence.length==0) return -1

    // var hasil=sentence[0] > angkaTerbesar(sentence.slice(1)) ? sentence[0] : angkaTerbesar(sentence.slice(1))
    // return hasil
    if(sentence[0]>angkaTerbesar(sentence.slice(1))) {
        hasil=sentence[0]
    }
    else {
        hasil=angkaTerbesar(sentence.slice(1))
    }
    return hasil
}

// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
console.log(angkaTerbesar([2, 1, 7, 2, 8])) // 8
console.log(angkaTerbesar([])) // -1