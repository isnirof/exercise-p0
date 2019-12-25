/**
 * ****************
 * Advanced Seating
 * ****************
 * 
 * [Description]
 * trainSeating adalah sebuah function yang 
 * menerima parameter berupa array of object. 
 * Array of Object ini merepresentasikan penumpang 
 * yang naik ke dalam kereta.
 * Tiap-tiap penumpang/object memiliki 
 * stasiun awal dan stasiun tujuan mereka,
 * serta tempat duduk mereka.
 * 
 * Ada lima stasiun: A B C D dan E
 * 
 * [Instuction]
 * Function ini harus mengeluarkan hasil sebuah object 
 * yang memiliki isi key berdasarkan row tempat duduk
 * penumpang (misalkan seat B5: row B, column 5)
 * Dan tiap-tiap key memiliki value array yang 
 * berisi object penumpang yang masuk dalam 
 * kelompok tersebut berdasarkan row tempat duduk mereka.
 * Hitung juga jumlah stasiun yang mereka lewati.
 * 
 * [Example]
 * Misalkan ada 2 penumpang:
 * 
 * Penumpang 1:
 * nama: Budi
 * awal: B
 * akhir: D
 * seat: C9
 * 
 * Penumpang 2:
 * nama: Bani
 * awal: A
 * akhir: E
 * seat: R7
 * 
 * Budi duduk di C9 => maka Budi masuk kelompok C
 * Bani duduk di R7 => maka Bani masuk kelompok R
 * 
 * CONTOH OUTPUT:
 * {
 *  C: [{nama: 'Budi', col: 9, jarak:2}],
 *  R: [{nama: 'Bani', col: 7, jarak:4}]
 * }
 * Note: Lihat juga contoh test-case untuk case-case yang lain.
 * 
 * [RULES]
 * 1. Dilarang menggunakan built-in function lain selain .push dan .unshift
 */

function trainSeating(penumpang) {
    var destinations = ['A', 'B', 'C', 'D', 'E'];
    // Write your code here
    var result={}
    if(!penumpang.length) {
        return `Invalid input`
    }
    for(var i=0;i<penumpang.length;i++) {
        for(var j=0;j<destinations.length;j++) {
            if(penumpang[i].awal==destinations[j]) {
                awal=j
            }
            if(penumpang[i].akhir==destinations[j]) {
                akhir=j
            }
        }
        if(!result[penumpang[i].seat[0]]) {
            result[penumpang[i].seat[0]]=[{
                nama:penumpang[i].nama,
                kolom:penumpang[i].seat[1],
                jarak: Math.abs(awal-akhir)
            }]
        }
        else {
            result[penumpang[i].seat[0]].push({
                nama:penumpang[i].nama,
                kolom:penumpang[i].seat[1],
                jarak: Math.abs(awal-akhir)
            })
        }
    }
    return result
    
}

//Test Cases
console.log(
  trainSeating([
    {
      nama: 'Awtian',
      awal: 'A',
      akhir: 'B',
      seat: 'B3'
    },
    {
      nama: 'Klonoa',
      awal: 'A',
      akhir: 'D',
      seat: 'V1'
    },
    {
      nama: 'Azizy',
      awal: 'D',
      akhir: 'E',
      seat: 'A2'
    },
    {
      nama: 'Crash',
      awal: 'C',
      akhir: 'E',
      seat: 'R1'
    },
    {
      nama: 'Sena',
      awal: 'B',
      akhir: 'D',
      seat: 'R3'
    },
    {
      nama: 'Heri',
      awal: 'B',
      akhir: 'E',
      seat: 'R10'
    },
    {
      nama: 'Retsu',
      awal: 'D',
      akhir: 'E',
      seat: 'V2'
    },
    {
      nama: 'Hiruma',
      awal: 'B',
      akhir: 'E',
      seat: 'A6'
    },
    {
      nama: 'Tsubasa',
      awal: 'B',
      akhir: 'D',
      seat: 'V6'
    },
    {
      nama: 'Kenshin',
      awal: 'A',
      akhir: 'E',
      seat: 'V8'
    }
  ])
);
/*
Output :
{ 
  B: [ { nama: 'Awtian', col: 3, jarak: 1 } ],
  V:
   [ { nama: 'Klonoa', col: 1, jarak: 3 },
     { nama: 'Retsu', col: 2, jarak: 1 },
     { nama: 'Tsubasa', col: 6, jarak: 2 },
     { nama: 'Kenshin', col: 8, jarak: 4 } ],
  A:
   [ { nama: 'Azizy', col: 2, jarak: 1 },
     { nama: 'Hiruma', col: 6, jarak: 3 } ],
  R:
   [ { nama: 'Crash', col: 1, jarak: 2 },
     { nama: 'Sena', col: 3, jarak: 2 },
     { nama: 'Heri', col: 10, jarak: 3 } ] 
}
*/

console.log(trainSeating([])); //Invalid Input