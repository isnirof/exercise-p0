/**
Memory Usage Function
=====================
Implementasikan function `memoryUsage` untuk memberikan detail informasi tentang penggunaan memory

Function ini akan menerima satu parameter yaitu `applications`
yang memiliki tipe data array.
Di dalam array `data` terdapat beberapa object yang memiliki 3 keys yaitu
name: Nama aplikasi
kind: Jenis Aplikasi
memory: Penggunaan memory

Tugas kamu adalah membuat laporan penggunaan memory yang dikelompokan berdasarkan jenis aplikasi

# Contoh I/O
Contoh input dan output bisa kamu lihat di test case

# Kondisi khusus
- Jika tidak ada elemen di dalam `applications`, maka kembalikan object seperti ini
// {
//     memoryTerpakai: 0
//     sisaMemory: Kapasitas maksimal memory yang telah disediakan didalam fungsi
// }


CONSTRAINTS
============
- DILARANG menggunakan built-in function apapun!!!
    *karena build in function hanya untuk orang lemah -Jack Marpauang, 2k19
*/


function memoryUsage(applications){
    let maxMemory = 2048;
    var result={
        memoryTerpakai:0,
        sisaMemory:2048
    }
    // Tulis kode disini coeg
    for(var i=0;i<applications.length;i++) {
        result.memoryTerpakai+=applications[i].memory
        if(!result[applications[i].kind]) {
            result[applications[i].kind]=[applications[i].name]
        }
        else {
            result[applications[i].kind].push(applications[i].name)
        }
    }
    result.sisaMemory=maxMemory-result.memoryTerpakai
    if(result.sisaMemory<0) {
        result.sisaMemory=0
    }
    return result

}

// TEST CASES
let aplikasi1 = [
    {
        name: "Adobe Photoshop",
        kind: "multimedia",
        memory: 1024
    },
    {
        name: "Operating System",
        kind: "default app",
        memory: 512
    },
    {
        name: "Sticky Notes",
        kind: "default app",
        memory: 100
    },
];
console.log(memoryUsage(aplikasi1));

// {
//     memoryTerpakai: 1636,
//     sisaMemory: 412,
//     multimedia: [ 'Adobe Photoshop' ],
//     'default app': [ 'Operating System', 'Sticky Notes' ]
// }

console.log('===============================')
let aplikasi2 = [];
console.log(memoryUsage(aplikasi2));

// { memoryTerpakai: 0, sisaMemory: 2048 }

let aplikasi3 = [
    {
        name: "Operating System",
        kind: "default app",
        memory: 512
    },
    {
        name: "Point Blank",
        kind: "game",
        memory: 1536
    },
    {
        name: "Google Chrome",
        kind: "browser",
        memory: 125
    },
    {
        name: "Firefox",
        kind: "browser",
        memory: 150
    }
];
console.log(memoryUsage(aplikasi3));

// {
//     memoryTerpakai: 2323,
//     sisaMemory: 0,
//     'default app': [ 'Operating System' ],
//     game: [ 'Point Blank' ],
//     browser: [ 'Google Chrome', 'Firefox' ],
//     overMemoryInformations: { appsOver: [ 'Google Chrome', 'Firefox' ], memoryOver: 275 }
//   }