/*
  SELECT OPTION
  Select Option adalah sebuah fungsi untuk mengambil nilai tengah atau median dari
  array hasil kelipatan dari keynya.
  Fungsi akan menerima parameter berupa array dan key yang ingin dicari.
  EXAMPLE
  INPUT: array = [1, 2, 3, 4, 5, 6, 7], key = 2
  PROCESS: [2, 4, 6] adalah array yang merupakan kelipatan 2
  MEDIAN: 4
  OUTPUT: 4 adalah nilai median dari array di process
  INPUT: array = [1, 2, 3, 4, 5, 6], key = 1
  PROCESS: [1, 2, 3, 4, 5, 6] adalah array yang merupakan kelipatan 1
  MEDIAN: (3 + 4)/2
  OUTPUT: 3.5 adalah nilai tengah dari array di process
  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), Math, dan .unshift()
  2. WAJIB menggunakan PSEUDOCODE
*/
function median(arr) {
    // you can only write your code here!
    var Resultmedian=0
    if (arr.length % 2 == 0) {
        Resultmedian = (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
    }
    else {
        Resultmedian = arr[Math.floor(arr.length / 2)]
    }
    return Resultmedian;
}
function selectOption(arr,key) {
    var hasil=[]
    for(var i=0;i<arr.length;i++) {
        if(arr[i]%key==0) {
            hasil.push(arr[i])
        }
    }
    // return hasil
    if(!hasil.length) {
        return `There's no option`
    }
    return median(hasil)

}
// TEST CASE
console.log(selectOption([1, 2, 3, 4, 5, 6, 7], 2)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 1)) // 3.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 3)) // 4.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 4)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 7)) // There's not option