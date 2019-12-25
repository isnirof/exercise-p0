/**
Above Average Students
----------------------
Implementasikan function aboveAverageStudents untuk mendapatkan list murid yang nilainya di atas
rata-rata. Rumus untuk mencari rata-rata: ( Hasil pertambahan semua nilai / Jumlah murid )
Contoh:
- input: [
    { name: 'Foobar', score: 75 },
    { name: 'Foobaz', score: 60 },
    { name: 'Foo', score: 75 }
  ]
- output: [
    { name: 'Foobar', score: 75 },
    { name: 'Foo', score: 75 }
  ]
RULE:
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
*/

function aboveAverageStudents(data) {
    var hasil = [];
    sum = 0;
    for (var j = 0; j < data.length; j++) {
        sum += data[j].score
    }
    avg = sum / data.length;

    for (var i = 0; i < data.length; i++) {

        if (data[i].score > avg) {
            hasil.push({
                name: data[i].name,
                score: data[i].score
            })
        }
    }
    return hasil;

}

console.log(aboveAverageStudents([
    { name: 'Dimitri', score: 90 },
    { name: 'Sergei', score: 70 },
    { name: 'Alisa', score: 50 },
    { name: 'Viktor', score: 65 },
    { name: 'Vladimir', score: 40 },
    { name: 'Alexei', score: 70 }
]));

  // [ { name: 'Dimitri', score: 90 },
  //   { name: 'Sergei', score: 70 },
  //   { name: 'Viktor', score: 65 },
  //   { name: 'Alexei', score: 70 } ]

//   console.log(aboveAverageStudents([
//     { name: 'Foo', score: 100 },
//     { name: 'Bar', score: 100 },
//     { name: 'Baz', score: 90 }
//   ]));

  // [ { name: 'Foo', score: 100 }, { name: 'Bar', score: 100 } ]

//   console.log(aboveAverageStudents([]));

  // [ ]