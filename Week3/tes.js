function hitungGaji(nama, absensi, gajiPokok) {
  // Write your code here
  hadir=0;
  for(i=0;i<absensi.length;i++) {
      if(absensi[i]==1) {
          hadir++;
      }
  }
  persenhadir=hadir/absensi.length;
  if(persenhadir<0.7) {
      gaji=gajiPokok;
  }
  else {
      gaji=gajiPokok+(300000*persenhadir);
  }
//   return `Total gaji ${nama} adalah Rp. ${gaji}`;
return gaji;
​}
var absensiFirst = [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1];
console.log(hitungGaji('Hannah', absensiFirst, 3000000));
// Total gaji Hannah adalah Rp 3250000
​
var absensiSecond = [0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0];
console.log(hitungGaji('Yuki', absensiSecond, 6000000));
// Total gaji Yuki adalah Rp 6000000
