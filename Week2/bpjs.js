/*
    =======================
    Salary Range Calculator
    =======================

    Buatlah sebuah program sederhana yang menghitung 
    `salaryNett` dan `totalBPJS` yang didapatkan setiap karyawan sesuai dengan 
    Golongan `brutoSalary` nya masing - masing.
    pengertian : 
    - `brutoSalary` adalah gaji kotor
    - `salaryNett` adalah gaji bersih yang didapat karyawan dengan rumus 
    salaryNett` = `brutoSalary` - (`brutoSalary` * `tax`) - ( (`brutoSalary` - (`brutoSalary` * `tax`)) * `BPJS` ) 
    - `totalBPJS` adalah total BPJS yang telah dibayarkan oleh karyawan
    pada bulan ke (`months`) tertentu. rumusnya : 
    `totalBPJS` = ( (`brutoSalary` - (`brutoSalary` * `tax`)) * `BPJS` ) * `months`


    [INSTRUCTION]
    Diketahui jika : 
    `brutoSalary` => 9000000 keatas , maka : golongan I  
    `brutoSalary` => 6000000 - 8999999,  maka : golongan II 
    `brutoSalary` => 3000000 - 5999999, maka : golongan III 
    `brutoSalary` => 1000000 - 2999999,  maka : golongan IV

    Golongan I
    diwajibkan membayar : 
    - `tax` 4% dari `brutoSalary`
    - `BPJS` 5% dari `brutoSalary` setelah dikurangi `brutoSalary` * `tax` 

    Golongan II
    diwajibkan membayar : 
    - `tax` 3% dari `brutoSalary`
    - `BPJS` 4% dari `brutoSalary` setelah dikurangi `brutoSalary` * `tax`

    Golongan III
    diwajibkan membayar :
    - `tax` 2% dari `brutoSalary` 
    - BPJS 3% dari `brutoSalary` setelah dikurangi `brutoSalary` * `tax`

    Golongan IV 
    diwajibkan membayar : 
    - tidak dikenakan `tax`
    - BPJS 2% dari `brutoSalary`

    Jika `brutoSalary` dibawah 1000000 maka outputnya 
    "Gaji anda dibawah standard perusahaan"

    [EXAMPLE]
    diberikan input : 
    brutoSalary = 5000000
    months = 3

    maka outputnya adalah :  
    "netSalary = 4753000, totalBPJS yang telah dibayarkan = 441000"


    **WAJIB MENGGUNAKAN PSEUDOCODE** 

    


    */

    function salaryRange(brutoSalary, months) {
        if(brutoSalary>=9000000) {
            tax=4/100;
            persenbpjs=5/100;
        }
        else if(brutoSalary<9000000 && brutoSalary>=6000000) {
            tax=3/100;
            persenbpjs=4/100;
        }
        else if(brutoSalary<6000000 && brutoSalary>=3000000) {
            tax=2/100;
            persenbpjs=3/100;
        }
        else if(brutoSalary<3000000 && brutoSalary>1000000) {
            tax=0;
            persenbpjs=2/100;
        }
        a=brutoSalary*(1-tax);
        bpjs=a*persenbpjs;
        salary=a-bpjs;
        totalBPJS=bpjs*months;
        return `netSalary = ${salary}, totalBPJS yang telah dibayarkan = ${totalBPJS}`
    }
    console.log(salaryRange(5000000, 3));