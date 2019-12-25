/**
  **********
  HOURGLASS
  **********

  Buatlah sebuah function bernama hourglass. Function hourglass adalah sebuah
  function yang menerima sebuah parameter berupa number dengan asumsi nilai
  parameternya minimal 3. Function akan mereturn string yang memiliki element
  di dalamnya berupa simbol '#' yang nantinya berbentuk jam pasir/hourglass.


  RULES:
**/

function hourglass(num) {
    // Write your code here
    if(num<3) return `Minimum parameter is 3`
    var result=''
    var tinggi=(num*2)-1
    for(var i=0;i<tinggi;i++) {
        var temp=''
        for(var j=0;j<tinggi;j++) {
            if(i<num) {
                if(j>=i && j<=tinggi-1-i) {
                    temp+='#'
                }
                else {
                    temp+=' '
                }
            }
            else {
                if(j<=i && j>=tinggi-1-i) {
                    temp+='#'
                }
                else {
                    temp+=' '
                }
            }
        }
        result+=temp+'\n'
    }
    return result
}


console.log(hourglass(2)); //Minimum parameter is 3

console.log(hourglass(4));
/*
#######
 #####
  ###
   #
  ###
 #####
#######
*/

console.log(hourglass(5));
/*
#########
 #######
  #####
   ###
    #
   ###
  #####
 #######
#########
*/