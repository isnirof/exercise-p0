/**
 * ===================
 * Proxytia BUT Object
 * ===================
 * 
 * [DESCRIPTION]
 * Masih ingat dengan proxitia? Kali ini buatlah sebuah function yang mengecek apakah karakter yang kamu buat
 * sudah valid untuk bermain di proxytia.
 * 
 * [INSTRUCTIONS]
 * 1. fungsi menerima 3 parameter: `name, role, weapon`
 * 2. fungsi akan mengecek apakah role dan senjata yang digunakan sudah valid atau belum
 * 
 * [RULES]
 * 1. `Dilarang menggunakan built-in functions`
 * 2. Asumsi semua parameter selalu terisi
 */


//cek role invalid
//cek weapon invalid
// if true: .......'Role' 'nama', gunakan 'senjata'mu utk bermain
function proxytiaObject(name, role, weapon) {
    var proxytia = {
        ksatria: ['pedang', 'tombak'],
        tabib: ['gada'],
        penyihir: ['tongkat']
    }
    // cek role
    if (!proxytia[role]) {
        return `Role invalid`
    }
    //cek senjata
    var senjata = proxytia[role]

    for (var i = 0; i < senjata.length; i++) {
        if (weapon === senjata[i]) {
            return `Selamat datang di Proxytia ${role} ${name}, gunakan ${weapon}mu untuk bermain.`
        }
    }
    return `Weapon Invalid`
}



console.log(proxytiaObject('Ucup', 'ksatria', 'tombak'))
// Selamat datang di Proxytia ksatria Ucup, gunakan tombakmu untuk bermain.

console.log(proxytiaObject('Icha', 'penyihir', 'pedang'))
// Senjata invalid.

console.log(proxytiaObject('Armedi', 'Programmer', 'tongkat'))
// Role invalid

console.log(proxytiaObject('Stef', 'penyihir', 'tongkat'))
// Selamat datang di Proxytia penyihir Stef, gunakan tongkatmu untuk bermain.