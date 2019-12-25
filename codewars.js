function openOrSenior(data) {
    // ...
    var result = []
    for (var i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1]) {
            result.push('Senior')
        }
        else {
            return result.push('Open')
        }
    }
    return result
}
console.log(openOrSenior([56,8]))
// console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]), ['Open', 'Senior', 'Open', 'Senior'])