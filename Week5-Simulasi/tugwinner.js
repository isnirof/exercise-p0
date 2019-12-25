/*
=================
TUG OF WAR WINNER
=================
Name : Andreas Sosilo
[INSTRUCTIONS]
Tug of War adalah sebuah function yang menerima string sebagai tarik tambang antara 2 belah pihak
Kamu harus bisa menentukan pemenang dari permainan tarik tambang ini dengan cara mengukur kekuatan setiap pemain
Kekuatan pemain ada 3 Level
  - A = 1
  - B = 2
  - C = 3
Sisi dengan kekuatan terbanyak akan menang dan jika kekuatannya sama maka hasilnya akan draw
[CONSTRAINTS]
Tidak ada batasan untuk soal ini.
[EXAMPLE]
tugOfWar('ABCA--V--ABCC')
Skor team kiri: 7
Skor team kanan: 9
output: Team KANAN Menang!
[Tulis PSEUDOCODE di bawah ini]
// Nilai tidak valid (0) jika logic dan PSEUDOCODE berbeda!
// Tidak harus formal pseudocode, tapi paling tidak jelaskan step by step logikanya
*/

function tugOfWar(sentence) {
    // Write your code here
    var split = sentence.split('--')
    console.log(split)
    var poinKanan = 0
    var poinKiri = 0
    for (var i = 0; i < split.length; i++) {
        for (var j = 0; j < split[i].length; j++) {
            if (i == 0) {
                if (split[i][j] == 'A') {
                    poinKiri += 1
                }
                else if (split[i][j] == 'B') {
                    poinKiri += 2
                }
                else if (split[i][j] == 'C') {
                    poinKiri += 3
                }
            }
            if (i == split.length - 1) {
                if (split[i][j] == 'A') {
                    poinKanan += 1
                }
                else if (split[i][j] == 'B') {
                    poinKanan += 2
                }
                else if (split[i][j] == 'C') {
                    poinKanan += 3
                }
            }
        }
    }
    if (poinKanan == poinKiri) {
        return `No players`
    }
    else if (poinKanan > poinKiri) {
        return `Team kanan menang!`
    }
    else {
        return `Team kiri Menang!`
    }
}


// TEST CASES
console.log(tugOfWar('ABCA--V--ABCC')) // "Team KANAN Menang!"
console.log(tugOfWar('CC--V--AAAA')) // "Team Kiri Menang!"
console.log(tugOfWar('BBBB--V--CCC')) // "Team KANAN Menang!"
console.log(tugOfWar('AAAA--V--CA')) // 'DRAW'
console.log(tugOfWar('--V--')) // 'NO PLAYERS'