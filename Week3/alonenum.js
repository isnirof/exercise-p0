function alone(arr, loneNum) {
    count = 0;
    index = -1;
    value = false;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == loneNum) {
            count++;
            index = i;
        }
    }
    if (count % 2 !== 0) {
        arr[index] = '*'
    }
    return arr;
}

console.log(alone([1, 2, 1, 4, 1], 1))
// [ 1, 2, 1, 4, '*' ]

console.log(alone([3, 4, 6, 3, 4, 2, 3, 4], 3))
// [ 3, 4, 6, 3, 4, 2, '*', 4 ]

console.log(alone([5, 6, 8, 2, 7, 8, 6, 8, 5, 8, 6], 8))
// [ 5, 6, 8, 2, 7, 8, 6, 8, 5, 8, 6 ]

console.log(alone([5, 5, 5, 9, 1, 8, 2, 1, 8, 6], 5))
// [ 5, 5, '*', 9, 1, 8, 2, 1, 8, 6 ]