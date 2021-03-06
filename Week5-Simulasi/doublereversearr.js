/*
=====================
DOUBLE REVERSE ARRAY
=====================
[INSTRUCTION]
Terdapat function doubleReverse yang menerima parameter berupa array of string,
function ini akan memutar elemen array, string yang berada di dalam elemen array juga akan dibalik atau diputar jika panjang string GENAP
[EXAMPLE]
input: ['rabu', 'cinta', 'benci', 'masuk', 'nikmat']
proses: memutar isi array, dan memutar elemen array yang panjang katanya genap
output: [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
[RULES]
- Function bawaan javascript yang boleh digunakan hanyalah .push dan .length
- DILARANG menggunakan .reverse()
*/

function doubleReverse(arr) {
    // Write your code here
    var result=[]

    for(var i=arr.length-1;i>=0;i--) {
        // kolom=[]
        var temp=''
        for(var j=arr[i].length-1;j>=0;j--) {
            temp+=arr[i][j]
        }
        result.push(temp)
    }
    return result

}

console.log(doubleReverse(['rabu', 'cinta', 'benci', 'masuk', 'nikmat']))
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
console.log(doubleReverse(['aku', 'sayang', 'kamu']))
// [ 'umak', 'gnayas', 'aku' ]
console.log(doubleReverse(['pelakor', 'perusak', 'rumah', 'tangga']))
// [ 'anggnat', 'rumah', 'perusak', 'pelakor' ]
console.log(doubleReverse([]))
// invalid input parameter