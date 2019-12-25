/*
======================
Angka Ganjil Terkecil
======================

[INSTRUCTIONS]
ganjilTerkecil adalah sebuah function yang menerima satu parameter berupa string.
function akan mereturn sebuah angka ganjil terkecil dalam array tersebut.
Jika tidak ada angka ganjil dalam array tersebut, maka function akan mereturn angka -1

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
proses: akan mencari angka ganjil terkecil
output: 1

input: [2, 8, 6, 10, 12, 22, 24]
proses: akan mencari angka ganjil terkecil, karena tidak ada bilangan ganjil
output: -1
*/

function ganjilTerkecil(array) {
    // Write your code here
    var min=0
    for(var i=0;i<array.length;i++) {
        if(array[i]%2==1) {
            if(array[i]<min || min==0) {
                min=array[i]
            }
        }
    }
    if(min==0) {
        return -1
    }
    return min
}

console.log(ganjilTerkecil([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 1
console.log(ganjilTerkecil([2, 8, 6, 10, 12, 22, 24])); // -1
console.log(ganjilTerkecil([19, 21, 23, 51, 7, 37])); // 7
console.log(ganjilTerkecil([1])); // 1
console.log(ganjilTerkecil([92, 13, 12, 15, 10, 31, 15, 55, 32, 23, 45])); // 13