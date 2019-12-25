function squareNum(rows, sort='ascending') {
    if(sort=='ascending') {
        baris=1;
        for (i=0;i<rows;i++) {
            kolom='';
            for (j=0;j<rows;j++) {
                kolom=kolom+baris;
                baris++;
            } 
            console.log(kolom);
        }
    }
    else if(sort=='descending') {
        baris=rows*rows;
        for (i=0;i<rows;i++) {
            kolom='';
            for(j=0;j<rows;j++) {
                kolom+=baris;
                baris--;
            }
            console.log(kolom);
        }
    }
}
squareNum(5,'descending');