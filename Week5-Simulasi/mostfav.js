/*
========================================
Array Mastery: The Most Favorite Actor
========================================

Function mostFavoriteActor adalah function yang menerima satu parameter berupa array of string.
Function akan menghitung setiap jumlah value di dalam array tersebut.

Function akan mereturn nilai berupa string dengan pola:
=> actor(jumlahVoting), actor(jumlahVoting), actor(jumlahVoting).
Kemudian, setiap actor yang ditampilkan harus berurut dari jumlah voting terbesar ke terkecil
[CONTOH]
input: ['Lee Min Ho', 'Lee Min Ho', 'Lee Kwang Soo', 'Lee Min Ho', 'Lee Kwang Soo', 'Rain', 'Lee Minho']));
output: 'Lee Min Ho(3), Lee Kwang So(2) , Rain(1)'
=
RULES:
 - DILARANG menggunakan function ES6 SET
 - DILARANG menggunakan built in function .map, .filter dan .reduce
*/

function mostFavoriteActor(arr) {
    // Code hanya disini
    var result = []
    var value = true
    for (var i = 0; i < arr.length; i++) {
        value = false
        for (var j = 0; j < result.length; j++) {
            if (result[j][0] == arr[i]) {
                result[j][1]++
                value = true
            }
        }
        if (!value) {
            result.push([arr[i], 1])
        }
    }
    var run = true
    while (run) {
        run = false
        for(var i=0;i<result.length-1;i++) {
            if(result[i+1][1]>result[i][1]) {
                [result[i+1],result[i]]=[result[i],result[i+1]]
                run=true
            }
        }
    }
    var hasil=''
    for(var i=0;i<result.length;i++) {
        hasil+=`${result[i][0]} (${result[i][1]}) `
    }
    
    return hasil



    // return result
    // for(var i=0;i<arr.length;i++) {
    //     if(!result[arr[i]]) {
    //         result[arr[i]]=1
    //     }
    //     else {
    //         result[arr[i]]++
    //     }
    // }
    // var run=true
    // while(run) {
    //     run=false 
    //     for()
    // }

    // return result
}

console.log(mostFavoriteActor(['Lee Min Ho', 'Lee Min Ho', 'Lee Kwang Soo', 'Lee Min Ho', 'Lee Kwang Soo', 'Rain', 'Lee Min Ho']));
//'Lee Min Ho(3), Lee Kwang So(2) , Rain(1)'

console.log(mostFavoriteActor(['Cha Tae Hyun', 'Ha Jung Wo', 'Cha Tae Hyun', 'Ju Ji Hoon']));
// 'Cha Tae Hyun(2), Ha Jung Wo(1), Ju Ji Hoon(1)'