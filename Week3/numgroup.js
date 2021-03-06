/*
  --------------
  DIGITS GROUPER
  --------------
  PROBLEM
  =======
  digitsGrouper adalah sebuah function yang menerima array of number 1 dimensi.
  Function akan membentuk array dua dimensi dimana dimensi pertama akan mengelompokkan angka-angka di array tadi sesuai jumlah digit nya.
  Group akan berurut. posisi pertama untuk angka 1 digit, posisi kedua untuk angka 2 digit, dan seterusnya, hingga maksimal untuk angka 4 digit.
  Contoh:
  array of numbers: [1, 12, 1234, 13, 0, 88, 123, 456]
  proses:
  satu digit -> 1, 0
  dua digit -> 12, 13, 88
  tiga digit -> 123, 456
  empat digit -> 1234
  output:
  [
    [1, 0],
    [12, 13, 88],
    [123, 456],
    [1234],
  ]
  
  RULES
  =====
  Dilarang menggunakan method map, filter, dan reduce.
*/

function digitsGrouper(numbers) {
  // only code here..
  str = [];
  for (var i = 0; i < numbers.length; i++) {
    str.push(String(numbers[i]));
  }

  hasil = [[], [], [], []];
  for (i = 0; i < str.length; i++) {
    if (str[i].length == 1) {
      hasil[0].push(Number(str[i]))
    }
    else if (str[i].length == 2) {
      hasil[1].push(Number(str[i]))
    }
    else if (str[i].length == 3) {
      hasil[2].push(Number(str[i]))
    }
    else if (str[i].length == 4) {
      hasil[3].push(Number(str[i]))
    }
  }
  return hasil;
}

console.log(digitsGrouper([1, 12, 13, 0, 88, 123, 456])); // [ [ 1, 0 ], [ 12, 13, 88 ], [ 123, 456 ], [] ]
console.log(digitsGrouper([1234, 8, 2, 543, 1, 11, 222, 7654])); // [ [ 8, 2, 1 ], [ 11 ], [ 543, 222 ], [ 1234, 7654 ] ]
console.log(digitsGrouper([1111, 1, 6, 5, 5, 555, 111, 11, 55, 5555])); // [ [ 1, 6, 5, 5 ], [ 11, 55 ], [ 555, 111 ], [ 1111, 5555 ] ]
console.log(digitsGrouper([])); // [ [], [], [], [] ]
console.log(digitsGrouper([0, 00, 000, 0000])); // [ [ 0, 0, 0, 0 ], [], [], [] ]