/*

================
Initial Grouping
================

Name : _________________

[INSTRUCTION]

Disediakan sebuah function initialGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
array dua dimensi.


[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke dalam array baru
Susun array baru sebagai berikut:
[
[ 'Budi', 'Badu' ],
[ 'Joni', 'Jono' ],
]

Setiap array dimensi kedua diawali dengan huruf depan yang mengelompokkan nama tersebut menjadi:

[
[ 'B', 'Budi', 'Badu' ],
[ 'J', 'Joni', 'Jono' ],
]

Kamu tidak perlu peduli dengan urutan alphabet atau nama siapa yang keluar terlebih dahulu!

[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!


function initialGrouping(studentsArr) {
    // Write your code here
    var hasil = []
    for (var i = 0; i < studentsArr.length; i++) {
        var value = false
        for (var j = 0; j < hasil.length; j++) {
            if (hasil[j][0][0] == studentsArr[i][0]) {
                hasil[j].push(studentsArr[i])
                value = true
            }
        }
        if (!value) {
            hasil.push([studentsArr[i][0], studentsArr[i]])
        }
    }
    return hasil
}

// console.log(initialGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
/*.
[
  [ 'B', 'Budi', 'Badu' ],
  [ 'J', 'Joni', 'Jono' ]
]
*/

// console.log(initialGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'M', 'Mickey' ],
  [ 'Y', 'Yusuf' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ],
  [ 'G', 'Gong' ]
]
*/

// console.log(initialGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'R', 'Rock', 'Rocker' ],
  [ 'S', 'Stone', 'Sticker' ],
  [ 'B', 'Brick' ]
]
*/

// console.log(initialGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
/*.
[
  [ 'B', 'Budi', 'Badu' ],
  [ 'J', 'Joni', 'Jono' ]
]
*/

// console.log(initialGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'M', 'Mickey' ],
  [ 'Y', 'Yusuf' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ],
  [ 'G', 'Gong' ]
]
*/

// console.log(initialGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'R', 'Rock', 'Rocker' ],
  [ 'S', 'Stone', 'Sticker' ],
  [ 'B', 'Brick' ]
]
*/
function initialGroupingDescending(studentsArr) {
  // Write your code here
  var run=true
  while(run) {
    run=false
    for(var i=0;i<studentsArr.length-1;i++) {
      if(studentsArr[i][0]<studentsArr[i+1][0]) {
        [studentsArr[i],studentsArr[i+1]]=[studentsArr[i+1],studentsArr[i]]
        run=true
      }
    }
  }
  return initialGrouping(studentsArr)
}

console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/