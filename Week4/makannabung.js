/*
Membeli makan siang dan menabung
Rusli adalah seorang anak sekolah di SD Hacktiv8.
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.
Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.
OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}
*/
function jumlahTabungan(listHarga, history) {
    // Write your code here
    var result = {}
    var sumNabung=0
    var hari = history.split('.')
    //   console.log(hari)
    for (var i = 0; i < hari.length; i++) {
        outcome=0;
        var hari2 = hari[i].split('-') // hari = hari2[0]    
        //split makanan
        var makanan= hari2[1].split(',')
        // console.log(makanan)
        //cek makanan dgn hargamakanan
        for(var j=0;j<makanan.length;j++) {
            for(var k=0;k<listHarga.length;k++) {
                if(makanan[j]==listHarga[k].nama) {
                    outcome+=listHarga[k].harga
                }
            }
        }
        result[hari2[0]] = 10000 - outcome
        sumNabung+=result[hari2[0]]
        // console.log(outcome)
    }
    result.TotalTabungan = sumNabung 

    return result
}

var hargaMakanan = [
    {
        nama: "ayam",
        harga: 5000
    },
    {
        nama: "nasi",
        harga: 2000
    },
    {
        nama: "cola",
        harga: 1000
    },
    {
        nama: "chiki",
        harga: 1500
    },
    {
        nama: "hotdog",
        harga: 3000
    },
    {
        nama: "aqua",
        harga: 2000
    }
]

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`
console.log(jumlahTabungan(hargaMakanan, historyPembelian))