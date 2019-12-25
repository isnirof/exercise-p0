/*
=================
Challenge Winner
=================

[INSTRUCTION]
Ada dua player yang sedang lomba mengerjakan soal-soal, dengan ketentuan
player yang memiliki poin yang tertinggi adalah pemenangnya. Input berupa dua
array, masing-masing mewakili nilai player, bila salah satu player memiliki
nilai yang lebih tinggi maka ia mendapatkan poin, poin yang didapatkan
ditentukan oleh urutan array (index ke 0 adalah urutan ke-1), bila genap maka
mendapatkan 2 poin, bila ganjil mendapatkan 1 poin, dan bila seri masing-masing
player mendapatkan 1 poin.

[EXAMPLE]
Bila input array adalah [1, 2, 0] dan [9, 2, 1], maka:
~ di soal pertama, player 1 menang 1 poin dan player 2 kalah tetap 0 point
~ di soal kedua, player 1 kalah tetap 1 poin dan player 2 menang menjadi 2 poin
~ di soal ketiga, player 1 kalah tetap 1 poin dan player 2 menang menjadi 3 poin

maka hasilnya adalah:
"Player 1 mendapatkan nilai 1 poin dan player 2 mendapatkan nilai 3 poin,
pemenangnya adalah player 2 dengan nilai 3 poin".

- Bila seri maka hasilnya adalah:
"Score seri dengan nilai masing-masing player adalah <nilai>"

- Bila panjang array tidak sama maka hasilnya adalah:
"Input tidak valid, panjang array harus sama"

[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), sort(), shift(), unshift()
2. dilarang menggunakan regex
*/


function winner(player1, player2) {
    // tulis code disini
    var a = 0
    var b = 0

    if (player1.length !== player2.length) {
        return `array harus sama`
    }
    for (var i = 0; i < player1.length; i++) {
        if (i % 2 == 0) {
            if (player1[i] > player2[i]) {
                a++
            }
            else if (player1[i] < player2[i]) {
                b++
            }
            else {
                a++
                b++
            }
        }
        else {
            if (player1[i] > player2[i]) {
                a+=2
            }
            else if (player1[i] < player2[i]) {
                b+=2
            }
            else {
                a++
                b++
            }
        }
    }
    if(a>b) {
        return `pemenangnya adalah player 1 dengan nilai ${a} poin`
    }
    else if(b>a) {
        return `pemenangnya adalah player 2 dengan nilai ${b} poin`
    }
    else {
        return `Score seri dengan nilai masing2 adalah ${a}`
    }
}

console.log(winner([1, 2, 0], [9, 2, 1]));
// pemenangnya adalah player 2 dengan nilai 3 poin

console.log(winner([1, 2, 0, 4, 7, 8, 9], [9, 2, 1, 3, 1, 8, 2]));
// pemenangnya adalah player 1 dengan nilai 6 poin

console.log(winner([6, 7, 8, 12, 3], [3, 12, 8, 7, 6]));
// Score seri dengan nilai masing-masing player adalah 4

console.log(winner([8, 8, 2, 12], [4, 11, 1]));
// Input tidak valid, panjang array harus sama