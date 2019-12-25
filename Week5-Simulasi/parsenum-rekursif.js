/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.
  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1
  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/
function parseNumber(n) {
  if (n <= 10) {
    return n;
  }
  var run = true
  var pembagi = 10;
  while (run) {
    hasilbagi = Math.floor(n / pembagi)
    if (hasilbagi < 10) {
      run = false
    }
    else {
      pembagi = pembagi * 10
    }
  }
  var result = hasilbagi * pembagi
  return result + '+' + parseNumber(n - result)
}
// console.log(Math.floor(3333/10))
console.log(parseNumber(3333)) // 3000+300+30+3
// console.log(parseNumber(90)) // 90
// console.log(parseNumber(2333)) // 2000+300+30+3
// console.log(parseNumber(5050)) // 5000+50
// console.log(parseNumber(550000)) // 500000+50000