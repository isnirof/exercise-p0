/**
Cari Sultan
=====================
Disediakan fungsi cariSultan yang memiliki sebuah parameter String yaitu `Manusia` 

Tugas kamu adalah menemukan seorang sultan (orang yang memiliki paling banyak uang diparameter Manusia)

# Kondisi khusus
- Jika orang yang memiliki uang terbanyak uangnya masih dibawah 1000000000 (1M), maka kembalikan response
  "Sultannya {nama orang yang duitnya terbanyak}, tetapi masih misqueen"

CONSTRAINTS
============
- DILARANG menggunakan build in function apapun :v no build in build in club
*/
function split(arr,seaprator) {
    hasil=[]
    temp=''
    for(var i=0;i<=arr.length;i++) {
        if(arr[i]==seaprator || i==arr.length) {
            hasil.push(temp)
            temp=''
        }
        else {
            temp+=arr[i]
        }

    }
    return hasil
}

function cariSultan(Manusia){
    // CODE DISINI
    var nama=split(Manusia,'#')
    // console.log(nama)
    var result= {
        nama_sultan:'',
        total_uang: 0
    }
    for(var i=0;i<nama.length;i++) {
        var nama2=split(nama[i],'@')
        // console.log(nama2)
        if(nama2[1]>result.total_uang) {
            result.nama_sultan=nama2[0]
            result.total_uang=nama2[1]
        }
    }
    if(result.total_uang<1000000000) {
        return `Sultannya ${result.nama_sultan}, tetapi masih misqueen`
    }
    else {

        return result
    }
}

// TEST CASES
console.log(cariSultan("Bambang@1000000000#Lesiong@1500000000#Jacky@150000"));
/*
    {nama_sultan: "Lesiong", total_uang: 1500000000}
*/

console.log(cariSultan("Dilan Pros@250000#Harley@0#Tompa@100000"));
/*
    "Sultannya Dilan Pros, tetapi masih misqueen"
*/