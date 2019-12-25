function richestGroupDynamic(groups) {
    final = [];
    for (iter=0;iter<groups.length;iter++) {
        hasil=[];
        for(i=0;i<groups[iter].length;i++) {
            value=false;
            for(j=0;j<hasil.length;j++) {
                if(groups[iter][i]==hasil[j][0]) {
                    hasil[j][1]++;
                    value=true;
                    break;
                }
            }
            if(!value) {
                hasil.push([groups[iter][i],1])
            }
        }
        // console.log(hasil)

        //sort pemenang
        run=true;
        // pemenang='';
        while(run) {
            run=false;
            for(i=0;i<hasil.length-1;i++) {
                if(hasil[i][1]<hasil[i+1][1]) {
                    [hasil[i],hasil[i+1]]=[hasil[i+1],hasil[i]];
                    run=true;
                }
            }
        }

        //cek imbang
        tie = false;
        for(i=0;i<hasil.length-1;i++) {
            if (hasil[0][1]==hasil[i+1][1]) {
                tie = true;
            }
        }
        if(!tie) {
          final.push(hasil[0][0])
        }
    }

    return final;
}

var groups = [
  ['A', 'B', 'C'],
  ['A', 'A', 'D', 'D', 'D']
]

var groups1 = [
  ['Z', 'Z'],
  ['B']
]

console.log(richestGroupDynamic(groups));
// console.log(richestGroupDynamic(groups1));