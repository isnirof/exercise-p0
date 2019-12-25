function treasureHunt(str) {
    // console.log(str);
    var found=0;
    for (i=0; i<str.length;i++) {
        if(str[i]=='!' || str[i]=='@' || str[i]=="#" || str[i]=='$' || str[i]=='%' || str[i]=='*' || str[i]=='(' || str[i]==')' || str[i]=='^'|| str[i]=='&' ) {
            found+=1;
        }
    }
    return found;
}

console.log(treasureHunt("alskdj*lakjsd761^%")); // 3
console.log(treasureHunt("4pa!n!")); // 2
console.log(treasureHunt("bin*ngbin*ang@!*&^")); // 7
console.log(treasureHunt("sAndIkhUsus")); // 0
console.log(treasureHunt("ki(*^hasd*&^%ja(*")); // 9