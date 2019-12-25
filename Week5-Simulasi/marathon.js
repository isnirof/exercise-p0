/*
========
MARATHON
========
[INSTRUCTION]
Kamu mengikuti lomba marathon, dengan rute lintasan tertentu dan stamina tertentu;
[EXAMPLE]
input lintasan: 'XXXXXXOOO-XXOOXXXXXOO-XXXXO'
['XXXX', 'XX', 'OO', O-XXOOXXXXXOO-XXXXO']
[-1,   3]
'X' adalah jalan datar yang akan mengkonsumsi 1 stamina dengan maskimal repetisi 'X' 4 kali  ('XXXX')
'O' adalah jalan menanjak yang akan mengkonsumsi 1 stamina dengan maksimal repetisi 'O' 2 kali ('OO')
'-' adalah spot minum meningkatkan 2 stamina
partisi track:   XXXX XX OO O -  X   X O   O X   X  X  X XOO-XXXXO
stamina      : 5    4  3  2 1 3      2     1           0 (ENERGI HABIS, TIDAK BISA MELANJUTKAN)
jarak lari   :   1234 56 78 9 10 11,12 13,14 15,16,17,18
input stamina: 5
output: Selamat anda telah menempuh jarak 18
[RULES]
- Dilarang menggunakan .split, .join, .map, .sort, .filter, .indexOf, .includes
- WAJIB menggunakan pseudocode
*/

function marathon(track, stamina) {
    // Write your code here
    var jarak = 0;
    var x = 0
    var o = 0

    for (var i = 0; i < track.length; i++) {
        if (track[i] == 'X') {
            // jarak++
            x++
            o = 0
            if (x == 4) {
                x = 0
                stamina--
            }
            else if (i < track.length - 2 && track[i + 1] !== 'X') {
                stamina--
            }
        }
        if (track[i] == 'O') {
            o++
            x = 0
            if (o == 2) {
                o = 0
                stamina--
            }
            else if (i < track.length - 2 && track[i + 1] !== 'O') {
                stamina--
            }
        }
        if (track[i] == '-') {
            stamina += 2
            x = 0
            o = 0
        }
        jarak++
        if (stamina == 0) {
            return `Selamat anda telah menempuh jarak ${jarak}`
        }
    }
    return `Selamat anda telah menempuh finish`
}

console.log(marathon("XXXXXXOOO-XXOOXXXXXOO-XXXXO", 5)); // Selamat anda telah menempuh jarak 18 km
console.log(marathon("XXXXXXOOOXXOOXXXXXOOXXXXO", 5)); // Selamat anda telah menempuh jarak 11 km
console.log(marathon("XXXXXXXX", 3)); // Selamat anda telah menempuh garis finish