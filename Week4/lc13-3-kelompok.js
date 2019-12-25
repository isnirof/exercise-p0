function sort(arr) {
    run=true;
    while (run) {
        run=false;
        for(var i=0; i<arr.length-1;i++) {
            if(arr[i+1]<arr[i]) {
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                run=true;
            }
        }
    }
    return arr;
}
function soal3(hewan) {
    result={};
    hewanSort=sort(hewan)
    // console.log(hewanSort)

    for(var i=0; i<hewanSort.length;i++) {
        var abjad=hewanSort[i][0]
        // console.log(abjad)
        if(result[abjad]==undefined) {
            result[abjad]=[hewanSort[i]]
        }
        else {
            result[abjad].push(hewanSort[i])
        }
    }
    return result
}
console.log(soal3(['Ayam','Kucing','Bebek','Sapi','Babi','Curut','Cacing','Monyet']));
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

console.log(soal3(['Anjing','Kuda','Anoa','Zebra','Lipan','Kudanil','Landak']))

/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/