/*
Count solo
===========
Diberikan sebuah function countSolo, dimana function ini akan menerima parameter sebagai array
dan akan mereturn total jumlah dari angka angka yang TIDAK memiliki pasangan.

Example:
input: [ 5, 5, 6, 6, 3, 1, 2, 7, 7 ]
proses: 3 + 1 + 2
result: 6

RULES:
 - TIDAK BOLEH MENGGUNAKAN built in function .map, .filter, .reduce!
 - TIDAK BOLEH MENGGUNAKAN built in function .indexOf dan .include!

*/

function countSolo(numbers) {
    // Write your code here
    var hasil={}
    for(var i=0;i<numbers.length;i++) {
        if(!hasil[numbers[i]]) {
            hasil[numbers[i]]=1
        }
        else {
            hasil[numbers[i]]++
        }
    }
    var unik=[]
    var sum=0
    for(num in hasil) {
        if(hasil[num]%2==1) {
            unik.push(num)
            sum+=Number(num)
        }
    }
    return `${sum} (${unik})`
}
   
console.log(countSolo([ 5, 5, 6, 6, 3, 1, 2, 7, 7])) // 6 (3,1,2)
console.log(countSolo([ 3, 6, 3, 6, 1, 1, 2, 1 ]))  // 2 (2)
console.log(countSolo([ 3, 3, 3, 3, 4, 5, 8, 10, 11 ])) // 38 ()