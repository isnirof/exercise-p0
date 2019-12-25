/*
===============================================
Credential Validator (Anchor with Rocket Score)
===============================================

Nama:________

[INSTRUKSI]

DILARANG MENGGUNAKAN Regex dan Match untuk soal ini!


function credentialValidator akan menerima tiga parameter berupa string, yakni username, email, dan password. Buatlah validasi tiga parameter tersebut dengan syarat berikut:

1. [ANCHOR] Username harus memiliki panjang minimal 4 karakter dan maksimal 20 karakter. Username tidak boleh mengandung simbol '*', '@', '#', '$', '%', '^', '&', dan '*'.

2. [ANCHOR] Password harus memiliki panjang minimal 5 karakter, dan harus mengandung kombinasi minimal 1 angka dan 1 huruf.

3. [ROCKET] Email harus memiliki panjang minimal 6 karakter, harus memiliki hanya satu simbol '@' dan memiliki nama email di sisi kiri simbol '@' dan memiliki domain di sisi kanan simbol '@'. Format: [NAMA EMAIL SISI KIRI]@[NAMA EMAIL].[DOMAIN].  domain harus memiliki hanya satu simbol '.' dimana sisi kiri maksimal 6 karakter, dan sisi kanan maksimal 3 karakter.

function akan me-return nilai true jika semua pengecekan terpenuhi, dan false jika minimal satu syarat tidak terpenuhi. Tambahan score bonus rocket apabila sukses melakukan validasi email.


[CONTOH]

input:
  - username: 'adhywiranata'
  - password: 'test123'
  - email: 'adhywiranata@coding.com'
output: true

input: 
  - username: 'adh'
  - password: 'test123'
  - email: 'adhywiranata@coding.com'

output: false, karena username dibawah 4 karakter

input: 
  - username: 'adhy test 123 testing 321 test 123 321 test'
  - password: 'test123'
  - email: 'adhywiranata@coding.com'

output: false, karena username melebihi 20 karakter

input: erwin@nice.com
input: 
  - username: 'erwin'
  - password: 'testing'
  - email: 'erwin@nice.com'

output: false, karena password tidak mengandung 1 angka sama sekali
*/
function User(name) {
  var sym = '!@#$%^^&*'
  if (name.length >= 4 && name.length <= 20) {
    for (var i = 0; i < name.length; i++) {
      for (var j = 0; j < sym.length; j++) {
        if (name[i] == sym[j]) {
          return false
        }
      }
    }
    return true
  }
  return false
}
// console.log(User('isn'))
function Pass(pwd) {
  var countNum = 0
  var countHuruf = 0
  if (pwd.length >= 5) {
    for (var i = 0; i < pwd.length; i++) {
      if (isNaN(pwd[i])) {
        countHuruf++
      }
      else {
        countNum++
      }
    }
    if (countNum > 0 && countHuruf > 0) {
      return true
    }
    else {
      return false
    }
  }
  return false
}
// console.log(Pass('3testing123'))

function Email(eml) {
  var hasil = []
  var temp = ''
  for (var i = 0; i <= eml.length; i++) {
    if (eml[i] == '@' || eml[i] == '.' || i == eml.length) {
      hasil.push(temp)
      temp = ''
      if (eml[i] == '@' || eml[i] == '.') {
        hasil.push(eml[i])
      }
    }
    else {
      temp += eml[i]
    }
  }
  var countAt = 0
  var countTi = 0
  if (hasil[0].length >= 6) {
    for (var i = 0; i < hasil.length; i++) {
      if (hasil[i] == '@') {
        countAt++
      }
      if (hasil[i] == '.') {
        countTi++
      }
    }
    if (countAt == 1 && countTi == 1) {
      if (hasil[2].length <= 6 && hasil[4].length <= 3) {
        return true
      }
    }
  }
  return false
  // console.log(hasil)
}
// console.log(Email('adhywiranata@codingkoko.com'))
function credentialValidator(username, password, email) {
  // Write your code here
  // console.log(User(username),1)
  // console.log(Pass(password),2)
  // console.log(Email(email),3)

  if(User(username) && Pass(password) && Email(email)) {
    return true
  }
  else {
    return false
  }

}

console.log(
  credentialValidator('adhywiranata', 'test123', 'adhywiranata@coding.com')
);

console.log(
  credentialValidator(
    'adhy test 123 testing 321 test 123 321 test',
    'test123',
    'adhywiranata@coding.com'
  )
);

console.log(credentialValidator('erwin', 'testing', 'erwin@nice.com'));