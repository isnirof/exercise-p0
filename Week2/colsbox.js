
// // contoh 1 (drawThreeColsBox(3)):
// // @ $ *
// // $ @ *
// // @ $ *

// // contoh 2 (drawThreeColsBox(5)):
// // @ $ * $ @
// // * @ $ * $
// // @ * @ $ *
// // $ @ * @ $
// // * $ @ * @

function drawSymbolicColsBox(num) {
  // your code here
  count=1;
  for (i=1;i<=num;i++) {
      kolom='';
      for(j=0;j<num;j++) {
        if (count%3==0 ) {
          kolom+='* ';
        } 
        else if(count%2!==0) {
          kolom+='@ ';
        }
        else {
          kolom+='$ ';
        }
        count++;    
      
  }
  console.log(kolom);
  }
}
drawSymbolicColsBox(5)