function mean(num) {
  var sum = 0;
  for (var i = 0; i < num.length; i++) {
    sum += num[i]
  }
  return Math.round(sum / num.length)
}

function rankingAsrama(arr) {
  result = {};
  //create object and input score
  for (var i = 0; i < arr.length; i++) {
    var asrama = arr[i].asrama;
    if (result[asrama] == undefined) {
      result[asrama] = {
        nilai: [arr[i].nilai],
      }
    }
    else {
      result[asrama]["nilai"].push(arr[i]["nilai"])
    }
  }
  //datermine the winner
  var max = 0;
  for (key in result) {
    result[key]["avg"] = mean(result[key]["nilai"])
    if (result[key]['avg'] > max) {
      max = result[key]['avg']
      juara = key
    }
  }

  return `Asrama peringkat pertama adalah ${juara} dengan nilai rata2 ${max}`;

}
var data = [
  { nama: 'Harry Potter', nilai: 80, asrama: 'Griffindor' },
  { nama: 'Cho Chang', nilai: 60, asrama: 'Ravenclaw' },
  { nama: 'Pansy Parkinson', nilai: 70, asrama: 'Slyterin' },
  { nama: 'Dean Thomas', nilai: 50, asrama: 'Griffindor' },
  { nama: 'Ginny Weasley', nilai: 10, asrama: 'Griffindor' },
  { nama: 'Gregory Goyle', nilai: 10, asrama: 'Slyterin' },
  { nama: 'Penelope Clearwater', nilai: 10, asrama: 'Ravenclaw' },
  { nama: 'Tom Marvolo Riddle', nilai: 90, asrama: 'Slyterin' },
];

console.log(rankingAsrama(data)) // Asrama peringkat pertama adalah Slyterin dengan nilai rata-rata 57