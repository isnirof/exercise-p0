/*
  ////////
  LionWars
  ////////

  Function LionWars adalah suatu function yang akan menerima sebuah parameter string
  dan mengembalikkan bentukkan berdasarkan beberapa release.

  [EXAMPLE]
  INPUT: 'Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'

  RELEASE 0 (20 point)
  OUTPUT: [{ name: Raza }, { name: Sylvana }, { name: Anduin }]
  RELEASE 1 (20 point)
  OUTPUT: [{ name: Raza, power: 1000 }, { name: Sylvana, power: 800 }, { name: Anduin, power: 2000 }]
  RELEASE 2 (20 point)
  OUTPUT: [{ name: Raza, power: 1000, healthPoint: 2000 }, { name: Sylvana, power: 800, healthPoint: 500 }, { name: Anduin, power: 2000, healthPoint: 4000 }]
  RELEASE 3 (20 point)
  OUTPUT: [
    { name: Raza, power: 1000, healthPoint: 2000, ability: Bash },
    { name: Sylvana, power: 800, healthPoint: 500, ability: Heal },
    { name: Anduin, power: 2000, healthPoint: 4000, ability: Paladin }]
  RELEASE 4 (20 point)
  The strongest power is Anduin and the lowest healthPoint is Sylvana

  [RULES]
  1. Hanya boleh menggunakan built in function .push(), .unshift()
*/
function split(arr,separator) {
    var hasilSplit=[]
    var temp=''
    for(var i=0;i<=arr.length;i++) {
        if(arr[i]==separator || i==arr.length) {
            hasilSplit.push(temp)
            temp=''
        }
        else {
            temp+=arr[i]
        }
    }
    return hasilSplit
}
function LionWarsRelease0(info) {
    // your code here
    var result0=[];
    var nama=split(info,',')
    for(var i=0;i<nama.length;i++) {
        var info2=split(nama[i],':')
        // console.log(info2)
        // var detail=split(info2[1],'-')
        // console.log(detail)
        result0.push({nama:info2[0]})
    } 
    return result0
}

console.log(LionWarsRelease0('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));

function LionWarsRelease1(info) {
    // your code here 
    var result1=[];
    var nama=split(info,',')
    for(var i=0;i<nama.length;i++) {
        var info2=split(nama[i],':')
        // console.log(info2)
        var detail=split(info2[1],'-')
        // console.log(detail)
        result1.push({nama:info2[0], power: detail[1] })
    } 
    return result1
}

console.log(LionWarsRelease1('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));

function LionWarsRelease2(info) {
    // your code here 
    var result2=[];
    var nama=split(info,',')
    for(var i=0;i<nama.length;i++) {
        var info2=split(nama[i],':')
        // console.log(info2)
        var detail=split(info2[1],'-')
        // console.log(detail)
        result2.push({nama:info2[0], 
            power: detail[1], 
            healtPoint: detail[2] })
    } 
    return result2

}

console.log(LionWarsRelease2('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));

function LionWarsRelease3(info) {
    // your code here 
    var result3=[];
    var nama=split(info,',')
    for(var i=0;i<nama.length;i++) {
        var info2=split(nama[i],':')
        // console.log(info2)
        var detail=split(info2[1],'-')
        // console.log(detail)
        result3.push({nama:info2[0], 
            power: detail[1], 
            healtPoint: detail[2],
            ability: detail[3]    
        })
    } 
    return result3

}

console.log(LionWarsRelease3('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));

function LionWarsRelease4(info) {
    // your code here 
    var result4=[];
    var nama=split(info,',')
    for(var i=0;i<nama.length;i++) {
        var info2=split(nama[i],':')
        // console.log(info2)
        var detail=split(info2[1],'-')
        // console.log(detail)
        result4.push({nama:info2[0], 
            power: detail[1], 
            healtPoint: detail[2],
            ability: detail[3]    
        })
    } 
    var run=true
    while (run) {
        run=false
        for(var i=0;i<result4.length-1;i++) {
            if(result4[i].healtPoint>result4[i+1].healtPoint) {
                [result4[i].healtPoint,result4[i+1].healtPoint]=
                [result4[i+1].healtPoint,result4[i].healtPoint]
                run=true
            }
        }
    }
    strongHealt=result4[2].nama
    return 'strongest healty ' +strongHealt
}

console.log(LionWarsRelease4('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));