/**
 * ================
 * Balanced Letters
 * ================
 * 
 * [Description]
 * isBalanced merupakan sebuah function yang mengecek apakah jumlah huruf yang diterima sebagai input berjumlah sama.
 * 
 * [Example]
 * @input = abcde
 * karena masing-masing karakter (a-e) hanya muncul sekali, maka:
 * @output = true
 * 
 * @input = abcdeabcde
 * karena masing-masing karakter (a-e) muncul dua kali, maka:
 * @output = true
 * 
 * @input = abcba
 * huruf a & b muncul 2x, namun huruf c hanya muncul sekali, maka:
 * @output = false
 * 
 * [Rules]
 * 1. Dilarang menggunakan regex
 * 2. Dilarang menggunakan built-in function: map, filter, reduce, forEach
 * 3. Dilarang menggunakan built-in function: sort
 * 4. Dilarang menggunakan built-in function: split, slice, splice, join, reverse
 * 5. Dilarang menggunakan built-in function: indexOf, lastIndexOf, includes, some, every, find
 */

function isBalanced(str) {
    // Write your code here
    result={}
    for(var i=0;i<str.length;i++) {
        if(!result[str[i]]) {
            result[str[i]]=1
        }
        else {
            result[str[i]]++
        }
    }
    var checker=result.a
    // console.log(checker)
    for(key in result) {
        
        if(result[key]!==checker) {
            return false
        }
    }
    return true
}

console.log(isBalanced('abcdefghijkl'))
// true
console.log(isBalanced('aabbccddeeff'))
// true
console.log(isBalanced('abcdedcba'))
// false
console.log(isBalanced('hfsjdfngkso'))
// false
console.log(isBalanced('pqqwlearmssipqqwlezoxpjaozvxgcfpqqwlearvjasybinoxpdwfbgchhzvxgcfvybrntmzyjdmtkutzykuoinarmtxpjlpqqwlassidwfbgchhjdkuearsimtzdwfbgchhjdkulezvxpqqwlearmssipqqwlezoxpjaozvxgcfpqqwlearvjasybinoxpdwfbgchhzvxgcfvybrntmzyjdmtkutzykuoinarmtxpjlpqqwlassidwfbgchhjdkuearsimtzdwfbgchhjdkulezvxgcfvybrntykuoinoxpjassidwfbgchhjdkulekuoinoyerntmkulezvxgcfvybrntmmgcfvybrntykuoinoxpjassidwfbgchhjdkulekuoinoyerntmkulezvxgcfvybrntmm'))
// true