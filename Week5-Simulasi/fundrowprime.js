/**
  Diberikan sebuah function bernama findRowPrime
  Function tersebut akan menerima sebuah parameter number.
  Function akan me-return deret prima ke berapa parameter tersebut (asumsi input
  parameter pasti bilangan prima)

  RULES
  -----
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

**/
function isPrime(num) {
    if (num == 1) return false
    if (num == 2) return true

    for (var i = 2; i < num; i++) {
        if (num % i == 0) return false
    }
    return true
}
function findRowPrime(n) {
    // Write your code here
    var count = 1
    var angka = 2
    while (angka <= n) {
        if (isPrime(angka)) {
            count++
        }
        angka++
    }
    return count-1
}
console.log(findRowPrime(7)); //4
console.log(findRowPrime(229)); //50
console.log(findRowPrime(37)); //12