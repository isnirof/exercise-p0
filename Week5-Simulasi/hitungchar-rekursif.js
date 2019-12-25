/**
 * ======================
 * Hitung Char Recursive
 * ======================
 *
 * Buatlah sebuah function dengan teknik recursive untuk menghitung berapa banyak suatu 
 * karakter (bisa huruf atau angka) muncul dalam sebuah array of strings.
 *
 * RULES
 * =====
 * 1. Wajib menggunakan rekursif
 * 2. Dilarang menambahkan parameter baru
 * 3. Dilarang membuat variable di luar function countCharRecursive
 * 4. Dilarang mengubah tipe data parameter
 * 5. `Hanya boleh menggunakan 1 loop`
 */

function countCharRecursive(sentence, letter) {
  // Write your code here
  if (sentence.length <= 0) {
    return 0
  }
  var count = 0
  if (sentence[0].includes(letter)) {
    count++
  }
  // console.log(count,sisa)
  var sisa = sentence.slice(1)
  return count + countCharRecursive(sisa, letter)
}

// console.log(countCharRecursive(['90125785123545', 'balonku ada 5', '1 tahun ada 52 minggu', '35-infinite-fox'], '5')); // 7
// console.log(countCharRecursive(['Old', 'MacDonald', 'had', 'four', 'farms'], 'ar')); // 2
// console.log(countCharRecursive(['Anchor', 'classic', 'daring', 'eager', 'fearless'], 'a')); // 4
// console.log(countCharRecursive(['haha', 'haha', 'haha', 'haha', 'haha'], 'ha')); // 10
// console.log(countCharRecursive([], 'z')); // 0

/*
======================
Counter Char Recursive
======================

[INSTRUCTION]
counterCharRecursive adalah sebuah function recursive yang menerima dua parameter yaitu array dan string.
function ini akan mereturn jumalah char yang sesuai dengan parameter search.

[EXAMPLE]
input: ['ada', 'apa', 'ana', 'ada']
search: 'a'

function akan mencari jumlah a dalam input
result: 8

[RULE]
1. WAJIB menggunakan metode recursive
2. HANYA boleh menggunakan SATU looping
3. dilarang menggunakan indexOf(), find(), filter()
4. dilarang menggunakan regex
*/

function counterCharRecursive(input, search) {
  if (input.length == 0) {
    return 0
  }
  var count = 0
  for (var i = 0; i < input[0].length; i++) {
    if (input[0][i] == search) {
      count++
    }
  }
  return count + counterCharRecursive(input.slice(1), search)
}

console.log(counterCharRecursive(['ada', 'apa', 'ana', 'ada'], 'a')) // 8
console.log(counterCharRecursive(['xxxxoxoxoxoxoxoxxxooooo'], 'x')) // 12
console.log(counterCharRecursive(['b', 'o', 'l', 'd', 'f', 'o', 'x'], 'l')) // 1
console.log(counterCharRecursive(['terima', 'kasih', 'sudah', 'selalu', 'berjuang'], 's')) // 3