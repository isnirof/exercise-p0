/* 
  Buatlah sebuah function yang mencari diagonal kiri dan diagonal kanan pada board tersebut
  contoh : [
    [a, b, c],
    [d, e, f],
    [g, h, i]
  ]
  -> diagonal kiri nya adalah "a", "e", "i"
  -> diagonal kanan nya adalah "c", "e", "g"
  maka output dari function ini adalah array multidimensi,
  yang menampung diagonal kiri dan kanan nya
  output: [[ 'a', 'e', 'i' ], [ 'c', 'e', 'g' ] ]
*/
function main (board) {
  // your code here
  hasil=[[],[]];
  //diagonal kiri
  for(i=0;i<board.length;i++) {
    hasil[0].push(board[i][i])
  }

  //diagonal kanan
  for(i=0;i<board.length;i++) {
        hasil[1].push(board[i][board.length-1-i]);
  }
  return hasil;
}
var board1 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
]
console.log(main(board1))
//[ [ 'c', 'e', 'g' ], [ 'a', 'e', 'i' ] ]

var board2 = [
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"],
]

console.log(main(board2))
// [ [ 'd', 'g', 'j', 'm' ], [ 'a', 'f', 'k', 'p' ] ]
var board3 = [
  ["a", "b"],
  ["c", "d"]
]
console.log(main(board3))
// [ [ 'b', 'c' ], [ 'a', 'd' ] ]