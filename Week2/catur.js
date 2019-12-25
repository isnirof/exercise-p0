function checkerBoard(rows) {
    if(typeof rows!=='number') {
        return 'Invalid';
    }
    else if(rows<0) {
        return 'Invalid';
    }
    else {
        for (i=0;i<rows;i++) {
            kolom='';
            for (j=0;j<rows;j++) {
                if ((i+j)%2==0) {
                    kolom+='*';
                }
                else {
                    kolom+=' ';
                }
            }
            console.log(kolom);
            }
    }
}
  
  console.log(checkerBoard(1))
  // *
//   console.log(checkerBoard(2))
//   // * 
//   //  *
//   console.log(checkerBoard(3))
//   // * *
//   //  *
//   // * *
//   console.log(checkerBoard(4))
//   // * *
//   //  * *
//   // * *
//   //  * *
//   console.log(checkerBoard(5))
//   // * * *
//   //  * *
//   // * * *
//   //  * *
//   // * * *
//   console.log(checkerBoard(-1)) // Invalid
//   console.log(checkerBoard('5')) // Invalid
//   console.log(checkerBoard(false)) // Invalid