/*
  =====
  Top 3
  =====
  Seorang user spotify ingin mengetahui lagu apa saja yang dia putar
  selama seminggu terakhir diurutkan dari paling jarang diputar

  Tugas kamu adalah membuat function sortPlaylist yang menerima inputan
  sebuah array satu dimensi berisi data lagu.

  Output dari function tersebut adalah array 2 dimensi yang menampilkan
  judul lagu terurut dari jumlah pemutaran yang paling sedikit.

  INPUT:
    ['Senorita', 'Senorita', 'I Love You 3000', 'A Whole New World', 'Senorita', 'I Love You 3000', 'Senorita']

  OUTPUT:
    [ 'A Whole New World', 'I Love You 3000', 'Senorita' ]

  RULES:
   - DILARANG MENGGUNAKAN BUILT IN FUNCTION APAPUN KECUALI .push()
*/
function sortPlaylist (lagu) {
    hasil=[];

    //judul,frek
    for(i=0;i<lagu.length;i++) {
        var value=false;
        for(var j=0;j<hasil.length;j++) {
          if(lagu[i]==hasil[j][0]) {
            hasil[j][1]++
            value=true;
          }
        }
        if(!value) {
          hasil.push([lagu[i],1])
        }
    }

    //sort dari yg paling kecil, output hanya judulnya saja
    var run=true;
    while(run){
      run=false;
      for(var i=0;i<hasil.length-1;i++) {
        if(hasil[i][1]>hasil[i+1][1]) {
          [hasil[i],hasil[i+1]]=[hasil[i+1],hasil[i]]
          run=true;
        }
      }
    }
    // display hanya judul
    var judul=[];
    for(var i=0; i<hasil.length;i++) {
      judul.push(hasil[i][0])
    }
    return judul;
}

console.log(sortPlaylist(['Senorita', 'Senorita', 'I Love You 3000', 'A Whole New World', 'Senorita', 'I Love You 3000', 'Senorita']));
// [ 'A Whole New World', 'I Love You 3000', 'Senorita' ]