/*
  Buatlah sebuah function untuk menghitung berapa kali huruf pada kumpulan huruf tersebut muncul
  huruf yang di hitung kemunculannya adalah huruf selain kata haram di parameter kedua tersebut
  untuk contoh perhatikan testcase
*/
function main (alp, forb) {
  //your code here

  baru='';

  for(var i=0; i<alp.length;i++) {
      var forbidden = false
      for (var j=0; j<forb.length;j++) {

        if(alp[i]==forb[j]) {
              forbidden = true
               break;
          }
      }
      if(!forbidden){
          baru+=alp[i]
      }
  }
  console.log(baru);
    hasil=[];
    for(i=0;i<baru.length;i++) {
        found =false;
        for(j=0;j<hasil.length;j++) {
            if(baru[i]==hasil[j][0]) {
                hasil[j][1]++;
                found=true;
            }
        }
        if(!found) {
            hasil.push([baru[i],1]);
        }
    }

    // hasil2=[];
    // for(var i=0; i<hasil.length; i++) {
    //     hasil2.push([hasil[i][0],hasil[i].length])
    // }

return hasil;
}
console.log(main("asdkjwlkhduefakueawdggbmopp", "gw"))
// [ [ 'a', 3 ],
//   [ 's', 1 ],
//   [ 'd', 3 ],
//   [ 'k', 3 ],
//   [ 'j', 1 ],
//   [ 'l', 1 ],
//   [ 'h', 1 ],
//   [ 'u', 2 ],
//   [ 'e', 2 ],
//   [ 'f', 1 ],
//   [ 'b', 1 ],
//   [ 'm', 1 ],
//   [ 'o', 1 ],
//   [ 'p', 2 ] ]
console.log(main("jawidianknjnwadknovnaxzwidj", "diw"))
// // [ [ 'j', 3 ],
// //   [ 'a', 4 ],
// //   [ 'n', 5 ],
// //   [ 'k', 2 ],
// //   [ 'o', 1 ],
// //   [ 'v', 1 ],
// //   [ 'x', 1 ],
// //   [ 'z', 1 ] ]