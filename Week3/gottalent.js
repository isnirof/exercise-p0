function americanGotTalent (votes) {
    hasil=[];
    for(i=0;i<votes.length;i++) {
        value=false;
        for(j=0;j<hasil.length;j++) {
            if(votes[i]==hasil[j][0]) {
                hasil[j][1]++;
                value=true;
            }
        }
        if(!value) {
            hasil.push([votes[i],1])
        }
    }
    //sort pemenang
    run=true;
    pemenang=0;
    while(run) {
        run=false;
        for(i=0;i<hasil.length-1;i++) {
            if(hasil[i][1]<hasil[i+1][1]) {
                [hasil[i],hasil[i+1]]=[hasil[i+1],hasil[i]]
                run=true;
            }
        }
    }
    //draw condition
    draw = false;
    for (i = 0; i < hasil.length - 1; i++) {
      if (hasil[0][1] == hasil[i + 1][1]) {
        draw = true;   
      }
    }
    if(draw) {
        return `Maaf pemenang gaada`
    }
    else if (!draw) {
      return `Selamat juaranya adalah ${hasil[pemenang][0]} dengan total votes yang diterima ${hasil[pemenang][1]}`;
    }
}
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho']))
// Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho']))
// Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby']))
// Selamat juaranya adalah Arby, dengan total votes yang diterima 2