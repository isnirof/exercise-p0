/*
=======================
INVENTARIS KERAN MASJID
=======================
[INSTRUCTION]
Terdapat function inventarisKeran yang menerima 1 parameter berupa string ,
string input menggambar kondisi keran masjid
keran yang berjalan dengan baik dilambangkan dengan symbol ^,
keran yang rusak dilambangkan dengan ?,
symbol X melambangkan dinding pemisah keran wudhu
[EXAMPLES]
input: 'XX^XX^XX^XX?XX^XX'
output :
'terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)'
input: 'XX?XX?XX^XX'
output:
'terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)'
input : 'XX^XX^XX'
output :
'Semua keran berjalan dengan baik'
input : 'XX?XX?XX'
output :
'Semua keran rusak'
[RULES]
- WAJIB MENGGUNAKAN PSEUDOCODE !
- dilarang menggunakan splice, slice, split, substring, substr
// YOUR PSEUDOCODE/ALGORITHM HERE
*/

function inventarisKeran(str) {
  // Write your code here
  var jalan=[]
  var rusak=[]
  var count=0
  for(var i=0;i<str.length;i++) {
      if(str[i]=='^') {
          count++
          jalan.push(count)
      }
      else if(str[i]=='?') {
          count++
          rusak.push(count)
      }
  }
  if(jalan.length==0) {
      return `Semua keran rusak`
  }
  if(rusak.length==0) {
      return `Semua keran berjalan dengan baik`
  }
  return `terdapat ${jalan.length} keran yg berjalan nomor (${jalan}), dan ${rusak.length} keran rusak nomor (${rusak})`
}

console.log(inventarisKeran("XX^XX^XX^XX?XX^XX"));
// terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)
console.log(inventarisKeran("XX?XX?XX^XX"));
// terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)
console.log(inventarisKeran("XX^XX^XX"));
// Semua keran berjalan dengan baik
console.log(inventarisKeran("XX?XX?XX"));
// Semua keran rusak