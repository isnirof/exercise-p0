function sumTheNumber(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            sum += Number(arr[i]) * 2;
        }
        else {
            sum += Number(arr[i]);
        }
        // console.log(sum)
    }
    return sum;
}

// console.time('Performance Test')
console.log(sumTheNumber('123456')) // 33
// console.timeEnd('Performance Test')
console.log(sumTheNumber('341231')) // 21
console.log(sumTheNumber('1')) // 1
console.log(sumTheNumber('01')) // 2