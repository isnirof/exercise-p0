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

function arrayRemover(arr,index,count) {
    hasil=[];

    for(var i=0;i<arr.length;i++) {
        value=false;
        if(i>=index && i<count) {
            value=true;
        }
        if(!value) {
            hasil.push(arr[i])
        }
    }
    return hasil;
}



console.log(arrayRemover([1, 2, 3], 0, 2)); // [3]
console.log(arrayRemover([666, 666, 333, 10, 5, 6], 1, 2)); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([1, 2, 3], 0, 3)) // []