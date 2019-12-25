
function balikKata (word) {
  if (word.length === 0) {
    return ''
  } else {
    var sisa = word.slice(0, word.length - 1)
    return word[word.length - 1] + balikKata(sisa)
  }
}

// console.log(balikKata('humble fox'))

function cekPalindrome (word) {
  console.log(word)
  if (word.length === 0 || word.length === 1) {
    return true
  }
  if (word[0] !== word[word.length - 1]) {
    return false
  }
  var sisa = word.slice(1, word.length - 1)
  return cekPalindrome(sisa)
}

// console.log(cekPalindrome('katak'))
// console.log(cekPalindrome('kotak'))
// console.log(cekPalindrome('noon'))