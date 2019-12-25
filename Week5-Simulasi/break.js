/*
================
Break Sentence
================

Name :_____________

[INSTRUCTIONS]

breakSentence adalah sebuah function yang menerima satu parameter berupa string kalimat.
function akan mereturn sebuah array yang berisikan setiap kata di kalimat tesebut.


[CONSTRAINTS]
Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.

[EXAMPLE]
breakSentence('I am so amazed')

output: ['i', 'am', 'so', 'amazed']
*/

function breakSentence(sentence) {
    // Write your code here
    var hasil=[]
    var temp=''
    for(var i=0;i<sentence.length+1;i++) {
        if(sentence[i]==' '||i==sentence.length){
            hasil.push(temp)
            temp=''
        }
        else {
            temp+=sentence[i]
        }
    }
    return hasil
}

console.log(breakSentence('I am so amazed')); // ['I', 'am', 'so', 'amazed' ]
console.log(breakSentence('do something')); // ['do', 'something']
console.log(breakSentence('')); // []
console.log(breakSentence('week4 is so easy')); // ['week4', 'is', 'so', 'easy']
console.log(breakSentence('I can do this with my eyes closed')); // ['I', 'can', 'do', 'this', with', 'my', 'eyes', 'closed']