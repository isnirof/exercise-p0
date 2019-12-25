function soal2(nama) {
    hasil = [];
    if (nama.length % 2 == 0) {
        for (var i = 0; i < nama.length / 2; i++) {
            hasil.push([nama[i], nama[nama.length - i - 1]])
        }
    }
    else {
        for (var i = 0; i < nama.length / 2; i++) {

            if (i == (nama.length - 1) / 2) {
                hasil.push(nama[i], 'Instruktur')
            }
            else {
                hasil.push([nama[i], nama[nama.length - i - 1]])
            }
        }
    }
    return hasil;
}
console.log(soal2(['Aries', 'Dimas', 'Gatot', "Nurmantyo", "Zainul", "Majdi"])) // length/2
/*
    output: 
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log(soal2(['A', 'B', 'C', 'D', 'E']))// // 
// // [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(soal2(['Susan', 'Albert', 'Erithiana', 'Zaki', 'Sisijoan', 'Henry', "Nio"]))
// // [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]