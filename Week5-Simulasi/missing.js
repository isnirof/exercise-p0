/**
Missing Numbers
-------------------
Implementasikan function `missingNumbers` untuk mencari
angka yang hilang dari array `numbers`.
Contoh:
  - Input: [9, 4, 2, 8]
    Output: [1, 3, 5, 6, 7]
  - Input: [8, 3, 2, 1, 7, 5, 6]
    Output: [4]
  - Input: [4, 2, 3, 1]
    Output: []

RULES:
--------
- WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
- Dilarang menggunakan built-in function:
  - .max()
  - .min()
  - .sort()
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )

STORE "result" with the value of empty Array
  FOR LOOP index 0 to length of numbers

*/

function missingNumbers(numbers) {
  // Write your code here
  var run = true
  while (run) {
    run = false
    for (var i = 0; i < numbers.length - 1; i++) {
      if (numbers[i + 1] < numbers[i]) {
        [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]]
        run = true
      }
    }
  }
  var result = []
  // var i = 0
  var count = numbers[0]
  var value=true
  while (count<numbers[numbers.length-1]) {
    var value=false
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] == count) {
        value=true
      }
    }
    if(!value) {
      result.push(count)
    }
    count++
  }
  // console.log(gap)

  return result
}

console.log(missingNumbers([1, 5, 10, 7, 6])); // [2, 3, 4, 8, 9]
console.log(missingNumbers([10, 1])); // [2, 3, 4, 5, 6, 7, 8, 9]
console.log(missingNumbers([90, 92, 91])); // []
console.log(missingNumbers([60, 54, 50])); // [51, 52, 53, 55, 56, 57, 58, 59]
console.log(missingNumbers([])); // []