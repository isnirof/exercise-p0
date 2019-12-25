/*
Array Remover
Array remover merupakan sebuah function yang berfungsi untuk menghapus value
dari sebuah array yang diberikan berdasarkan jumlah yang ingin dihapus dan index
mulai.
Array remover menerima tiga parameter yaitu array of number, index untuk mulai
menghapus dan jumlah data yang akan dihapus
Contoh:
Input:
  array: [ 666, 666, 333, 10, 5, 6]
  index: 1
  count: 2
Output:
  [ 666, 10, 5, 6 ]
RULES:
  - WAJIB MENYERTAKAN ALGORITMA / PSEUDOCODE
  - Dilarang menggunakan built-in function .map, .filter, .reduce!
*/

function arrayRemover (arr,index,count) {
    arr.splice(index,count);
    return arr;
}

var  array= [ 666, 666, 333, 10, 5, 6];
var  index= 1;
var  count= 2;

console.log(arrayRemover (array,index,count));
