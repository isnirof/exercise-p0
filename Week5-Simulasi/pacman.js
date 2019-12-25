/**
 * ======
 * Pacman
 * ======
 * 
 * [Desription]
 * Anda sedang bermain game pacman. Function pacman menerima input berupa
 * array yang merupakan field untuk pacman berjalan dan mengembalikan output
 * berupa array field yang telah ditelusuri oleh Pacman.
 * Disini karakter Pacman direpresentasikan sebagai 'C'.
 * 
 * [Restrictions]
 * Disini ada papan permainan (yang direpresentasikan sebagai array).
 * papan permainan -> ['.', '.', '*', '$']
 * 
 * '.' merupakan jalan biasa yang dapat dilewati pacman
 * '*' merupakan makanan
 * '$' merupakan musuh
 * 
 * Jika pacman bertemu titik, maka dia akan berjalan melewatinya.
 * Jika pacman bertemu makanan, dia akan makan makanan tersebut dan tempat tersebut akan menjadi titik '.'
 * Jika pacman bertemu dengan '$' maka nyawa pacman akan berkurang.
 * Pacman memiliki 2 nyawa, jadi jika nyawa habis (0) maka pacman akan langsung mati.
 * 
 * [Example]
 * 1.
 * @Input = ['.', '*', '$', '*', '*', '*', '*', '*']
 * Pacman menelusuri papan permainan, dia akan bertemu '$' di index 2 hingga
 * nyawa berkurang 1, nyawa pacman masih ada, sehingga:
 * @Output = ['.', '.', '.', '.', '.', '.', '.', 'C']
 * 
 * 2.
 * @Input = ['.', '*', '$', '*', '$', '*']
 * Pacman berjalan terus, tapi dia mati karena bertemu dengan '$' dua kali, maka:
 * @Output = ['.', '.', '.', '.', '.', '*']
 * 
 * 3.
 * @Input = ['.', '*', '*', '$', '$', '*', '*']
 * Disini, ketika pacman berada pada index ke 4 dari array tersebut,
 * dia bertemu dengan '$' dua kali. Maka, pacman di titik tersebut langsung mati, dan
 * papan permainan tidak berubah setelah pacman menyentuh musuh tersebut, sehingga:
 * @Output = ['.', '.', '.', '.' , '.', '*', '*']
 * 
 * [Rules]
 * 1. `Wajib menuliskan pseudocode` atau -50
 * 2. Dilarang menggunakan built-in function:
 *    forEach, map, filter, reduce, indexOf, lastIndexOf, some, every, find, findIndex, includes
 */

function pacman(array) {
  // Write your code here
  if(!array.length) return []
  var nyawa=2
  for(var i=0;i<array.length;i++) {
      if(array[i]=="*") {
          array[i]='.'
      }
      else if(array[i]=='$') {
          array[i]='.'
          nyawa--
      }
      if(nyawa==0) {
          break
      }
  }
  if(nyawa!==0) {
      array[array.length-1]='C'
  }
  return array
}

console.log(pacman(['*', '.', '.', '*', '*', '*']));
// ['.', '.', '.', '.', '.', 'C']

console.log(pacman(['.', '*', '$', '*', '$', '*']));
// ['.', '.', '.', '.', '.', '*']

console.log(pacman(['.', '.', '.', '.', '*', '*', '*', '*']));
// ['.', '.', '.', '.', '.', '.', '.', 'C']

console.log(pacman(['.', '*', '*', '$', '$', '*', '*']));
// ['.', '.', '.', '.' , '.', '*', '*']

console.log(pacman([]));
// []