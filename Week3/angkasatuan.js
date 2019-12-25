var arr=[1,2,3,3,4,5,5,6,7,7,7,7,7,7,12,12,12];
var hasil=[];

for (var i=0; i<arr.length;i++) {
    found=false;
    for(var j=0; j<hasil.length;j++) {
        if(hasil[j][0]==arr[i]) {
            hasil[j][1]++;
            found=true;
        }
    }
    if(!found) {
        hasil.push([arr[i],1]);
    }
}
console.log(hasil)