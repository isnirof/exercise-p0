/*
  ///////////
  diagonAlley
  ///////////
  Function diagonAlley adalah sebuah function yang membentuk tulisan dalam bentuk diagonal dan
  membentuk bingkai kotak seperti pada test cases. function ini akan menerima parameter string, dan
  function ini berfungsi hanya untuk menampilkan.
  [EXAMPLE]
  INPUT: non
  OUTPUT:
    n-|
    |o|
    |-n
  NOTES:
    - word membentuk diagonal
    - tepi bingkai horizontal disambung dengan -
    - tepi bingkai vertical disambung dengan |
  [RULES]
  1. Ukuran bingkai sesuai dengan panjang karakter yang diberikan.
  2. Minimal panjang karakter yang diinput adalah 3
*/

function diagonAlley(word) {
    // Minimum input character is 3
    if (word.length < 3) return console.log(`Invalid input`)

    for (var i = 0; i < word.length; i++) {
        kolom = ''
        for (var j = 0; j < word.length; j++) {
            if (i == j) {
                kolom += word[j]
            }
            else if (i == 0 || i == word.length - 1) {
                kolom += '-'
            }
            else if (j == 0 || j == word.length - 1) {
                kolom += '|'
            }
            else {
                kolom += ' '
            }
        }
        console.log(kolom)
    }

}

// TEST CASES

diagonAlley('kuroko')
/*
  k----|
  |u   |
  | r  |
  |  o |
  |   k|
  |----o
*/
console.log('')
diagonAlley('non')
/*
  n-|
  |o|
  |-n
*/
console.log('')
diagonAlley('basuke')
/*
  b----|
  |a   |
  | s  |
  |  u |
  |   k|
  |----e
*/
console.log('')
diagonAlley('no')
// Invalid input