var input=5;

baris=(input*2)-1;
// console.log(baris);
num=input;
// console.log(baris);
// console.log(baris/2);
for(i=0;i<baris;i++) {
    kolom='';
    if(i<(input-1)) {//i=0,1,2,3,4
        for(j=input;j>i;j--) {//j=
            kolom+=num; 
        }
        num--;
    }
    else  {
        for(j=1;j<=num;j++) {
            kolom+=num;
            
        }
        num++;
    }
    console.log(kolom);
}
