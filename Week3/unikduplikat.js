/*
=======================
UNIQUE DUPLICATE FINDER
=======================

[INSTRUCTIONS]
uniqueDuplicateFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn object yang berisi setiap kumpulan kata-kata unik dan duplicate yang ditemukan dalam kalimat.


[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
output: {
  unique: [ 'dan', 'suka', 'makan', 'nasi' ],
  duplicate: [ 'saya' ]
}

*/

function uniqueFinder(kalimat) {
    kata=[];
    //split kalimat perkata
    temp='';
    for(i=0;i<kalimat.length+1;i++) {
        if(kalimat[i]!==" "&&i!=kalimat.length) {
            temp+=kalimat[i];
        }        
        if(kalimat[i]==" " || i==kalimat.length) {
            kata.push(temp);
            temp='';
        }
    }

    // console.log(kata)
    var hasil = [[], []]
    
    for(var i = 0;i < kata.length; i++) {
        var index=-1;
        // var count = 0
        for (var j = i+1; j < kata.length; j++) {
            if (kata[i] == kata[j]) {
                index=j;
            }
        }
        if (index!==-1) {
            hasil[1].push(kata[i])
            kata.splice(index,1) // splice agar tidak double
        } else {
            hasil[0].push(kata[i])
        }
    }
    return kata;
}

console.log(uniqueFinder('hello black dragon and hello red dragon'));
// {
//   unique: [ 'black', 'and', 'red' ],
//   duplicate: [ 'hello', 'dragon' ]
// }

// [[], []]