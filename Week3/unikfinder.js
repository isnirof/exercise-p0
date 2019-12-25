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
function uniqueDuplicateFinder(sentence) {
  sentence1 = [];
  sentence1.push(sentence.toLowerCase());
  temp = '';
  split = [];
  for (i = 0; i <= sentence1.length; i++) {
    if (sentence1[i] !== ' ' && i !== sentence1.length) {
      temp += sentence1[i];
    }
    if (sentence1[i] == ' ' || i == sentence1.length) {
      split.push(temp);
      temp = '';
    }
  }
// console.log(split);
  hasil = [[], []];
  //kelompok unik hasil[1],double hasil[0]
  for (i = 0; i < split.length; i++) {
    found = false;
    for (j = i + 1; j < split.length; j++) {
      if (split[i] == split[j]) {
        hasil[0].push(split[i]);
        found = true;
      }
    }
    if (!found) {
      hasil[1].push(split[i]);
      // split.splice(i, 1);
    }
  }
  return hasil;
}

console.log(uniqueDuplicateFinder('saya dan SAYA suka makan nasi'));