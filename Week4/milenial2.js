function getMillenials(data) {
  var result = []
  var obj={}
  for (var i=1; i<data[0].length; i++) {
    // console.log(data[i][1]);
    obj[data[0][i]]=''
  }
  return obj;
}


console.log(getMillenials([
  ['Nama', 'Umur', 'Asal', 'MediaSosial'],
  ['Tobias', 21, 'Jakarta', 'Twitter;Facebook'],
  ['Kevin', 18, 'Bandung', 'Instagram;LinkedIn;Facebook'],
  ['Syldie', 25, 'Malang', 'Google+;Instagram;Twitter'],
  ['Chandra', 31, 'Surabaya', 'Facebook;Instagram;Twitter'],
  ['Fuad', 24, 'Jakarta', '']
]));

console.log(getMillenials([
  ['Nama', 'Umur', 'Asal', 'MediaSosial'],
  ['Awtian', 19, 'Jakarta', 'Twitter;Facebook;LinkedIn'],
  ['Wika', 18, 'Bandung', 'Instagram;LinkedIn;Facebook;Youtube'],
  ['Rama', 23, 'Malang', ''],
  ['Dimas', 31, 'Surabaya', 'Facebook;Instagram;Twitter'],
]));

console.log(getMillenials([]));
// 16 mins