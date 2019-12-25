/**
Virus Check
-----------
Implementasikan function `virusCheck` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `viruses` yang dicari.

Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  viruses: 'x|0|q' ==> berarti mencari x, 0 dan q

output: 4 viruses detected

Contoh 2:
input:
  str: 'HH0NBP1zRa'
  viruses: 'h|r' ==> berarti mencari h dan r

outuput: 3 viruses detected


RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX

 PSEUDOCODE :

 STORE "countVirus" with the value of 0

  FOR LOOP index 0 to length of str
    FOR LOOP index 0 to length of viruses
*/

function virusCheck(str, viruses) {
    // Write your code here
    // if(!viruses || !str.length) {
    //     return "no virus detected"
    // }
    // var count=0
    // for(var i=0;i<str.length;i++) {
    //     for(var j=0;j<viruses.length;j++) {
    //         var virus=viruses[j].split('|')
    //         // console.log(virus)
    //         if(str[i].toLowerCase()==virus[0].toLowerCase()) {
    //             count++
    //         }
    //     }
    // }
    // if(count==0) {
    //     return `no viruse detected`
    // }
    // return count
}

// console.log(virusCheck('qlD4MZax0raQqew', 'x|0|q')); // 4 viruses detected
// console.log(virusCheck('HH0NBP1zRa', 'h|r')); // 3 viruses detected
// console.log(virusCheck('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6 viruses detected
// console.log(virusCheck('mjBgPlzks', 'm')); // 1 virus detected
// console.log(virusCheck('AIn4Ks05bBaa', 'x')); // No virus detected
// console.log(virusCheck('RsMFjBUjvIaP')); // No virus detected
// console.log(virusCheck('')); // No virus detected

function virusCheckRecursive (str, viruses) {
    // your code here
    if (viruses == undefined) return "There is no virus"
    if(str.length==0) return 0
    var count=0
    var value=false
    for(var i=0;i<viruses.length;i++) {
        if(str[0].toLowerCase()==viruses[i].toLowerCase()) {
            count+=1+virusCheckRecursive(str.slice(1),viruses)
            value=true
        }
    }
    if(!value) {
        count+=virusCheckRecursive(str.slice(1),viruses)
    }
    return count
}

console.log(virusCheckRecursive('qlD4MZax0raQqew', 'x|0|q')); // 5
console.log(virusCheckRecursive('HH0NBP1zRa', 'h|r')); // 3
console.log(virusCheckRecursive('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6
console.log(virusCheckRecursive('mjBgPlzks', 'm')); // 1
console.log(virusCheckRecursive('AIn4Ks05bBaa', 'x')); // 0
console.log(virusCheckRecursive('RsMFjBUjvIaP')); // There is no virus
console.log(virusCheckRecursive('')); // There is no virus