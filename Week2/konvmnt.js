function konversiMenit(menit) {
    jam=Math.floor(menit/60);
    sisa=menit-(jam*60);
 
    if (jam==0) {
        return `${sisa} menit`;
    }
    else if (sisa==0) {
        return `${jam} jam`;
    }

    else {
      return `${jam} jam ${sisa} menit`;
    }
  
}
  // TEST CASES / DRIVER CODE
  console.log(konversiMenit(63)); // 1 jam 3 menit
  console.log(konversiMenit(124)); // 2 jam 4 menit
  console.log(konversiMenit(53)); // 53 menit
  console.log(konversiMenit(88)); // 1 jam 28 menit
  console.log(konversiMenit(120)); // 2 jam