/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'
                    
*/
function sensor(words) {
    var hasil=''
    for(var i=0;i<words.length;i++) {
        hasil+='*'
    }
    return hasil
}
function split(arr,separator) {
    var hasil=[]
    var temp=''
    for(var i=0;i<arr.length+1;i++) {
        if(arr[i]==separator || i==arr.length) {
            hasil.push(temp)
            temp=' '
        }
        else {
            temp+=arr[i]
        }
    }
    return hasil
}
// console.log(sensor('asuuuu'))
function sensorSentence ( sentence, words ) {
    // Write your code here
    var kata=split(sentence,' ')
    // console.log(kata)
    var hasil=''
    for(var i=0;i<kata.length;i++) {
        console.log(sensor(kata[i]))
        if(kata[i]===words) {
            hasil+=sensor(kata[i])
        }
        else {
            hasil+=kata[i]
        }
    }
    return hasil
}


console.log(sensorSentence('Hey you are a murderer', 'murderer')) // Hey you are a ********
console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear
console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it
console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********
console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'
console.log(sensorSentence('', '')) // ''