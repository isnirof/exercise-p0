/*
============
Grocery Shop 
============

[INSTRUCTION]
Mari kita berbelanja!! 
Ani berbelanja di pasar untuk membeli kebutuhan Bulanan. 
Di pasar dijual beberapa jenis kebutuhan sebagai berikut : 
1. Beras, 1 liter seharga Rp. 10.000 
2. Ayam, 1 Potong seharga Rp. 8.000
3. Sayur, 1 ikat seharga Rp. 5000

Uang Ani terbatas, namun uang belanjaannya harus dapat membeli mulai dari barang termahal (beras) hingga termurah (sayur).
Jika uangnya masih cukup, maka Ani akan membeli barang tersebut lagi dari yang termahal hingga termurah lagi hingga uang Ani tidak lagi cukup untuk membeli.

tugas kalian adalah memunculkan detail transaksi yang dilakukan Ani dan memunculkan kembaliannya.
note: selalu lakukan pembelian dari barang termahal -> termurah

[EXAMPLE]
uang Ani Rp. 107.400 maka jumlah belanjaan Ani yang paling maksimal adalah:
"beras 5 liter, ayam 4 potong, sayur 5 ikat, kembalian Rp. 400"
kenapa? karena saat uang ani tersisa: 15400, ani hanya sanggup membeli beras dan sayur dengan kembalian Rp. 4400



Tulis Pseudocode / Algoritma di sini!

*/

function daftarMenu(menu, uang) {
    var hasil={}
    var sisa=uang
    while(sisa>=menu[menu.length-1][1]) {
        for(var i=0;i<menu.length;i++) {
            if(sisa>menu[i][1]) {
                if(!hasil[menu[i][0]]) {
                    hasil[menu[i][0]]=1
                }
                else {
                    hasil[menu[i][0]]++
                }
                sisa-=menu[i][1]
            }
        }
    }
    hasil.kembali='Rp.'+sisa
    return hasil
}

console.log(daftarMenu([['Beras', 10000], ['Ayam', 8000], ['Sayur', 5000]], 107400))