/*
================
MISSING NUMBER
================

description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/
function sort(arr) {
    var run = true
    while (run) {
        run = false
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] < arr[i]) {
                [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
                run = true
            }
        }
    }
    return arr
}
function missingNum(arr) {
    // Your code here
    var hasil = []
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (Number.isInteger(arr[i][j])) {
                hasil.push(arr[i][j])
            }
        }
    }
    var hasilSort = sort(hasil)
    var missing = []
    var count = hasilSort[0]
    while (count < hasilSort[hasilSort.length - 1]) {
        value = false
        for (var i = 0; i < hasilSort.length; i++) {
            if (count == hasilSort[i]) {
                value = true
            }
        }
        if (!value) {
            missing.push(count)
        }
        count++
    }
    return missing
}
console.log(missingNum([[3, ' ', 5], [1, ' ', 7], [9, ' ', ' ']])) // [ 2, 4, 6, 8 ]
console.log(missingNum([[2, ' '], [' ', 5]])) // [ 3, 4 ]
console.log(missingNum([[11, ' ', 13], [17, ' ', 19], [' ', 16, ' ']])) // [ 12, 14, 15, 18 ]
console.log(missingNum([[3, ' ', 5, 15], [1, ' ', 7, 13], [9, ' ', ' ', 12], [' ', 16, ' ', ' ']])) // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])) // []