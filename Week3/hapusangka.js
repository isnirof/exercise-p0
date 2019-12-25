/**
 Hapus Angka
-------------------------
Diberikan sebuah function hapusAngka dimana function tersebut menerima input parameter berupa string.
function tersebut akan membuang seluruh karakter berupa angka yang terdapat pada kata tersebut

contoh:

input: 'hacktiv8'
output: 'hacktiv'

input: '17 Agustus 1945'
output: 'Agustus'

RULES:
- WAJIB menyertakan algoritma/pseudocode (nilai akan dianulir jika tanpa algoritma/pseudocode)
- DILARANG MENGGUNAKAN method .split()
*/

function hapusAngka (str) {
    baru='';
    for(i=0;i<str.length;i++) {
        if(Number.isNaN(parseInt(str[i]))) {
            baru+=str[i];
        }
    }
    return baru;
}
console.log(hapusAngka('hacktiv8889'))