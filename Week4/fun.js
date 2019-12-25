function warOfFun(arr) {
    var result={}
    for(var i=0;i<arr.length;i++) {
        result[arr[0][i]]=0
        // console.log('sfhjsfhsj')
    }
    for(var i=0;i<arr.length;i++) {
        for(var j=0;j<arr[i].length;j++) {
            if(arr[i][j]=='fun') {
                result[arr[0][i]]++
            }
        }
    }
    //juara
    var max=0;
    for(nama in result) {
        if(result[nama]>max) {
            max=result[nama]
            var juara=nama
        }
    }
    if(!max) {
        return 'Tidak ada pemenang'
    }
    return `Pemenangnya adalah ${juara} dengan poin ${max}`

}
console.log(warOfFun([
    ['andre', 'toni', 'toti'],
    ['risk', 'fun', 'go'],
    ['humble', 'psyhco', 'strong']
  ]))
  // pemenangnya adalah toni
  
  console.log(warOfFun([
    ['andre', 'toni', 'toti', 'tito'],
    ['fun', 'fun', 'fun'],
    ['fun', 'fun'],
    ['nonfun', 'fun', 'fun', 'fun']
  ]))
  // pemenangnya adalah toni
  
  console.log(warOfFun([
    ['andre', 'toni'],
    ['risk', 'go'],
    ['humble', 'strong']
  ]))
  // mohon maaf tidak ada pemenangnya
  
  console.log(warOfFun([]))
  // mohon maaf tidak ada pemenangnya