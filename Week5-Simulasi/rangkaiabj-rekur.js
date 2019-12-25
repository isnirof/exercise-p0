function abjad(num) {
    var abj='abcdefghijklmnopqrstuvwxyz'
    if(num==1) { //karena index abj[0] udh pasti a 
        return 'a'
    }
    return abj[num-1]+'-'+abjad(num-1)+'-'+abj[num-1]
}
console.log(abjad(2))

function angka(num) {
    if(num==1) {
        return 1
    }
    return num+'-'+angka(num-1)+'-'+num
}
console.log(angka(5))

// function num(n) {
//     if(num==0) return 0
//     return n+'-'+num(n-1)+'-'+n
// }
// console.log(num(5))