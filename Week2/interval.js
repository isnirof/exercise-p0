function angka(start,end) {
    
deret=start;
i=0;
while (deret+i<=end) {
    deret+=i;
    
    console.log(deret);
    i++;
}
}
    
//     deret=start;
//     for(i=0;i<end;i++) {
//         deret+=i;
//         if(deret+i>=end) {
            
//             return deret;
//         }
//         console.log(deret);
//     }
    
    
// }

console.log(angka(6,27));
