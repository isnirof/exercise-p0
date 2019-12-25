/**
 * ============
 * Hitung Prima
 * ============
 * 
 * [Instruction]
 * Buatlah sebuah function untuk menghitung ada berapa angka prima dari angka 0 sampai @num
 * dimana @num adalah angka input yang diberikan sebagai parameter untuk function hitungPrima kita
 * 
 * [Rules]
 * 1. `Wajib menggunakan rekursif`
 * 2. Dilarang menambah dan merubah tipe data parameter
 * 3. Dilarang membuat function lain selain hitungPrima
 * 4. Hanya diperbolehkan `menggunakan 1 loop`
 */
function hitungPrima(num) {
    // Write your code here
    if(num<2) return []

    value=true
    for (var i = 2; i < num; i++) {
        if(num%i==0) {
            value=false
        }
    }
    if(value) {
        return [num].concat(hitungPrima(num-1))
    }
    else {
        return hitungPrima(num-1)
    }
}
console.log(hitungPrima(1)) // 0
console.log(hitungPrima(2)) // 1 (karena 2 adalah prima)
console.log(hitungPrima(10)) // 4 (karena 2,3,5,7 adalah prima)
console.log(hitungPrima(20)) // 8 (karena 2,3,5,7,11,13,17,19 adalah prima)


function isPrime(num) {
    //TODO
    if(num<=1) return false
  
    for(var i=2;i<num;i++) if(num%i==0) return false
    return true
  }