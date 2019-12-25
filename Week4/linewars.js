/*
  ///////////
  oneLineWars
  ///////////

  Function oneLineWars adalah sebuah function yang akan menerima sebuah parameter string
  dan kemudian akan terjadi peperangan di satu line.

  [INFO]
  K ==> 3 power
  Q ==> 2 power
  P ==> 1 power

  [EXAMPLE]
  INPUT:
  KKKQQQQPPP-PPPQQQKKKKPQK
  NOTES:
  - team kiri 20 power, team kanan 27 power
  - pertarungan akan menghabiskan yang terdekat dengan - terlebih dahulu:
    * KKKQQQQ PPP - PPP QQQKKKKPQK
    * KKKQ QQQ - QQQ KKKKPQK
    * KKKQ - KKKK PQK => 1K masih selamat dengan sisa 1 power
    * - KPQK
  
  RELEASE 0: (20 poin)
  Team kanan menang
  RELEASE 1: (40 poin)
  Team kanan menang dan unggul 7 poin atas Team kiri
  RELEASE 2: (40 poin)
  TEAM kanan menang dengan sisa pasukan KPQK

  [RULES]
  1. Hanya boleh menggunakan built in function .push(), .unshift()
*/

function oneLineWarsRelease0(war) {
    // your code here 
    var poinKanan=0
    var poinKiri=0
    var war2=war.split('-') 
    // console.log(war2)
    for(var i=0;i<war2.length;i++) {
        for(var j=0;j<war2[i].length;j++) {
            if(i!==0) {
                if(war2[i][j]=='K') {
                    poinKanan+=3
                }
                else if(war2[i][j]=='Q') {
                    poinKanan+=2
                }
                else {
                    poinKanan+=1
                }
            }
            else {
                if(war2[i][j]=='K') {
                    poinKiri+=3
                }
                else if(war2[i][j]=='Q') {
                    poinKiri+=2
                }
                else {
                    poinKiri+=1
                }
            }
        }
    }
    if(poinKiri<poinKanan) {
        return 'Pemenang adalah timkanan'
    }
    else {
        return 'Pemenang adalah tim kiri'
    }

}

console.log(oneLineWarsRelease0('KKKQQQQPPP-PPPQQQKKKKPQK'))

function oneLineWarsRelease1(war) {
    // your code here 
    var poinKanan=0
    var poinKiri=0
    var sisa=''
    var war2=war.split('-') 
    // console.log(war2)
    for(var i=0;i<war2.length;i++) {
        for(var j=0;j<war2[i].length;j++) {
            if(i!==0) {
                if(war2[i][j]=='K') {
                    poinKanan+=3
                }
                else if(war2[i][j]=='Q') {
                    poinKanan+=2
                }
                else {
                    poinKanan+=1
                }
            }
            else {
                if(war2[i][j]=='K') {
                    poinKiri+=3
                }
                else if(war2[i][j]=='Q') {
                    poinKiri+=2
                }
                else {
                    poinKiri+=1
                }
            }
            if(war2[0][war2.length-1-j]!==war2[1][j]) {
                sisa+=war2[1][j]
            }
        }
    }
    var gap=Math.abs(poinKanan-poinKiri)
    if(poinKiri<poinKanan) {
        return 'Pemenang adalah tim kanan dan unggul '+gap +sisa
    }
    else {
        return 'Pemenang adalah tim kiri dan unggul '+gap+sisa
    }
}

console.log(oneLineWarsRelease1('KKKQQQQPPP-PPPQQQKKKKPQK'))

function oneLineWarsRelease2(war) {
    // your code here 
    
}

console.log(oneLineWarsRelease2('KKKQQQQPPP-PPPQQQKKKKPQK'))