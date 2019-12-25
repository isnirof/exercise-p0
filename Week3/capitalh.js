/*
Instruksi
=========
Buatlah sebuah function bernama capitalH yang menjalankan proses dengan menggunakan looping (boleh dengan while atau for) dan menerima satu parameter bernama height.

Buatlah sebuah symbol pola berikut:
contoh 1 ( capitalH(3) ):
| |
|-|
| |

contoh 2 ( capitalH(5) ):
|   |
|   |
|---|
|   |
|   |
 
contoh 3 ( capitalH(6) ):
|    |
|    |
|----|
|----|
|    |
|    |



tinggi huruf dan lebar sesuai dengan nilai parameter height.
garis vertical mengunakan symbol pipeline(|)
garis horizontal mengunakan symbol minus(-)
minimal nilai ganjil adalah 3, untuk nilai genap minimalnya adalah 6

*/

function capitalH(height) {
    hasil='';
    if(height<3 || height>6) {
        return `input invalid`
    }
    else {
        for(i=0;i<height;i++) {
            kolom='';
            for(j=0;j<height;j++) {
                if(j==0 || j==height-1) {
                    kolom+='|';
                }
                
                if(height%2!==0 && i==Math.floor(height/2)) {
                    kolom+='-';
                }
                else if (height%2==0 && ((i==Math.floor(height/2) || i==Math.round(height/2)))) {
                    kolom+='-';
                }
            }
            console.log(kolom);
        }

    }
}

//Test case
capitalH(3);
// capitalH(5);
// capitalH(6);
// capitalH(9);
// capitalH(11);