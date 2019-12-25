/**
 * ===================
 * Every Step You Take
 * ===================
 * 
 * [Description]
 * steps merupakan sebuah function yang menghitung jarak langkah antara titik start 's' dan end 'e'.
 * function menerima sebuah array multidimensional berisikan array of spasi, dan 2 diantaranya adalah s dan e.
 * 
 * [Instruction]
 * Buatlah function steps agar dapat menghitung jumlah langkah minimal yang dapat ditempuh
 * oleh 's' hingga sampai ke 'e'. Range langkah yang dapat diambil tiap turn adalah 1 ke delapan arah
 * (vertikal, horizontal, diagonal).
 * 
 * [Example]
 * @input = [
 *   [' ', ' ', 's'],
 *   [' ', ' ', ' '],
 *   ['e', ' ', ' '],
 * ]
 * karena 's' dapat melangkah diagonal, maka 's' hanya butuh 2 langkah:
 * langkah 1 : [
 *   [' ', ' ', ' '],
 *   [' ', 's', ' '],
 *   ['e', ' ', ' '],
 * ]
 * langkah 2 : [
 *   [' ', ' ', ' '],
 *   [' ', ' ', ' '],
 *   ['s', ' ', ' '],
 * ]
 * maka @output = 2
 * 
 * Rules:
 * 1. tidak boleh menggunakan indexOf, lastIndexOf, includes, some, every, find, findIndex
 * 2. tidak boleh map, forEach, filter, reduce
 */

function steps(arr) {
  // Write your code here
  index=[]
  for(var i=0;i<arr.length;i++) {
      for (var j=0;j<arr[i].length;j++) {
          if(arr[i][j]=='s'||arr[i][j]=='e') {
              index.push([i,j])
          }
      }
  }
  var x=Math.abs(index[0][0]-index[1][0])
  var y=Math.abs(index[0][1]-index[1][1])
  if(x>y) {
      return x
  }
  return y

}

let a1 = [
  [' ', ' ', ' ', ' ', ' ', ' ', 'e', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', 's', ' ', ' ', ' ', ' ', ' ', ' '],
]
console.log(steps(a1)) // 5

let a2 = [
  [' ', ' '],
  [' ', 's'],
  [' ', ' '],
  [' ', ' '],
  [' ', ' '],
  [' ', ' '],
  [' ', ' '],
  [' ', ' '],
  [' ', ' '],
  [' ', ' '],
  [' ', ' '],
  ['e', ' '],
  [' ', ' '],
  [' ', ' '],
]
console.log(steps(a2)) // 10

let a3 = [
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['s', ' ', ' ', ' ', ' ', ' ', ' '],
]
console.log(steps(a3)) // 6