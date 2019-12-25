function scotlandFlag(num) {
    if(num<3 || num%2==0) {
        return `Invalid input`
    }
    result='';
    for(var i=0; i<num;i++) {
        kolom='';
        for(var j=0;j<num;j++) {
            if(j==i || j==num-1-i) {
                kolom+='*'
            }
            else {
                kolom+=' '
            }
        }
        result+=kolom + '\n'
    }
    return result
}
console.log(scotlandFlag(3))
console.log(scotlandFlag(6))
console.log(scotlandFlag(5))
/*
    '*   *'
    ' * * '
    '  *  '
    ' * * '
    '*   *'
*/

console.log(scotlandFlag(9))
/*
    '*       *'
    ' *     * '
    '  *   *  '
    '   * *   '
    '    *    '
    '   * *   '
    '  *   *  '
    ' *     * '
    '*       *'
*/