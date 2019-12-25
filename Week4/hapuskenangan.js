/**
Hapus Data Dari Object
=====================
Disediakan fungsi hapusKenangan yang memiliki 2 parameter yaitu `Teman` dan `Mantan`
`Teman`: adalah Object yang berisi nama nama teman dengan nomer Whatsapp-nya
`Mantan`: adalah Object yang berisi nama nama mantan dengan nomer  Whatsapp-nya
Tugas kamu adalah cek, jika ada Mantan didalam Object teman, maka hapus data mantan tersebut dari object teman
# Kondisi khusus
- Jika Tidak punya teman (Objek teman kosong) maka kembalikan response "Aku ndak punya temannnn..."
- Jika Tidak punya mantan (Objek mantan kosong) maka kembalikan response "Aku ndak punya mantannn..."
- Jika Semua data dalam object Mantan ADA didalam object teman kembalikan response "Semua Mantan ternyata teman..."
CONSTRAINTS
============
- DILARANG sambil flashback
    *Kalau flash sale, #gpp -Sutejo Sigulangbatu, 2k19
*/
function hapusKenangan(Teman, Mantan){
	// CODE DISINI
	//obj teman kosong
	if(!Object.keys(Teman).length) {
		return "Aku ndak punya temen"
	}

	//obj teman kosong
	if(!Object.keys(Mantan).length) {
		return "Aku ndak punya mantan"
	}

	for( var key in Teman) {
		for(var key1 in Mantan) {
			if(key==key1) {
				delete Teman[key]
			}
		}
		if(!Teman[key]) {
			return `Ternyata semua mantan adalah teman`
		}
	}
	return [Teman,Mantan]
}
// TEST CASES
console.log(hapusKenangan({"Iyem": "092103192", "Markonah": "0812938192", "Minah": "0182039120"}, 
{"Sarinah": "0192309123", "Marimar": "021390213", "Iyem": "092103192"}));
/*
	[
		{"Markonah": "0812938192", "Minah": "0182039120"},
		{"Sarinah": "0192309123", "Marimar": "021390213", "Iyem": "092103192"}
	]
*/
console.log(hapusKenangan({"Maliqa": "02839128"}, {"Markonah": "0812938192", "Iyem": "092103192", "Minah": "0182039120"}));
/*
	[
		{ Maliqa: '02839128' },
		{ Markonah: '0812938192', Iyem: '092103192', Minah: '0182039120' }
	]
*/
console.log(hapusKenangan({"Markonah": "0812938192", "Iyem": "092103192", "Minah": "0182039120"}, {"Iyem": "092103192", "Markonah": "0812938192", "Minah": "0182039120"}));
// Semua Mantan ternyata teman...
console.log(hapusKenangan({"Iyem": "092103192", "Markonah": "0812938192", "Minah": "0182039120"}, {"Iyem": "092103192", "Markonah": "0812938192", "Minah": "0182039120"}));
// Semua Mantan ternyata teman...
console.log(hapusKenangan({}, {"Juminten": "0192309123"})); // "Aku ndak punya temannnn..."
console.log(hapusKenangan({"Juminten": "0192309123"}, {})); // "Aku ndak punya mantannn..."
