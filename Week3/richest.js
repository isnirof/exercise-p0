// Live Coding Week 4 - Question 4
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
  ///////////////////
  richestGroupDynamic
  ///////////////////
  Function richestGroupDynamic akan menentukkan siapa yang paling kaya dalam suatu grup.
  Function akan menerima 1 parameter yaitu:
    - groups adalah array yang berisi kumpulan data vote, tipe datanya array.
  Function ini akan mengembalikkan nilai string.
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var groups = [
      ['A', 'B', 'C'],
      ['A', 'A', 'D', 'D', 'D']
    ]
  [PROCESS]
  Pada array ['A', 'B', 'C'] tidak ada yang unggul.
  Pada array ['A', 'A', 'D', 'D', 'D'] D unggul.
  [OUTPUT]
    [ 'D' ]
  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var groups = [
      ['Z', 'Z'],
      ['B']
    ]
  [PROCESS]
  Pada array ['Z', 'Z'] Z unggul.
  Pada array ['B'] B unggul.
  [OUTPUT]
    [ 'Z', 'B' ]
  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift().
*/

function richestGroupDynamic(groups) {
  final = [];

  for (i = 0; i < groups.length; i++) {
    hasil = [];
    for (j = 0; j < groups[i].length; j++) {
      value = false;
      for (k = 0; k < hasil.length; k++) {
        if (groups[i][j] == hasil[k][0]) {
          hasil[k][1]++;
          value = true;
          break;
        }
      }
      if (!value) {
        hasil.push([groups[i][j], 1])
      }
    }
    // console.log(hasil)
    //sort
    run = true;
    // pemenang=0;
    while (run) {
      run = false;
      for (j = 0; j < hasil.length - 1; j++) {
        if (hasil[j][1] < hasil[j + 1][1]) {
          [hasil[j], hasil[j + 1]] = [hasil[j + 1], hasil[j]]
          run = true;
        }
      }
    }
    //draw condition
    draw = false;
    for (j = 0; j < hasil.length - 1; j++) {
      if (hasil[0][1] == hasil[j + 1][1]) {
        draw = true;
      }
    }
    if (!draw) {
      final.push(hasil[0][0]);
    }

  }
  return final;
}

var groups = [
  ['A', 'B', 'C'],
  ['A', 'A', 'D', 'D', 'D']
]

var groups1 = [
  ['Z', 'Z'],
  ['B']
]

console.log(richestGroupDynamic(groups));
console.log(richestGroupDynamic(groups1));