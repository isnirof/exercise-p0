/**
 * =================
 * Powerbank Optimal
 * =================
 * 
 * [Description]
 * Sebuah powerbank memiliki ukuran, daya simpan, dan harga
 * yang berbeda-beda dengan powerbank lainnya.
 * 
 * Daya simpan powerbank adalah berapa mAh listrik yang disimpan,
 * contohnya: 5000 mAh, 10000 mAh, 3000 mAh.
 * 
 * Ukuran powerbank adalah (lebar x panjang x tebal) dari powerbank tersebut.
 * Untuk kali ini, asumsikan ukurannya ada dalam cm, jadi volume nya akan jadi cm3.
 * 
 * [Instructions]
 * Buatlah function untuk mengecek:
 * 1 - rasio harga dibanding ukuran (volume) sebuah powerbank.
 *     (berapa idr/cm3)
 * 2 - rasio harga dibanding daya simpan sebuah powerbank.
 *     (berapa idr/mAh)
 * Bulatkan kedua rasio tersebut ke 2 desimal poin terdekat.
 * 
 * Buat objek baru dengan merk, dua rasio tersebut, dan Grade.
 * Perhatikan test case untuk bentuk output yang diinginkan.
 * 
 * Jika rasio harga / daya simpan adalah 100 idr/mAh atau lebih mahal,
 * berikan value "mahal" ke powerbank tersebut.
 * Jika rasio harga / daya simpan adalah 50 idr/mAh atau lebih mahal,
 * berikan value "lumayan" ke powerbank tersebut.
 * Jika rasio harga / daya simpan adalah diatas 0 idr/mAh
 * berikan value "murah" ke powerbank tersebut.
 * Jika rasio harga / daya simpan adalah 0 idr/mAh atau minus, 
 * berikan value "gratisan" ke powerbank tersebut.
 * 
 * [Rules]
 * 1. Dilarang menggunakan built-in function: split, slice, splice, join, reverse
 */
function split(arr,separator) {
    var hasil=[]
    var temp=''
    for(var i=0;i<=arr.length;i++) {
        if(arr[i]==separator || i==arr.length) {
            hasil.push(temp)
            temp=''
        }
        else {
            temp+=arr[i]
        }
    }
    return hasil
}
function checkRatio(powerbank) {
    // Write your code here
    var result={}
    var p= split(powerbank.panjang,' ')
    var l= split(powerbank.lebar,' ')
    var t=split(powerbank.tebal,' ')
    var vol=p[0]*l[0]*t[0]
    var idr=split(powerbank.harga,' ')
    var price=idr[1]
    // console.log(vol, idr[1])
    var idrtoVol=parseInt(price/vol).toFixed(2)
    var idrtomah=parseInt(price/powerbank.dayaSimpan).toFixed(2)
    result.merk=powerbank.merk
    result.idrToVol=idrtoVol
    result.idrTomAh=idrtomah

    if(idrtomah>=100) {
        result.value='mahal'
    }
    else if(idrtomah>=50) {
        result.value='lumayan'
    }
    else if (idrtomah>=0){
        result.value='murah'
    }
    else {
        result.value='gratisan'
    }
    return result
}

var pow1 = {
  lebar: '5 cm',
  panjang: '10 cm',
  tebal: '1 cm',
  dayaSimpan: 7000,
  merk: 'Hipp0',
  harga: 'IDR 300000'
}
console.log(checkRatio(pow1))
console.log()
// { merk: 'Hipp0',
//   idrToVol: '6000 idr/cm3',
//   idrTomAh: '42.86 idr/mAh',
//   value: 'murah' }

var pow2 = {
  lebar: '3 cm',
  panjang: '7 cm',
  tebal: '3 cm',
  dayaSimpan: 3350,
  merk: 'Anker',
  harga: 'IDR 350000'
}
console.log(checkRatio(pow2))
console.log()
// { merk: 'Anker',
//   idrToVol: '5555.56 idr/cm3',
//   idrTomAh: '104.48 idr/mAh',
//   value: 'mahal' }


var pow3 = {
  lebar: '15 cm',
  panjang: '20 cm',
  tebal: '2 cm',
  dayaSimpan: 18000,
  merk: 'Energizer',
  harga: 'IDR 1512000'
}
console.log(checkRatio(pow3))
console.log()
// { merk: 'Energizer',
//   idrToVol: '2520 idr/cm3',
//   idrTomAh: '84 idr/mAh',
//   value: 'lumayan' }

console.log(checkRatio())
// Invalid Input