/**
 * ===========
 * Deret Prima
 * ===========
 * Diberikan sebuah function prime yang menerima satu parameter bertipe number.
 * Output dari function ini adalah mengembalikan deret angka prima dari 0 sampai angka itu sendiri
 * ke dalam sebuah array
 *
 * CONTOH CASE
 * ======
 *
 * input: 10
 * output: [ 2, 3, 5, 7 ]
 * proses:
 *   angka 1 bukan prima
 *   angka 2 adalah prima -> maka masuk ke dalam deret
 *   angka 3 adalah prima -> maka masuk ke dalam deret
 *   angka 4 bukan prima
 *   angka 5 adalah prima -> maka masuk ke dalam deret
 *   angka 6 bukan prima
 *   angka 7 adalah prima -> maka masuk ke dalam deret
 *   angka 8 bukan prima
 *   angka 9 bukan prima
 *   angka 10 bukan prima
 * maka output adalah [ 2, 3, 5, 7 ]
 */
function isPrime(num) {
    if (num == 1) {
        return false
    }
    if (num == 2) {
        return true
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}
function prime(num) {
    // your code here
    var deret = []
    var angka=2
    while(angka<=num) {
        if(isPrime(angka)) {
            deret.push(angka)
        }
        angka++
    }
    return deret
}

console.log(prime(10)); // [ 2, 3, 5, 7 ]
console.log(prime(27)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23]
console.log(prime(30)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
console.log(prime(41)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41 ]