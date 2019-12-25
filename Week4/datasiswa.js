// "use strict"
/*
============
dataSiswa
============
[INSTRUCTIONS]
dataSiswa adalah sebuah fungsi yang menerima parameter berupa string.
String tersebut memiliki format `studentID-nama-nilai`.
Function akan membaca data siswa dari input dan mengubahnya menjadi array of objects.
[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan hasil tes hari ini"
[RULES]
1. Dilarang menggunakan built-in split
*/
function split(arr, separator) {
    var hasil = [];
    var temp = '';
    for (var i = 0; i < arr.length + 1; i++) {
        if (arr[i] == separator || i == arr.length) {
            hasil.push(temp)
            temp = '';
        }
        else {
            temp += arr[i];
        }
    }
    return hasil;
}

function dataSiswa(scoreRecord) {
    if(!scoreRecord.length) {
        return `Tidak ada catatan hasil tes hariini`
    }
    var hasil = split(scoreRecord, ",")
    var data = []                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    for (var i = 0; i < hasil.length; i++) {
        var temp = split(hasil[i], '-');
        // console.log(temp)
        data.push({
            id: temp[0],
            name: temp[1],
            score: temp[2]
        })
    }
    return data;
}

console.log(dataSiswa("001-Radith-88,002-Putra-100,003-Levy-83"))
    /*
[
  { id: '001', name: 'Radith', score: 88 },
  { id: '002', name: 'Putra', score: 100 },
  { id: '003', name: 'Levy', score: 83 }
]
 */

    // console.log(dataSiswa("001-Radith-5,002-Putra-92,003-Levy-100"))
    // /* 
    // [
    //   { id: '001', name: 'Radith', score: 5 },
    //   { id: '002', name: 'Putra', score: 92 },
    //   { id: '003', name: 'Levy', score: 100 }
    // ]
    //  */

    // console.log(dataSiswa("001-Radith-88,002-Putra-70,003-Levy-65,004-Radinka-88,005-Bagas-90"))
    // /* 
    // [
    //   { id: '001', name: 'Radith', score: 88 },
    //   { id: '002', name: 'Putra', score: 70 },
    //   { id: '003', name: 'Levy', score: 65 },
    //   { id: '004', name: 'Radinka', score: 88 },
    //   { id: '005', name: 'Bagas', score: 90 }
    // ]
    //  */

    console.log(dataSiswa("")) // tidak ada catatan hasil tes hari ini