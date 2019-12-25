function benderaInggris(num) {
    if(num%2==0) {
        return 'Input harus ganjil!!!!!!'
    }
    var result='';
    for(var i=0; i<num;i++) {
        kolom='';
        for(var j=0;j<num;j++) {
            if(j==(num-1)/2 || i==(num-1)/2) {
                kolom+='*';
            }
            else {
                kolom+=' ';
            }
        }
        result+=kolom + '\n';
    }
    return result;
}
console.log(benderaInggris(9))

/*
    output:
    '    *    ' // 1 -> 9 -> 0123*5678
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/