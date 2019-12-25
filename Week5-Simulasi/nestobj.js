/* 
Buatlah sebuah function `nesting` yang menerima parameter berupa object literal flat.
Fungsi ini akan merubah object tersebut menjadi bentuk nested, contoh:
{
  'nama.depan': 'Muhammad',
  'nama.belakang': 'Yusuf,
}
Berubah menjadi
{
  nama: {
    depan: 'Muhammad',
    belakang: 'Yusuf'
  }
}
caranya adalah ketika ditemukan awalan properti yang sama (sebelum karakter '.') maka akan dibuat properti baru dari
kepala properti tersebut dan berisi object dengan properti ekornya.
Perhatikan test cases yang diberikan dengan baik untuk memahami bentuk output yang diinginkan!!!
RULES:
  - Dilarang menggunakan built-in function apapun selain Object.keys, Object.values.
  - Diperbolehkan menggunakan operator typeof.
*/
function split(arr, separator) {
    var hasil = []
    var temp = ''
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] == separator || i == arr.length) {
            hasil.push(temp)
            temp = ''
        }
        else {
            temp += arr[i]
        }
    }
    return hasil
}

function nesting(object) {
    // your code here
    var result = {}
    for (key in object) {
        var key2 = split(key, '.')
        //   console.log(objSplit)
        if (key2.length > 1) {
            if (!result[key2[0]]) {
                result[key2[0]] = {}
            }
            result[key2[0]][key2[1]] = object[key]
        }
        else {
            result[key] = object[key]
        }
    }
    return result
}


console.log(nesting({
    name: 'Bagus',
    'batch.number': 35,
    'batch.name': 'Infinite Fox'
}))

/* 
{
  name: 'Bagus',
  batch: {
    number: 35,
    name: 'Infinite Fox'
  }
}
*/


console.log(nesting({
    'father.name': 'Suwarno',
    'father.age': 50,
    'mother.name': 'Suwarni',
    'mother.age': 48
}))

/*
{
  father: {
    name: 'Suwarno',
    age: 50
  },
  mother: {
    name: 'Suwarni',
    age: 48
  },
}
*/