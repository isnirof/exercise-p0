var height=3;

for(i=0;i<height;i++) {
    kolom='';
    for (j=height;j>i;j--) {
        kolom+=j;
    }
    console.log(kolom);
}