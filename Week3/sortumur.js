function sortUmur(data) {
    // input umur
    for (i = 0; i < data.length; i++) {
        tahun = '';
        for (j = 4; j > 0; j--) {
            tahun += data[i][1][data[i][1].length - j];
        }
        umur = 2019 - tahun;
        // console.log(umur)
        data[i].push(umur);
    }
    //sort by umur
    run = true;
    while (run) {
        run = false;
        for (var i = 1; i < data.length; i++) {
            if (data[i][2] > data[i - 1][2]) {
                [data[i], data[i - 1]] = [data[i - 1], data[i]];
                run = true;
            }
            else if (data[i][2]==data[i-1][2]) {
                temp=0;
                temp+=Number(data[i][1][3] + data[i][1][4]);

                temp2=0;
                temp2+=Number(data[i-1][1][3] + data[i-1][1][4]);
                if(temp < temp2){
                    [data[i], data[i - 1]] = [data[i - 1], data[i]];
                    run = true;
                }
                else if(temp === temp2){
                    hari=[];
                    temph=0;
                    temph+=Number(data[i][1][0] + data[i][1][1]);

                    temph2=0;
                    temph2+=Number(data[i-1][1][0] + data[i-1][1][1]);
                    if(temph > temph2){

                    }
                    
                }    
            }
        }
    }

    return data;
    // return bulan;

    // for (var i = 0; i < data.length; i++) {
    //     for (var j = 0; j < data.length - 1; j++) {
    //         var dataArr = data[j][1].split('-')
    //         var jumlah = new Date(dataArr[2], dataArr[1], dataArr[0])
        

    //         var dataArr2 = data[j+1][1].split('-')
    //         var jumlah2 = new Date(dataArr2[2], dataArr2[1], dataArr2[0]);
        
    //         if(jumlah2>jumlah){
    //             var temp = data[j];
    //             data[j] = data[j+1];
    //             data[j+1] = temp; 
    //         }
    //     }

    // }
    // return data
}


var data = [
    ['yusuf', '13-05-1990'],
    ['tony', '13-05-1988'],
    ['adiel', '13-11-1997'],
    ['wika', '13-02-1990'],
    ['hardim', '25-03-1994']
]

console.log(sortUmur(data));