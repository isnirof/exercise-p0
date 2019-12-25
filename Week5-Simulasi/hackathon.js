/*
=========
HACKATHON
=========
[INSTRUCTION]
Buatlah suatu aplikasi untuk membuat catatan ekonomi.
[EXAMPLE]
"bank account sudah disediakan"
input: [['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%']]
process:
  bank account => deposit atas nama Jeff Bezos ditambah 5%, menjadi 105000
  bank account => deposit atas nama Larry Page ditambah 10%, mejadi  104500
  bank account => deposit atas nama Jeff Bezos dikurangi 3%, mejadi 101850
  ...dst
output:
  [
    { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' }
  ]
[RULES]
- Dilarang menggunakan .indexOf(), .split(), .filter(), .map(), dan .slice()
*/
function split(arr) {
  var hasil=[]
  temp=''
  for(var i=0;i<arr.length;i++) {
      if(arr[i]=='+' || arr[i]=='-' || arr[i]=='%') {
          hasil.push(temp)
          temp=''
          if(arr[i]=='+' || arr[i]=='-') {
            hasil.push(arr[i])
          }
      }
      else {
          temp+=arr[i]
      }
  }
  return hasil
}
function economyChangeSummary(tradeActivity) {
    var bankAccount = [
      { name: 'Jeff Bezos', deposit: 100000, owner: 'Amazon' },
      { name: 'Jack Ma', deposit: 90000, owner: 'Alibaba' },
      { name: 'Larry Page', deposit: 95000, owner: 'Google' }
    ]
    // YOUR CODE GOES HERE
    var hasil=[]
    for(var i=0;i<tradeActivity.length;i++) {
      for(var j=0;j<tradeActivity[i].length;j++) {
        var name=split(tradeActivity[i][j])
        console.log(name)
      }

    }
    
    
} 
console.log(economyChangeSummary([
  ['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'],
  ['Larry Page+2%', 'Larry Page-1%'],
  ['Jack Ma+4%'],
  ['Larry Page-8%', 'Jack Ma+20%', 'Jeff Bezos-3%', 'Jeff Bezos+8%']
]))
/*
  [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 104500, owner: 'Google' },
  { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 106590, owner: 'Google' },
  { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
  { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
  { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
  { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
  { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
  { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
*/

console.log(economyChangeSummary([
  ['Jeff Bezos-10%']
]))
/*
      [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
    */
//    function economyChangeSummary(tradeActivity) {
//     var bankAccount = [
//       { name: 'Jeff Bezos', deposit: 100000, owner: 'Amazon' },
//       { name: 'Jack Ma', deposit: 90000, owner: 'Alibaba' },
//       { name: 'Larry Page', deposit: 95000, owner: 'Google' }
//     ]
//     // YOUR CODE GOES HERE
//     var result = [];

//     for (var i = 0; i < tradeActivity.length; i++) {
//         var hasilSplit = []
//         for (var j = 0; j < tradeActivity[i].length; j++) {
//             hasilSplit = split(tradeActivity[i][j])
//             for (var k = 0; k < bankAccount.length; k++) {
//                 if (bankAccount[k].name == hasilSplit[0]) {
//                     if (hasilSplit[1] == '+') {
//                         bankAccount[k].deposit = bankAccount[k].deposit + (bankAccount[k].deposit *  hasilSplit[2] / 100)
//                     } else {
//                         bankAccount[k].deposit = bankAccount[k].deposit - (bankAccount[k].deposit *  hasilSplit[2] / 100)
//                     }

//                     result.push({
//                         name: bankAccount[k].name,
//                         deposit: bankAccount[k].deposit,
//                         owner: bankAccount[k].owner,
//                     })
//                 }
//             }
//         }
//     }
    
//     return result;
// } 