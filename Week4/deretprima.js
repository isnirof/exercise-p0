/*

  Diberikan sebuah function prime yang menerima satu parameter bertipe number.
  Output dari function ini adalah mengembalikan sebuah nilai prima yang merupakan
  deret dari input parameter

  CASE 1
  ========
  input: 3
  output: 5

  proses:
  angka 1 bukan prima
  angka 2 adalah prima -> deret ke-1 bilangan prima
  angka 3 adalah prima -> deret ke-2 bilangan prima
  angka 4 bukan prima
  angka 5 adalah prima -> deret ke-3 bilangan prima

  maka output adalah 5 karena merupakan bilangan deret ke-3 prima


  CASE 2
  =========
  input: 6
  output:

  proses:
    angka 1 bukan bilangan prima
    angka 2 adalah bilangan prima -> deret ke-1 bilangan prima
    angka 3 adalah bilangan prima -> deret ke-2 bilangan prima
    angka 4 bukan bilangan prima
    angka 5 adalah bilangan prima -> deret ke-3 bilangan prima
    angka 6 bukan bilangan prima
    angka 7 adalah bilangan prima -> deret ke-4 bilangan prima
    angka 8 bukan bilangan prima
    angka 9 bukan bilangan prima
    angka 10 bukan bilangan prima
    angka 11 adalah bilangan prima -> deret ke-5 bilangan prima
    angka 12 bukan bilangan prima
    angka 13 adalah bilangan prima -> deret ke-6 bilangan prima

  maka output adalah 13 karena merupakan bilangan deret ke-6 prima

*/
function isPrime(num) {
    for(var i=2; i<num;i++) {
        if(num==1) {
            return false;
        }
        if(num==2) {
            return true;
        }
        if(num%i==0) {
            return false;
        }
    }
    return true;
}

function prime(num) {
    // index=num-1;
    var deret=[];
    var angka=2;
    var counter = 0;

    while(counter<num) { //counter adalah untuk isi deret
        if(isPrime(angka)) {
            deret.push(angka)
            counter ++ //index udah diisi oleh angka prima
        }
        angka++ //cek bilangan prima
    }

    return deret[deret.length-1];
}


console.log(prime(3)); //5
console.log(prime(1))
console.log(prime(9))
console.log(prime(4)); //7
console.log(prime(13)); //41
console.log(prime(110)); //601
console.log(prime(666)); //4973