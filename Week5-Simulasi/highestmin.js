/*
======================
Highest Global Minimum
======================

Name :_____________

[INSTRUCTIONS]

highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.


[CONSTRAINTS]
Hanya boleh menggunakan sintaks for/while dan if else untuk pemecahan masalah.
Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.


[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])

firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]

nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8

karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.
*/
function Sort(arr) {
    var run=true
    while(run) {
        run=false
        for (var i=0;i<arr.length-1;i++) {
            if(arr[i+1]<arr[i]) {
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                run=true
            }
        }
    }
    return arr
}
function Min(arr) {
    var min=0
    for(var i=0;i<arr.length;i++) {
        if(arr[i]<min ||min==0) {
            min=arr[i]
        }
    }
    return min
}
function highestGlobalMinimum(firstArr, secondArr) {
    // Write your code here
    var sort1=Min(firstArr)
    var sort2=Min(secondArr)
    if(sort1>sort2) {
        return sort1
    }
    else {
        return sort2
    }

}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5