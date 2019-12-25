/*
=================================
Max Subset Sum
=================================
[INSTRUCTION]
Diberikan array bilangan bulat, tentukan jumlah maksimum bila dua nilai didalamnya dijumlahkan!
[EXAMPLE]
- Bila array adalah [-2, 1, 3, -4, 5], maka nilai maksimum adalah 8 karena dua nilai yang
dapat menghasilkan nilai maksimum adalah 3 + 5
[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift(), sort()
2. dilarang menggunakan regex
*/
function maxSubsetSum(arr) {
  // code disini
  run=true;
  while(run) {
    run=false;
    for(i=0;i<arr.length-1;i++) {
      if(arr[i]<arr[i+1]) {
        [arr[i],arr[i+1]]=[arr[i+1],arr[i]];  
        run=true;
      }
    }
  }
  console.log(arr)
  return arr[0]+arr[1];
}
console.log(maxSubsetSum([-2, 1, 3, -4, 5])); //8
console.log(maxSubsetSum([-1, 2, 5, 7])); //12
console.log(
  maxSubsetSum([
    943,
    3893,
    43,
    33,
    394,
    384843,
    3849464,
    5725474,
    27,
    485947,
    474262
  ])
);
// 9574938