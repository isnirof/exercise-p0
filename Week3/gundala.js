/*
==========================
Gundala Membasmi Kejahatan
==========================
Instruksi
=========
Gundala sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar Gundala tidak dapat menangkap mereka.
Gundala memiliki 3 "nyawa", jika Gundala terkena jebakan maka "nyawa" dari gundala ini akan berkurang.
Keterangan
 - '*' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '#' adalah jalanan biasa
 - 'Begundal' adalah pelaku kejahatan
 Jika nyawa Gundala habis, pertarungan pun akan berakhir. Dan mengembalikan jumlah begundal yang 
 berhasil ditangkap sebelum Gundala gugur.
 [RULES]
  - WAJIB menggunakan PSEUDOCODE
  - DILARANG menggunakan built-in function lain
 */

function basmiKejahatan(arr) {
    nyawa = 3;
    penjahat = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == '*') {
            nyawa--;
        }
        else if (arr[i] == 'Begundal') {
            penjahat++;
        }

        if (nyawa == 0 && penjahat == 0) {
            return `Maaf Gundala, kamu telah gugur. Dan kamu tidak berhasil menangkap para begundal. `
        }
        if (nyawa == 0) {
            return `Maaf Gundala, kamu telah gugur. Kamu hanya berhasil menangkap ${penjahat} begundal`
        }
    }
    return `Selamat Gundala, kamu telah memenangkan peperangan! Kamu telah menangkap ${penjahat} begundal`
}



console.log(basmiKejahatan(['*', '*', '#', '#', 'Begundal', '#', 'Begundal', 'Begundal', '#']));
// Selamat Gundala, kamu telah memenangkan peperangan! Kamu telah menangkap 3 begundal.
console.log('-----------------------');
console.log(basmiKejahatan(['*', '*', 'Begundal', '*', '*', '#', 'Begundal']));
// Maaf Gundala, kamu telah gugur. Kamu hanya berhasil menangkap 1 begundal.
console.log('-----------------------');
console.log(basmiKejahatan(['*', '*', '*', '*', '#', 'Begundal', '*', 'Begundal', '#', 'Begundal']));
// Maaf Gundala, kamu telah gugur. Dan kamu tidak berhasil menangkap para begundal.