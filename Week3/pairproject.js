function pairProject(arr) {
    hasil = [];
    for (i = 0; i < arr.length; i++) {
        found = false;
        for (j = 0; j < hasil.length; j++) {
            if (hasil[j].length < 2 && hasil[j][0][0] !== arr[i][0]) {
                hasil[j].push(arr[i]);
                found = true;
                break;
            }
        }
        if (!found) {
            hasil.push([arr[i]]);
        }
    }
    hasil2 = [];
    // for(i=0;i<hasil.length;i++) {
    //     hasil2.push(hasil[i].join(' and '))
    // }
    for (i = 0; i < hasil.length; i++) {
        temp = hasil[i][0] + ' and ' + hasil[i][1];
        hasil2.push([temp]);
    }
    return hasil2;
}
console.log(pairProject(["Aries", "Awtian", "Momotaro", "Yoki", "Icha", "Wika", "Wawan", "Mimin", "Ryan", "Yogi"]))
/*
[ 'Aries and Momotaro',
  'Awtian and Yoki',
  'Icha and Wika',
  'Wawan and Mimin',
  'Ryan and Yogi' ]
  */

console.log(pairProject(["asep", "baqi", "jajang", "junaedi", "iqbal", "toni"]))
/*
    ["asep and baqi","jajang and iqbal","junaedi and toni"]
    */

    console.log( pairProject(["asep","baqi","jajang","iqbal","toni"]) )
/*
    ["Jumlah murid harus genap"]
*/