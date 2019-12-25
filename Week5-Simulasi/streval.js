/**
 * ================
 * String Evaluator
 * ================
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function untuk menghitung kalkulasi dari input yang bentuknya berupa string
 * Operator yang digunakan adalah + - * /
 * 
 * Rules
 * -----
 * 1. WAJIB dilakukan dengan rekursif
 * 2. dilarang menggunakan built-in function eval
 * 3. Dilarang menambah dan merubah tipe data parameter
 * 4. Dilarang membuat function lain selain evaluate
 */

function evaluate(str) {
    // Write your code here
    var num = ''
    var pos=0
    var value = true
    for (i = 0; i < str.length; i++) {
        if (!isNaN(str[i] || str[i]=='.')) {
            num += str[i]
            pos++
        }
        else {
            value = false
            break
        }
    }
    if(value) {
        return Number(num)
    }

    switch (str[pos]) {
        case '+':
            return Number(num) + evaluate(str.slice(pos + 1))
        case '-':
            return Number(num) - evaluate(str.slice(pos + 1))
        case '*':
            return Number(num) * evaluate(str.slice(pos + 1))
        case '/':
            return Number(num) / evaluate(str.slice(pos + 1))
    }
}

console.log(evaluate('1+2+3+4+5')) // 15
console.log(evaluate('1*2*3*4*5')) // 120
console.log(evaluate('20/4')) // 5
console.log(evaluate('20-6')) // 14
console.log(evaluate('2.5*2'))