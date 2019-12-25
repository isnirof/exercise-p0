function nilaiKuliah(nama, matkul1, matkul2, matkul3) {
  // Write your code here
  avg= (matkul1+matkul2+matkul3)/3;
  if (avg>=80) {
      return `Selamat ${nama}, grade kamu adalah A, Anda adalah lulusan terbaik`
  }
  else if (avg>=70) {
    return `Selamat ${nama}, grade kamu adalah B, Anda adalah lulusan kedua terbaik`
  }
  else {
    return `${nama}, grade kamu adalah C, Anda lulus`
  }
}

console.log(nilaiKuliah("Adi", 75, 75, 75));
// Selamat Adi, grade kamu adalah B, Anda adalah lulusan kedua terbaik

console.log(nilaiKuliah("Budi", 80, 90, 100));
// Selamat Budi, grade kamu adalah A, Anda adalah lulusan terbaik

console.log(nilaiKuliah("Zira", 40, 50, 60));
// Zira, grade kamu adalah C, Anda lulus