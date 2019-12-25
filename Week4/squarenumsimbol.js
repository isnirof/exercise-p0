function squareNumber(num) {
    if (num < 3) {
        return `Minimal input adalah 3`
    }
    var hasil = [];
    var count = 1
    for (var i = 0; i < num; i++) {
        kolom = [];
        for (j = 0; j < num; j++) {
            if (i % 2 == 0) {
                if (count % 4 == 0) {
                    kolom.push('#')
                }
                else if (count % 2 == 0) {
                    kolom.push('o')
                }
                else {
                    kolom.push('x')
                }
            }
            else {
                if (count % 4 == 0) {
                    kolom.unshift('#')
                }
                else if (count % 2 == 0) {
                    kolom.unshift('o')
                }
                else {
                    kolom.unshift('x')
                }
            }
            count++
        }
        hasil.push(kolom)
    }
    return hasil
}

console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]
console.log(`------------------------------`)
console.log(squareNumber(4));
// [ [ x, o, x, # ],
//   [ #, x, o, x ],
//   [ x, o, x, # ],
//   [ #, x, o, x ] ]
console.log(`------------------------------`)
console.log(squareNumber(5));
// [ [ x, o, x, #, x ],
//   [ o, x, #, x, o ],
//   [ x, #, x, o, x ],
//   [ #, x, o, x, # ],
//   [ x, o, x, #, o ] ]
console.log(`------------------------------`)
console.log(squareNumber(2)); // Minimal input adalah 3