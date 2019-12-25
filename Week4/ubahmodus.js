/*
  ///////////////////
  FUNCTION UBAH MODUS
  ///////////////////

  Fungsi Ubah Modus adalah sebuah fungsi yang mengubah modus dengan nama yang baru

  [PROCESS]

  INPUT:
  arrayModus = ['Rina', 'Bella', 'Angela', 'Christina', 'Sophia', 'Alice', 'Angela']
  modusBaru = 'Dilla'
  OUTPUT:
  ['Rina', 'Bella', 'Dilla', 'Christina', 'Sophia', 'Alice', 'Dilla']

  [RULES]

  - Asumsi selalu ada modus dan newModus
*/

function ubahModus(arrayModus, newModus) {
    // code here
    result={}
    for(var i=0;i<arrayModus.length;i++) {
        if(!result[arrayModus[i]]) {
            result[arrayModus[i]]=1
        }
        else {
            result[arrayModus[i]]++
        }
    }
    var modus=0
    for(name in result) {
        if(result[name]>modus) {
            modus=result[name]
            name=newModus
        }
    }
    return result
}

// TEST CASES
console.log(ubahModus(['Rina', 'Bella', 'Angela', 'Christina', 'Sophia', 'Alice', 'Angela'], 'Dilla'))
// ['Rina', 'Bella', 'Dilla', 'Christina', 'Sophia', 'Alice', 'Dilla']
// console.log(ubahModus(['Anita', 'Reina', 'Anita'], 'Sora'))
// ['Sora', 'Reina', 'Sora']