/**
  Diberikan sebuah function vendingMoonbucks yang menerima dua parameter:
  - list pesanan bertipe array
  - uang bertipe number

  Function akan me-return sebuah array of object yang berisi beverages yang berhasil
  terbeli, uang kembalian dan keterangan (lihat test case/driver code untuk lebih detail)

  Pada function tersebut telah disediakan list menu beverages dan harga.
  Asumsi vendingMoonbucks menyediakan uang kembalian dan uang kembalian yang tersedia
  hanya 50000.

**/
function vendingMoonbucks(pesanan, uang) {
    var menu = {
        'dark-mocha': 65000,
        'java-chip': 55000,
        'asian-dolce': 50000
    }
    var uangKembalianTersedia = 50000
    // Write your code here
    var obj = {
        beverages: [],
        change: uang,
        keterangan: ''
    }
    for (var i = 0; i < pesanan.length; i++) {
        value = false
        for (kopi in menu) {
            if (pesanan[i] == kopi) {
                if (obj.change >= menu[kopi]) {
                    obj.beverages.push(pesanan[i])
                    obj.change -= menu[kopi]
                }
                value = true
            }
        }
    }
    if (!value) {
        obj.keterangan = 'beverages tidak tersedia'
    }
    else {
        if (obj.beverages.length !== pesanan.length) {
            obj.keterangan = 'ada yg tidak terbeli'
        }
        else if (obj.change > uangKembalianTersedia) {
            obj.beverages = []
            obj.change = uang
            obj.keterangan = 'uang kembalian tidak cukup'
        }
    }
    return obj
}

console.log(vendingMoonbucks(['es teh tawar', 'kopi ukut'], 150000));
// { beverages: [],
//   change: 150000,
//   keterangan: 'beverages tidak tersedia pada vendingMoonbucks' }

console.log(vendingMoonbucks(['java-chip', 'dark-mocha'], 150000));
// { beverages: [ 'java-chip', 'dark-mocha' ],
//   change: 30000,
//   keterangan: '' }

console.log(vendingMoonbucks(['asian-dolce', 'dark-mocha', 'java-chip'], 70000));
// { beverages: [ 'asian-dolce' ],
//   change: 20000,
//   keterangan: 'ada pesanan yang tidak tidak terbeli' }

console.log(vendingMoonbucks(['java-chip', 'dark-mocha'], 200000));
// { beverages: [],
//   change: 200000,
//   keterangan: 'uang kembalian tidak cukup' }