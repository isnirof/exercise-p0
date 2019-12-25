function kedalamanObject(obj) {
  for (key in obj) {
    if (!Number.isInteger(obj[key])) {
      return 1 + kedalamanObject(obj[key])
    }
  }
  return 1
}
// console.log(kedalamanObject(
// {
//         a : 1,
//         b : 2,
//         c : {
//             z : 8,
//             m: 2,
//             n : {
//                 a : 0,
//                 z : {
//                     j : {
//                         i : 0,
//                         z : 0,
//                         a : 0
//                         }
//                     }
//                 }
//             }
// }
// ))
function deepSum(arr) {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += deepSum(arr[i])
    }
    else {
      sum += arr[i]
    }
  }
  return sum
}
console.log(deepSum([
  [
    [4, 5, 6],
    [9, [1, 2, 10]],
    [9, 4, 3]
  ],
  [
    [4, [14, 31]],
    [9, [10, 18, 12], 20],
    [1, 4, 90]
  ],
  [
    [2, [5, 10]],
    [3, [4, 5]],
    [2, [4, 5], 10]
  ]
])); // 316
console.log(deepSum([
  [
    [20, [10]],
    [15],
    [1], 1
  ],
  [
    [1, 2, 3, [4, 5, [6, [7]]], 8, 9, [10, 11]],
    [2], 9,
    [11]
  ],
  3,
  [
    [5, 1],
    [1, [5, 3]],
    [[1]]
  ],
  [
    [[2]]
  ]
])); // 156 
console.log(deepSum([])); // No number