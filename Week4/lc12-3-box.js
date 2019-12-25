function soal3(width) {
    var num=width*width;
    var hasil=[]
    for(var i=0;i<width;i++) {
        var kolom=[];
        for(var j=0;j<width;j++) {
            kolom.push(num);
            num--;
        }
        hasil.push(kolom);
    }
    return hasil;

}

console.log(soal3(5)) 
/*
    output: 
    [
        [1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]
    ]
*/

console.log(soal3(4))

/*
    output: 
    [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16],
    ]
*/


/*
result = []
looping ke bawah start=0 i=param, 0+1, 1+4, 1+8
    result.push[i]
    looping ke samping

*/


// time: 12 mins
// NOTES: klo tambah2nya terus2an ke samping dan ke bawah, var nya taro diluar nested looping