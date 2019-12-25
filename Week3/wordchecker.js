function main(par1, par2, par3){
  //KODE DISINI
  var check=par2.concat(par3);
  for(i=0;i<par1.length;i++) {
      value=false;
      for(j=0;j<check.length;j++) {
          if(par1[i]==check[j]) {
              value=true;
          }
      }
      if(par1.length==check.length) {
          value=true;
      }
      if(!value) {
          return false;
      }
  }
  return value;
}
function main2(par1, par2, par3){
  //KODE DISINI
    hasil = [];
    var check = par2.concat(par3);
    for (i = 0; i < check.length; i++) {
        value = false;
        for (j = 0; j < hasil.length; j++) {
            if (check[i] == hasil[j][0]) {
                hasil[j][1]++;
                value = true;
            }
        }
        if (!value) {
            hasil.push([check[i], 1])
        }
    }

    for (i = 0; i < par1.length; i++) {
        value = false;
        for (j = 0; j < hasil.length; j++) {
            if (par1[i] == hasil[j][0]) {
                hasil[j][1]--;
                value = true;
            }
        }
        if (!value) {
            hasil.push([par1[i], 1])
        }
    }

    sisa=[];
    for (i=0;i<hasil.length;i++) {
        if(hasil[i][1]>0) {
            sisa.push(hasil[i][0]);
        }
    }
    return sisa;
}

// OUTPUT
console.log(main("hacktiv8", "kca8", "htiv")) // true
console.log(main("hacktiv8", "kca8", "hti")) // false
console.log(main("hacktiv8", "kcva8", "hti")) // true
console.log(main2("hacktiv8", "kca8k", "htivh")) // ['k','h'] kelebihan hurufnya
console.log(main2("hacktiv8", "kca8a", "htih")) // [] (edited) 
