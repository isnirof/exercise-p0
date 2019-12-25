function getMillenials(arr) {
    var result = []
    var obj = {}
    for (var i = 0; i < arr.length; i++) {
        // console.log(medsos)
        var medsos=arr[i][3].split(';')
        if (arr[i][1] > 20 && arr[i][1] < 29) {
            obj[arr[0][0]] = arr[i][0]
            obj[arr[0][1]]=arr[i][1]
            obj[arr[0][2]]=arr[i][2]
            obj[arr[0][3]]=medsos
            result.push(obj)
        }
    }
    return result
}
console.log(getMillenials([
    ['Nama', 'Umur', 'Asal', 'MediaSosial'],
    ['Tobias', 21, 'Jakarta', 'Twitter;Facebook'],
    ['Kevin', 18, 'Bandung', 'Instagram;LinkedIn;Facebook'],
    ['Syldie', 25, 'Malang', 'Google+;Instagram;Twitter'],
    ['Chandra', 31, 'Surabaya', 'Facebook;Instagram;Twitter'],
    ['Fuad', 24, 'Jakarta', '']
]));

console.log(getMillenials([
    ['Nama', 'Umur', 'Asal', 'MediaSosial'],
    ['Awtian', 19, 'Jakarta', 'Twitter;Facebook;LinkedIn'],
    ['Wika', 18, 'Bandung', 'Instagram;LinkedIn;Facebook;Youtube'],
    ['Rama', 23, 'Malang', ''],
    ['Dimas', 31, 'Surabaya', 'Facebook;Instagram;Twitter'],
]));

console.log(getMillenials([]));
