/**
 * =============
 * Students List
 * =============
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function yang mengelompokkan student berdasarkan phase yang sedang berjalan.
 * 
 * Resctrictions
 * -------------
 * 1. Input berupa array of strings yang berisi nama dan phase dan dipisah dengan strip '-'
 *    Ex: 'yusuf-0'
 * 2. Output merupakan sebuah array yang berisi key berupa masing-masing phase dari 0-3
 * 3. Setiap key menyimpan array of names sesuai dengan input yang diberikan,
 *    Jika ada phase yang kosong (tidak ada student) maka key tersebut menyimpan array kosong []
 * 4. Jika phase kosong, maka hanya mengembalikan object kosong {}
 * 
 * Rules
 * -----
 * 1. Dilarang menggunakan built-in function split, slice, splice, includes, find, findIndex, indexOf
 * 2. Pastikan urutan key sesuai dengan expected output
 */
function split(arr,separator) {
    result=[];
    temp=''
    for(var i=0; i<=arr.length;i++) {
        if(arr[i]==separator || i==arr.length) {
            result.push(temp)
            temp=''
        }
        else {
            temp+=arr[i]
        }
    }
    return result
}
function getStudents(arr) {
  // Write your code here
  if(!arr.length) {
      return {}
  }
  
  var result={
      "phase 0":[],
      "phase 1":[],
      "phase 2":[],
      "phase 3":[]
  }
  for(var i=0;i<arr.length;i++) {
      var arr2=split(arr[i],'-')
    //   console.log(arr2)

      for(phase in result) {
          if(phase[6]==arr2[1]) {
              result[phase].push(arr2[0])
          }
      }
    }
    return result

}

console.log(getStudents(['okka-0', 'maulid-1', 'riko-2', 'bayu-3']))
// {
//   'phase 0': [ 'okka' ],
//   'phase 1': [ 'maulid' ],
//   'phase 2': [ 'riko' ],
//   'phase 3': [ 'bayu' ]
// }

console.log(getStudents([]))
// {}

console.log(getStudents(['serafim-1', 'amalya-0', 'fadhilah-1', 'reka-3', 'vika-2']))
// {
//   'phase 0': [ 'amalya' ],
//   'phase 1': [ 'serafim', 'fadhilah' ],
//   'phase 2': [ 'vika' ],
//   'phase 3': [ 'reka' ]
// }

console.log(getStudents(['yusuf-0', 'fiqi-3', 'adiel-1']))
// {
//   'phase 0': [ 'yusuf' ],
//   'phase 1': [ 'adiel' ],
//   'phase 2': [],
//   'phase 3': [ 'fiqi' ]
// }