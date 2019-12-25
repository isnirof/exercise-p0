function steam(arr) {
    var steam={
        gta5: {title: 'Grand Theft Auto V', price: 290000, genre:'action'},
        aco: {title:"Assassin's Creed Odyssey",price:500000,genre:'rpg'},
        csgo:{title: "Counter Strike: Global Offensive ", price: 120000, genre:'first-person shooter'},
        pubg: {title: "Playerunknown's Battlegrounds ", price: 210000, genre:'first-person shooter'},
        mhw: {title: 'Monster Hunter: World', price:250000,genre:'action'}
    }
    var result={} 
    var harga=0;

    for(var i=0; i<arr.length;i++) {
        for(kode in steam) {
            var genre= steam[kode].genre
            if(arr[i]==kode) {
                if(result[genre]==undefined) {
                    result[genre]=[{
                        title: steam[kode].title
                    }]
                }
                else {
                    result[genre].push({title: steam[kode].title})
                }
                harga+=steam[kode].price
            }
        }
    }
    result.subTotal= harga
    
    return result
}


console.log(steam([]))
// {
//   subTotal: 0
// }

console.log(steam(['gta5', 'aco']))
// {
//   action: [{ title: 'Grand Theft Auto' }],
//   rpg: [{title: 'Assassins Creed Odyssey'}],
//   subTotal: 790000
// }

console.log(steam(['aco', 'pubg', 'mhw']))
// {
//   rpg: [{ title: 'Assassins Creed Odyssey'}],
//   'first-person shooter': [{ title: 'Playerunknowns Battlegrounds'}],
//   action: [{ title: 'Monster Hunter: World'}],
//   subTotal: 960000
// }

console.log(steam(['gta5', 'aco', 'pubg', 'csgo', 'mhw']))
// {
//   action: [
//     {
//       title: 'Grand Theft Auto V'
//     }, {
//       title: 'Monster Hunter: World'
//     }
//   ],
//   rpg: [
//     {
//       title: 'Assassins Creed Odyssey'
//     }
//   ],
//   'first-person shooter': [
//     {
//       title: 'Playerunknowns Battlegrounds'
//     }, {
//       title: 'Counter Strike: Global Offensive'
//     }
//   ],
//   subTotal: 1370000
// }