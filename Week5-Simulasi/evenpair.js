/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan

- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap

- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62
  Karena ada pasangan genap (30, 32) maka akan dijumlahkan

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

RULES:
 - WAJIB MENGGUNAKAN algoritma/pseudocode, tidak menyertakan algoritma/pseudocode maka codingan dianggap tidak valid
*/
function evenPairSum(str) {
    // Write your code here
    var hasil = []
    for (var i = 0; i < str.length; i++) {
        if (str.length % 2 == 1 && i == str.length - 1) {
            hasil.push(Number(str[str.length - 1] + str[0]))
        }
        if (i % 2 == 0) {
            hasil.push(Number(str[i] + str[i + 1]))
        }
    }
    var sum=0
    for(var i=0;i<hasil.length;i++) {
        if(hasil[i]%2==0) {
            sum+=hasil[i]
        }
    }
    return sum
}
console.log(evenPairSum('2044101211')); // 86
console.log(evenPairSum('33791363')); // 0
console.log(evenPairSum('23426766201')); // 140
console.log(evenPairSum('2478201')); // 134