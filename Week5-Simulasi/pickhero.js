
/*
Dalam sebuah game, hero yang dapat dipilih memiliki jenis tertentu
Dalam game ini satu tim harus memilih 5 heroes yang akan dimainkan
Disini kamu diminta menampilkan apakah pick hero yang dilakukan tergolong good atau bad dengan kodisi sebagai berikut
good pick : jika dari hero yang di pick tidak memiliki lebih dari 2 tipe hero yang sama
bad pick : jika dari hero yang di pick ada 3 atau lebih tipe hero yang sama
pick list : ranger, mage, tank, warrior, atau assassin (cuma ada 5 tipe ini)
  tampilkan apakah good pick atau bad pick dan jenis apa yang lebih dari 2, pesan seperti pada test case
  [RULES]
  1. Wajib menggunakan Algoritma/Pseudocode
  2. Hanya boleh menggunakan built in function .split(), .unshift(), dan .push()
*/
function heroPick(hero) {
    var pick=hero.split(',')
    var result={
        ranger:0,
        mage:0,
        tank:0,
        warrior:0,
        assasin:0
    }

    if(pick.length<5) {
        return `not sufficient players`
    }
    for(var i=0;i<pick.length;i++) {
        value=false
        for(var heroes in result ) {
            if(heroes==pick[i]) {
                result[heroes]++
                value=true
            }
        }
        if(!value) {
            return `${pick[i]} is not in the pick list`
        }
    }
    for(count in result) {
        if(result[count]>=3) {
            return `bad pick too many ${count}`
        }
    }
    return `good pick`
    // return result
}
// Test case
console.log(heroPick('ranger,ranger,mage,tank,warrior')) // good pick
console.log(heroPick('mage,mage,tank,mage,warrior')) // bad pick too many mage
console.log(heroPick('mage,mage,tank,mage')) // not sufficient players
console.log(heroPick('mage,mage,god,mage,mage')) // god is not on the pick list