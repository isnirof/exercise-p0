/*
**************
FASTEST CLIMBER
**************
Fastest climber adalah sebuah function yang menerima sebuah parameter berupa string.
Dimana pada string tersebut, terdapat nama nama pemanjat tebing, dan waktu nya dalam bentuk jam dan menit.
Function dibawah akan mereturn nama pemanjat tebing tercepat.

RULES:
 - DILARANG menggunakan REGEX
 - DILARANG menggunakan muilt in function .reduce(), .map(), .filter()
 - DILARANG menggunakan built in function .indexOf(), dan .include()
 - DILARANG menggunakan built in function .split()

*/
function split(arr, separator1, separator2) {
    var hasil = []
    var temp = ''
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] == separator1 || i == arr.length || arr[i] == separator2) {
            hasil.push(temp)
            temp = ''
        }
        else {
            temp += arr[i]
        }
    }
    return hasil
}

function fastestClimber(string) {
    // Write your code here
    var fastJ = 0
    var fastM = 0
    var namefast = ''
    var nama = split(string, ',')
    // console.log(nama)
    for (var i = 0; i < nama.length; i++) {
        var climber = split(nama[i], ':')
        var waktu = split(climber[1], ' ')
        var jam = Number(waktu[1][0])
        var menit = Number(waktu[2][0] + waktu[2][1])
        if (jam < fastJ || fastJ == 0) {
            fastJ = jam
            namefast = climber[0]
        }
        if (jam == fastJ) {
            if (fastM > menit || fastM == 0) {
                namefast = climber[0]
                fastM = menit
            }
        }
    }
    return namefast
}

console.log(fastestClimber('Kyle: 1jam 30menit,Nein: 2jam 30menit,Light: 0jam 59menit')) // Light
console.log(fastestClimber('Retsu: 1jam 30menit,Tokichi: 2jam 01menit,Go: 1jam 59menit')) // Retsu
console.log(fastestClimber('Awtian: 1jam 01menit,Pipu: 1jam 11menit,Caca: 1jam 59menit')) // Awtian