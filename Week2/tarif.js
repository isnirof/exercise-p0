var umur = 8;
var tinggi = 180;

if (umur>1 && umur<4) {
    if(tinggi>70) {
        tarif=30000;
    }
    else {
        tarif=20000;
    }
}

if  (umur > 3 && umur < 8) {
    if(tinggi > 120) {
        tarif=50000;
    }
    else {
        tarif=35000;
    }
}

else if (umur>7 && umur <11) {
    if (tinggi > 150) {
        tarif=70000;
    }
    else {
        tarif=50000;
    }
}

console.log(tarif);