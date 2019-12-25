/**
Multi Dimensional XO
====================
Implementasikan function `multiDimensionalXO` untuk membuat
array `size` x `size`. Array akan diisi dengan huruf 'x' atau huruf 'o'.
# Contoh I/O
- Input: 3
  Output: [ [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ] ]
Pastikan kamu mengisi selang-seling, lihatlah pattern dari output di test case!
# Kondisi khusus
- Jika `size` lebih kecil dari 1, tampilkan 'Invalid input'
*/

function multiDimensionalXO(size) {
    arr = [];
    for (i = 0; i < size; i++) {
        kolom = [];
        for (j = 0; j < size; j++) {
            if ((i + j) % 2 == 0) {
                kolom.push('x')
            }
            else {
                kolom.push('o')
            }
        }
        arr.push(kolom)
    }
    return arr;
}

console.log(multiDimensionalXO(3));