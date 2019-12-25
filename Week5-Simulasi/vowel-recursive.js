/**
  Vowels Counter Recursive

  Diberikan sebuah function consonantCounterRecursive(sentences) yang menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.

- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX

*/

function consonantCounterRecursive(sentences) {
    // your code here
    var lowercase = sentences.toLowerCase()
    var count = 0
    var notCons = 'aiueo1234567890'

    if (sentences.length == 0){
        return 0
    }

    var value=false
    for (var i = 0; i < notCons.length; i++) {
        if (lowercase[0] == notCons[i] || lowercase[0]==' ') {
            value=true
        }
    }
    if(!value) {
        count++
    }
    // console.log(sentences.slice(1))
    return count + consonantCounterRecursive(sentences.slice(1))
}

// console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
// console.log(consonantCounterRecursive('AziZy')) // 3
// console.log(consonantCounterRecursive('awt6an')) // 3


function consonantCounterRecursive2(sentences) {
    // Write your code here
    if(!sentences.length) {
        return 0
    }
    var vocnum='aiueo0123456789'
    for(var i=0;i<vocnum.length;i++) {
        if(vocnum[i]==sentences[0].toLowerCase()) {
            return consonantCounterRecursive2(sentences.slice(1))
        }
    }
    return 1+consonantCounterRecursive2(sentences.slice(1))
}

console.log(consonantCounterRecursive2('alDi Suka MakAn baksO')) //13
console.log(consonantCounterRecursive2('AziZy')) // 3
console.log(consonantCounterRecursive2('awt6an')) // 3