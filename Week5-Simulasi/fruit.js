/*
=============
Report Market
=============

[INSTRUCTION]
reportMarket adalah sebuah function yang menerima parameter berupa array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key berdasarkan jenis fruit.
lalu di dalamnya akan berisi list customers, total qty, rata-rata, max dan min pada setiap jenis fruit

[EXAMPLE]
Contoh input dan output bisa dilihat di test case. adapun format object sbb:
{
  <name fruit>: {
    customers: [<name_customer>],
    sum: <total_qty>,
    max: <qty terbesar setiap customer pesan>,
    min: <qty terkecil setiap customer pesan>
  }
}

[RULE]
1. dilarang menggunakan indexOf(), find(), filter()
2. dilarang menggunakan regex
*/

function reportMarket(input) {
    // your code here
    var hasil = {};
    for (var i = 0; i < input.length; i++) {
        var buah=[input[i].fruit]
        if (!hasil[buah]) {
            hasil[input[i].fruit] = {
                customers: [input[i].name],
                sum: input[i].qty,
                avg: 0,
                max: input[i].qty,
                min: input[i].qty
            }
        }
        else {
            hasil[buah].customers.push(input[i].name)
            hasil[buah].sum += input[i].qty
            // hasil[buah].avg=hasil[buah].sum/hasil[buah].customers.length
            // hasil[input[i].fruit].avg=hasil.sum/hasil.customers.length
            if (input[i].qty < hasil[buah].min) {
                hasil[buah].min = input[i].qty
            }
            if (input[i].qty > hasil[buah].max) {
                hasil[buah].max = input[i].qty
            }
        }
        hasil[buah].avg=hasil[buah].sum/hasil[buah].customers.length
    }
    return hasil
}


console.log(reportMarket([
    { name: "Tsubasa", fruit: "Banana", qty: 16 },
    { name: "Misaki", fruit: "Apple", qty: 7 },
    { name: "Taqi", fruit: "Banana", qty: 8 },
    { name: "Hyuga", fruit: "Melon", qty: 7 },
    { name: "Wakabayashi", fruit: "Melon", qty: 9 },
    { name: "Zudo", fruit: "Apple", qty: 10 },
    { name: "Misugi", fruit: "Banana", qty: 9 },
    { name: "Tachibana", fruit: "Melon", qty: 5 },
    { name: "Wakasimatsu", fruit: "Apple", qty: 7 },
    { name: "Soda", fruit: "Apple", qty: 7 }
]));
/*
{ Banana:
   { customers: [ 'Tsubasa', 'Taqi', 'Misugi' ],
     sum: 33,
     avg: 11,
     max: 16,
     min: 8 },
  Apple:
   { customers: [ 'Misaki', 'Zudo', 'Wakasimatsu', 'Soda' ],
     sum: 31,
     avg: 7.75,
     max: 10,
     min: 7 },
  Melon:
   { customers: [ 'Hyuga', 'Wakabayashi', 'Tachibana' ],
     sum: 21,
     avg: 7,
     max: 9,
     min: 5 } }
*/

console.log(reportMarket([
    { name: "Sasuke", fruit: "Avocado", qty: 8 },
    { name: "Sakura", fruit: "Strawberry", qty: 7 },
    { name: "Naruto", fruit: "Durian", qty: 6 }
]));
/*
{ Avocado: { customers: [ 'Sasuke' ], sum: 8, avg: 8, max: 8, min: 8 },
  Strawberry: { customers: [ 'Sakura' ], sum: 7, avg: 7, max: 7, min: 7 },
  Durian: { customers: [ 'Naruto' ], sum: 6, avg: 6, max: 6, min: 6 } }
*/