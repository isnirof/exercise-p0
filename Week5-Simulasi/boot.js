/*
===============
Boot Pair Count
===============

[INSTRUCTION]
Jack sedang merapikan gudang di toko Boot-nya, dia memiliki banyak tumpukan
boot-boot yang warnanya harus dipasangkan agar dapat dijual. Bila input yang
berisi huruf-huruf masing-masing mewakili suatu warna, tentukanlah ada berapa
banyak pasang boot yang siap dijual oleh Jack!

[EXAMPLE]
Bila input adalah ABAACBBA maka:
hasilnya adalah 3, karena ada dua pasang A dan satu pasang B.

- Bila tidak ada pasangan sama sekali, maka hasilnya adalah:
"Tidak ada pasangan sepatu boot ditemukan"
- Bila tidak ada boot sama sekali, maka hasilnya adalah:
"Tidak ada sepatu boot mohon cek kembali input anda"

[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift()
2. dilarang menggunakan regex
*/

function bootPairCount(bootStr) {
    if (!bootStr) {
        return `Tidak ada sepatu boot mohon cek lagi`
    }

    var hasil={}
    for(var i=0;i<bootStr.length;i++) {
        if(!hasil[bootStr[i]]) {
            hasil[bootStr[i]]=1
        }
        else {
            hasil[bootStr[i]]++
        }
    }
    var count=0
    for(var boot in hasil) {
        if(Math.floor(hasil[boot]/2)>0) {
            count+=Math.floor(hasil[boot]/2)
        }
    }
    if(!count) {
        return `tidak ada pasangan`
    }
    return count
}

//TEST CASES
console.log(bootPairCount("ABBAACDAB")); // 3
console.log(bootPairCount("ABBCCDAD")); // 4
console.log(bootPairCount("ABCDE")); // Tidak ada pasangan sepatu boot ditemukan
console.log(bootPairCount()); // Tidak ada sepatu boot mohon cek kembali input anda