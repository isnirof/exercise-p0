var rows=7;

//looping baris
for (i=0;i<rows;i++) {
  
  //Kondisi naik
  if(i<rows/2) {
    kolom='';
    //Loop kolom
    for(j=0;j<=i;j++) {
        if(j%2==0) {
            kolom+='x';
        }
        else {
            kolom+='o';
        }

    }
    console.log(kolom);   
  }

  //Kondisi turun
  else {
    kolom='';
    for(j=0;j<rows-i;j++) {
        if(j%2==0) {
            kolom+='x';
        }
        else {
            kolom+='o';
        }
    }
    console.log(kolom);
  }
}

