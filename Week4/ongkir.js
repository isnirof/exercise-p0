function ongkosKirim(arr) {
    var kota = ['Depok', 'Jakarta', 'Bandung', 'Surabaya', 'Bali']
    var result = [];
    

    for (var i = 0; i < arr.length; i++) {
        // index di dalam for karena tiap i akan di reset indexnya
        var awal = -1; 
        var akhir = -1;

        for (var j = 0; j < kota.length; j++) { //looping utk menentukan harga
            if (arr[i].asal == kota[j]) {
                awal = j
            }
            if (arr[i].tujuan == kota[j]) {
                akhir = j
            }
            if (awal !== -1 && akhir !== -1) {
                if (akhir == awal) {
                    harga = 9000
                }
                else {
                    harga = Math.abs(awal - akhir) * 9000
                }
                if (arr[i].ekspedisi == 'NJE') {
                    harga = harga * 0.9
                }
            }
            else {
                harga = 0;
            }
        }

        //create obj sesuai output
        // if(found == 2){
            result.push({
                pengirim: arr[i].nama,
                tagihan: harga || 0
            })
        // }
        // else{
        //     result.push({
        //         pengirim: arr[i].nama,
        //         tagihan: 0
        //     })
        // }
        
    }
    return result
}
var case1 = [{
    nama: 'Jasper',
    asal: 'Depok',
    tujuan: 'Jakarta',
    ekspedisi: 'NJE'
},
{
    nama: 'Kevin',
    asal: 'Jakarta',
    tujuan: 'Surabaya',
    ekspedisi: 'Si Lambat'
},
{
    nama: 'Barry',
    asal: 'Bali',
    tujuan: 'Bandung',
    ekspedisi: 'NJE'
}
];

console.log(ongkosKirim(case1))
/*
[
  { pengirim: 'Jasper', tagihan: 8100 },
  { pengirim: 'Kevin', tagihan: 18000 },
  { pengirim: 'Barry', tagihan: 16200 }
]
*/

var case2 = [{
    nama: 'Patricia',
    asal: 'Jakarta',
    tujuan: 'Jakarta',
    ekspedisi: 'TnJ'
},
{
    nama: 'Anne',
    asal: 'Medan',
    tujuan: 'Depok',
    ekspedisi: 'NJE'
}
];

console.log(ongkosKirim(case2))
/*
[
  { pengirim: 'Patricia', tagihan: 9000 },
  { pengirim: 'Anne', tagihan: 0 }
]
*/