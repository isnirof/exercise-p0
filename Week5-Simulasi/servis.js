/* 
| Nama Layanan | harga        |
| ------------ | ------------ |
| Ganti Oli    | Rp   120,000 |
| Isi Angin    | Rp     5,000 |
| Tune Up      | Rp 1,500,000 |
| Balancing    | Rp   330,000 |
 | Layanan Full Service (KM) | Harga        |
 | ------------------------- | ------------ |
 | 0 - 10.000 KM             | Rp   600,000 |
 | 10.001 - 35.000 KM        | Rp   800,000 |
 | 35.001 - 50.000 KM        | Rp 1,300,000 |
 | > 50.000 KM               | Rp 2,500,000 |
 */
function servisMobil(customer) {
    var profile = {
        Nama: "Bengkel Sinar Jaya",
        Alamat: "Jl Mampang prapatan no 15",
        layanan: [
            { nama: "Ganti Oli", harga: 120000 },
            { nama: "Isi Angin", harga: 5000 },
            { nama: "Tune Up", harga: 1500000 },
            { nama: "Balancing", harga: 330000 },
            {
                nama: "Full Service",
                layanan: [
                    { kilometer: "0-10000", harga: 600000 },
                    { kilometer: "10001-35000", harga: 800000 },
                    { kilometer: "35001-50000", harga: 1300000 },
                    { kilometer: ">50000", harga: 2500000 }
                ]
            }
        ]
    }
    // console.log(profile.layanan[4].layanan)
    var result = { nama: customer.pemilik }
    var layanan = 0
    var servis=[]

    var total = 0
    var full = profile.layanan[4].layanan
    var demand = customer.permintaan.split(',')
    
    if (demand.length == 1) { //untuk full service
        for (var i = 0; i < full.length; i++) {
            var km = full[i].kilometer.split('-')
            // console.log(km)
            if (customer.kilometer >= km[0] && customer.kilometer <= km[1]) {
                total = full[i].harga
            }
            else {
                total = full[i].harga
            }
        }
        result.servis={ nama: demand[0], harga: total }
        // result.totalharga = total
    }
    // console.log(obj)
    // return bayar
    
    for (var j = 0; j < profile.layanan.length-1; j++) {
        for (var i = 0; i < demand.length; i++) {
            if (demand[i] == profile.layanan[j].nama) {
                servis.push(profile.layanan[j])
                total += profile.layanan[j].harga
            }
        }
        result.servis = servis
    }
    result.totalharga = total
    // console.log(layanan)
    return result
}
const bon = servisMobil({
    pemilik: "Agus",
    permintaan: "Tune Up,Ganti Oli,Balancing",
})
console.log(bon)
const bon1 = servisMobil({
    pemilik: "Yusuf",
    permintaan: "Full Service",
    kilometer: 3000
})
console.log(bon1)
const bon2 = servisMobil({
    pemilik: "Mahdi",
    permintaan: "Full Service",
    kilometer: 75000
})
console.log(bon2)
/*
nama bengkel
alamat
servis
1.. Rp
2.. Rp
3.. Rp
Total*/