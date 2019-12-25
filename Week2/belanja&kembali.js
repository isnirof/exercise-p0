var uang=15000;
var belanja='Wafer';

if(belanja=='Wafer') {
    jumlah= Math.floor(uang/15000);
    kembalian=uang-(jumlah*15000);
    console.log(`kamu membeli ${jumlah} ${belanja} dan memiliki kembalian sebanyak ${kembalian}`);
}
