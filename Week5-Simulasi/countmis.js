/**
Count Missing Numbers
-------------------
Implementasikan function `countMissingNumbers` untuk mencari
angka yang hilang dari array `numbers`.
Contoh:
  - Input: [9, 4, 2, 8]
    Output: 4 angka hilang
    karena angka yang tidak ada adalah 3, 5, 6 dan 7
  - Input: [8, 3, 2, 1, 7, 5, 6]
    Output: 1
    karane angka yang tidak ada adalah 4
  - Input: [4, 2, 3, 1]
    Output: tidak ada angka hilang

  Dilarang menggunakan built-in function:
  - max()
  - min()
  - sort()
*/

function countMissingNumbers(numbers) {
    // Write your code here
    if(!numbers.length) {
        return `data tidak bisa diproses`
    }
    var run=true
    while(run) {
        run=false
        for(var i=0;i<numbers.length-1;i++) {
            if(numbers[i+1]<numbers[i]) {
                [numbers[i],numbers[i+1]]=[numbers[i+1],numbers[i]]
                run=true
            }
        }
    }
    var result=[]
    var count=numbers[0]
    var value=true
    while(count<numbers[numbers.length-1]) {
        value=false
        for(var i=0;i<numbers.length;i++) {
            if(numbers[i]==count) {
                value=true
            }
        }
        if(!value) {
            result.push(count)
        }
        count++
    }
    return result

    // var gap=(numbers[numbers.length-1]-numbers[0]+1)-numbers.length
    // if(!gap) return 'tidak ada angka hilang'
    // return `${gap} angka hilang`

}

console.log(countMissingNumbers([1, 5, 10, 7, 6])); // 5 angka hilang
console.log(countMissingNumbers([10, 1])); // 8 angka hilang
console.log(countMissingNumbers([90, 92, 91])); // tidak ada angka hilang
console.log(countMissingNumbers([61, 54, 50])); // 9 angka hilang
console.log(countMissingNumbers([])); // data tidak bisa diproses