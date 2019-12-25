/* 
==========
Encrypt Me
==========

[INSTRUCTIONS]
Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

Berikut adalah kamus huruf dari HBI
huruf biasa : abcdefghijklmnopqrstuvwxyz
huruf H8BI  : !@#$%^&*()-+1234567890[]{}

Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

Note:
- Selain karakter huruf biasa maka tidak akan di-translate

[EXAMPLE]
input: dimitri
output: $(1(86(

input: @wtian
output: @[8(!2

[RULES]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
- DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf / .includes!
*/

/*
PSEUDOCODE:
STORE 'kamus' with '!@#$%^&*()-+1234567890[]{}'
STORE 'hasil with string

STORE i with 0
WHILE(i LESS THAN length of input)
  STORE 'index' with 0

  IF(character code (i) of input MORE THAN 96 AND character code (i) of input LESS THAN 123)
    index EQUALS character code (i) MINUS 97
    hasil EQUALS hasil PLUS kamus[index]
  ELSE
    hasil EQUALS hasil PLUS input[i]
  ENDIF

  i++
ENDWHILE

DISPLAY hasil
*/

function encryptMe(input) {
  // your code here
  var kamus = '!@#$%^&*()-+1234567890[]{}';
  var hasil = '';
  for(var i=0;i<input.length;i++) {
      if(input.charCodeAt(i)>=96 && input.charCodeAt(i)<=122) {
          index=input.charCodeAt(i)-97
          hasil+=kamus[index]
      }
      else {
          hasil+=input[i]
      }
  }
  return hasil
}
//a=96,z=122
console.log(encryptMe('dimitri')) // $(1(86(
console.log(encryptMe('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encryptMe('dimitr€€')) // $(1(86€€
console.log(encryptMe('d!mas')) // $!1!7
console.log(encryptMe('@wtian')) // @[8(!2