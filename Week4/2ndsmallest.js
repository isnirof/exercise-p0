/*
  ////////////////////////////////////
  FUNCTION SECOND SMALLEST NUMBER EXTRA
  ////////////////////////////////////

  Fungsi Second Largest Number Extra akan mengembalikkan nilai terkecil kedua.

  [PROCESS]

  INPUT:
  [
    [
      [1, 2, 3],
      [1, 2, 3]
    ],
    [
      [1, 2, 3],
      [1, 2],
      [1]
    ]
  ]
  OUTPUT:
  2

  [RULES]
  - Apabila tidak ada nilai output yang di kembalikan, maka kembalikan 'No Number'
*/

function secondSmallestNumberExtra(array) {
    // code below here
    var result={};
    for(var i=0;i<array.length;i++) {
        for(var j=0;j<array[i].length;j++) {
            for(var k=0;k<array[i][j].length;k++) {
                if(!result[array[i][j][k]]) {
                    result[array[i][j][k]]=1
                }
                else {
                    result[array[i][j][k]]++
                }
            }
        }
    }

    if(Object.keys(result).length==1 || !array.length) {
        return `No number`
    }
    // return result[1]
    return Object.keys(result)[Object.keys(result).length-1]
}

//TEST CASE
console.log(secondSmallestNumberExtra([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 2

console.log(secondSmallestNumberExtra([
  [
    [1, 1],
    [1],
    [1, 1]
  ],
  [
    [1],
    [1],
    [1, 1]
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
    [1]
  ],
  [
    [1]
  ]
])); 
// No number

// console.log(secondSmallestNumberExtra([])); // No number