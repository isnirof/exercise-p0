var uang=15000;
var belanja='Indomie';

if(belanja=='Wafer') {
    jumlah= Math.floor(uang/15000);
    kembalian=uang-(jumlah*15000);
    console.log(`kamu membeli ${jumlah} ${belanja} dan memiliki kembalian sebanyak ${kembalian}`);
}

else if(belanja=='Bayam') {
    jumlah= Math.floor(uang/5000);
    kembalian=uang-(jumlah*5000);
    console.log(`kamu membeli ${jumlah} ${belanja} dan memiliki kembalian sebanyak ${kembalian}`);
}

if(belanja=='Indomie') {
    jumlah= Math.floor(uang/2000);
    kembalian=uang-(jumlah*2000);
    console.log(`kamu membeli ${jumlah} ${belanja} dan memiliki kembalian sebanyak ${kembalian}`);
}

