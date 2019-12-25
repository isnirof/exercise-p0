/**
 * ==========================
 * What is my email provider?
 * ==========================
 *
 * Description
 * -----------
 * Email merupakan sebuah cara untuk kita berinteraksi antar satu dengan yang lainnya secara elektronik,
 * Banyak sekali provider yang menyediakan layanan email ini.
 *
 * Instruction
 * -----------
 * Buatlah sebuah fungsi yang akan mengeluarkan output provider email yang digunakan oleh user.
 *
 * Contoh
 * =======
 * @input => icha@hacktiv8.com
 * @output => Your email provider is hacktiv8 ( tidak menggunakan .com di belakang)
 *
 * Rules
 * =====
 * 1. Wajib menggunakan PESUDOCODE / ALGORITMA atau -50
 * 2. Tidak diperbolehkan menggunakan built-in function:
 *    .map .filter .reduce .split .join .indexOf .findIndex
 *
 */
function split(arr, separator) {
    var hasil = []
    var temp = ''
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] == separator || i == arr.length) {
            hasil.push(temp)
            temp = ''
        }
        else {
            temp += arr[i]
        }
    }
    return hasil
}
function emailProvider(email) {
    // Insert your code here
    var name = split(email, '@')
    var domain = split(name[1], '.')
    console.log(domain)

    return `Your email provider is ${domain[0]}`
}

console.log(emailProvider('yusuf@gmail.com')) // Your email provider is gmail
console.log(emailProvider('icha@hacktiv8.com')) // Your email provider is hacktiv8
console.log(emailProvider('icha@yahoo.co.id')) // Your email provider is yahoo