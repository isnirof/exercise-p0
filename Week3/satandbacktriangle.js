/* 
=================
StandBackTriangel
=================

Standback Triangel adalah program untuk mengegenerate Segitiga yang ujungnya mengarah ke kanan.
dengan character huruf 'o' sebagai sisi nya 

[INSTRUCTION]
diberikan input berupa width , yaitu lebar segitiga. 

[Example]
jika width = 3 maka : 

123 <-- width 
  o
 oo
o o
 oo
  o

[RULE]
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()


*/

function standBackTriangel(width) {

    hasil = '';
    for (i = 0; i < width * 2 - 1; i++) {
        kolom = '';
        for (j = 0; j < width; j++) {
            if (i < width) {
                if (j == width - 1 || j == width - 1 - i) {
                    kolom += 'o';
                }
                else {
                    kolom += ' ';
                }
            }
            else {
                if (j == width - 1 || j == i - width + 1 ) {
                    kolom += 'o';
                }
                else {
                    kolom += ' ';
                }
            }
        }
        hasil+=kolom +'\n';
    }

    return console.log(hasil);
}

standBackTriangel(5);