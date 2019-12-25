var students = [
    { nama: "Isni", umur: 18, alamat: 'bandung', hobby: ["makan", "minum"] },
    { nama: 'Aria', umur: 45, alamat: 'jakarta' },
    { nama: 'Arona', umur: 77, alamat: 'tanah kusir' }
]

for (i = 0; i < students.length; i++) {
    console.log('Students| nama: ' + students[i]["nama"] + ", umur: " + students[i]["umur"] + '\n hobby:')

    var hobi = 'tidak ada kehidupan';
    if (students[i]['hobby']) {
        hobi = students[i]['hobby'];
    }

    if (typeof hobi == 'object') {
        for (j = 0; j < hobi.length; j++) {
            console.log('* ' + hobi[j])
        }
    }
    else {
        console.log(hobi)
    }
    console.log("")
}