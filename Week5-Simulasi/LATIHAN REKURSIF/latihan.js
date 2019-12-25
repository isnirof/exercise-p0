//FAKTORIAL
function faktorial(n) {
    if(n==1) {
        return 1
    }
    return n*faktorial(n-1)
}

// console.log(faktorial(5))

//FPB
function fpb(n1,n2) {
    if(!n2) {
        return n1
    }
    return fpb(n2,n1%n2)
}
// console.log(fpb(2,8))
// console.log(4%6)

//Range Int
function range(start,end) {
    // result=[]
    // if(start>end) {
    //     return result;
    // }
    // result.push(start+1)
    // return range(start+1,end)
    if(start === end-1){
        return []
    }
    return [start+1].concat(range(start+1,end))
}
// console.log(range(2,9)) //[3,4,5,6,7,8]

// range(2,6)==[3].concat(range(3,6))//[3].concat[4,5]==[3,4,5]
// range(3,6)=[4].concat(range(4,6))//[4].concat[5]=[4,5]
// range(4,6)=[5].concat(range(5,6)) //[5].concat[]=[5]
// range(5,6)=[] --> start==end-1 //[]

//EKSPONENSIAL
function exp(num,a) {
    if(a==1) {
        return num
    }
    return num*exp(num,a-1)
}
// console.log(exp(8,3))

//SUM of ARRAY
function sumArr(arr) {
    if(arr.length==0) {
        return 0
    }
    var sisa=arr.splice(1,arr.length-1)
    // console.log(sisa)
    return arr[0]+sumArr(sisa)
}
// console.log(sumArr([1,2,3,4,5]))

//FIBONACCI
function fibo(n) {
    if(n==0) {
        return 0
    }
    if(n==1) {
        return 1
    }
    return fibo(n-1)+fibo(n-2)
}
// console.log(fibo(6))

//ODD EVEN
function genap(num) {
    if(num==1) {
        return false
    }
    if(num==0) {
        return true
    }
    return genap(num-2)
}
console.log(genap(6))

//REVERSE WORD
function reverse(str) {
    if(str.length==1) {
        return str[0]
    }
    var sisa=str.slice(0,str.length-1)
    return str[str.length-1]+reverse(sisa)
}

// console.log(reverse('isnirof'))
var str='isnirof'
// console.log(str.slice(1,str.length))
var cek= str.slice(1, str.length - 1)
console.log(cek)

//PALINDROM
function palidrom(word) {
    if(word.length==0 || word.length==1) return true

    if(word[0]!==word[word.length-1]) return false
    var sisa=word.slice(1,word.length-1)
    return palidrom(sisa)
}

console.log(palidrom('katak'))
console.log(palidrom('kotak'))
console.log(palidrom('noon'))

//SUMSQUARE
function SumSquares(array) {
    // if(arr.length==0) return 0;

    // return arr[0]*arr[0]*SumSquares(arr.splice(1,arr.length-1))

	if(array.length === 0) return 0;
	let total = 0;

	for(let i = 0; i < array.length; i++){
		if(Array.isArray(array[i])){
			total += SumSquares(array[i]);
		} else {
			total += array[i] * array[i];
		}
		
	}
	return total;
}
// var l = [1,2,3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1,2],3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[[[[[[[[1]]]]]]]]] 
// console.log(SumSquares(l)); // 1 = 1

// l = [10,[[10],10],[10]] 
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

//REPLICATE
function replicate(count,num) {
    if(count<=0) return []

    return [num].concat(replicate(count-1,num))
}
console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []

//asterisk
function astersik2(num) {
    if(num==1) {
        return '*'
    }
    var temp=''
    for(var i=0;i<num;i++) {
        temp+='*'
    }
    return astersik2(num-1)+'\n'+temp
}

console.log(astersik2(8))