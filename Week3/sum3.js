/**

  Diberikan sebuah function sumThree dimana function ini menerima input parameter berupa
  array multidimensi.
  Function ini akan mengembalikan nilai yang menambahkan angka yang memiliki 3 digit.

  RULES:
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
  - DILARANG MENGGUNAKAN built in function .map, .filter, .reduce
  - DILARANG MENGGUNAKAN REGEX

  **/

function sumThree(arr) {
    sum=0;
    for(i=0;i<arr.length;i++) {
        for(j=0;j<arr[i].length;j++) {
            if( typeof(arr[i][j])=='number' && String(arr[i][j]).length==3) {
                sum+=arr[i][j];
            }
        }
    }
    return sum;
}


console.log(sumThree([ ['a', 12, 'c', 342 ], ['fox', 4000, 201,true ] ])); //543