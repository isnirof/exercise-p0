function split (arr,separator) {
  var hasil=[]
  temp=''
  for(var i=0;i<=arr.length;i++) {
    if(arr[i]==separator || i ==arr.length) {
      hasil.push(temp)
      temp=''
    }
    else {
      temp+=arr[i]
    }
  }
  return hasil
}

function nesting(obj) {

  result={}
  for (key in obj) { //looping object input
    data=split(key,'.')
    // console.log(key) 
      if(data.length>1) { // cek apakah hasil split > 1
        if(result[data[0]]==undefined) {
          result[data[0]]={} // data[0]=batch isi {}
        }
        result[data[0]][data[1]]=obj[key] // batch: {name: ....}
        // console.log(result[data[0]][data[1]])
      }
      else {
        result[key]=obj[key] //length hasil split=1, assign biasa ke result
      }
    }
    return result
  }

// console.log(split('batch.number','.'))
console.log(nesting({
  name: 'Bagus',
  'batch.number': 35,
  'batch.name': 'Infinite Fox'
}))
// /* 
// {
//   name: 'Bagus',
//   batch: {
//     number: 35,
//     name: 'Infinite Fox'
//   }
// }
// */

console.log(nesting({
  'father.name': 'Suwarno',
  'father.age': 50,
  'mother.name': 'Suwarni',
  'mother.age': 48
}))
/*
// {
//   father: {
//     name: 'Suwarno',
//     age: 50
//   },
//   mother: {
//     name: 'Suwarni',
//     age: 48
//   },
// }
// */