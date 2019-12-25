/*
  HEROES
  Heroes adalah sebuah fungsi untuk menentukkan karakter apa saja yang disukai
  orang sehingga yang duplikat tidak perlu dicatat.
  Fungsi akan menerima parameter berupa string
  EXAMPLE
  INPUT: "saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"
  OUTPUT: [saitama, naruto, nobita, sasuke]
  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), .unshift()
*/
function Heroes(hero) {
    if (!hero.length) {
        return `Theres no heroes`
    }
    var hero2 = hero.split('&&')
    // console.log(hero2)
    var result = []
    result.push(hero2[0])
    for (var i = 0; i < hero2.length; i++) {
        var value=false
        for (var j = 0; j < result.length; j++) {
            if (result[j]== hero2[i]) {
                value=true
            }
        }
        if(!value) {
            result.push(hero2[i])
        }
    }
    return result
}

// TEST CASE
console.log(Heroes('saitama&&naruto&&nobita&&nobita&&saitama&&sasuke'))
// [ 'saitama', 'naruto', 'nobita', 'sasuke' ]
console.log(Heroes('doraemon&&sakura&&inuyasha&&saitama&&shoji&&ikan indosiar'))
// [ 'doraemon', 'sakura', 'inuyasha', 'saitama', 'shoji', 'ikan indosiar' ]
console.log(Heroes(''))
// There's no heroes