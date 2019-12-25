/**
  ************
  TAMBAH DASH
  ************

  Diberikan sebuah function tambahDash(str) yang menerima satu parameter berupa string.
  Function akan mengembalikan str tersebut dengan menambahkan simbol dash ('-') di antara
  dua angka ganjil di dalam string yang menjadi parameter tersebut.

  Contoh 1:
  ---------
  input: '1233897'
  output: '123-389-7'

  Contoh 2:
  ---------
  input: '1739028'
  output: '1-7-3-9028'

  RULES:
    - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
    - TIDAK BOLEH MENGGUNAKAN BUILT IN FUNCTION DAN FUNCTION ES6 APAPUN
**/

function tambahDash(str) {
    // Write your code here
    var hasil = ''
    for (var i = 0; i < str.length; i++) {
        // console.log(str[i],'<<<',i)
        if (Number(str[i]) % 2 == 1 && Number(str[i + 1]) % 2 == 1) {
            hasil +=str[i]+ '-'
            // i++
        }
        else {
            hasil += str[i]
        }
        // console.log(hasil)
    }
    return hasil
}

console.log(tambahDash('454793')); // '4547-9-3'
console.log(tambahDash('1739028')); // '1-7-3-9028'
console.log(tambahDash('891829')); // '89-1829'
console.log(tambahDash('10192')); // '101-92'
console.log(tambahDash('222222')); // '222222'