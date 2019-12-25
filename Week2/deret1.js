/*
1. Buat sebuah program yang akan menampilkan deret angka mulai dari 1 hingga angka yang diberikan
2. Ketika angka itu menyentuh 2 digit, maka hanya menampilkan angka satuannya, angka puluhannya tidak diprint
    Contoh:
        angka 1-15: 123456789012345
        angka 1-21: 123456789012345678901
 
3. Jika angka tersebut `habis dibagi 2 DAN habis dibagi 3`, maka angka tersebut diganti menjadi asterisk ('*')
    Contoh:
        angka 1-12: 12345*78901*345
4. Penjelasan:
    asterisk jatuh pada angka 6 dan 12 karena angka tersebut habis dibagi 6, maka angka tersebut diganti dengan asterisk.
*/

var size = 19 // OUTPUT: 12345*78901*34567*9
  //write your code here

var num=1;
var deret='';
for(i=0;i<size;i++) {
    sisa=num%10;
    if(num%6==0) {
        deret+='*';
    }
    else {
        deret+=sisa;
    }
    num++;
}
console.log(deret);