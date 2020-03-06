
function groupAnimals(animals) {
  for(a = 0; a < animals.length; a++) {
    for(b = a+1; b < animals.length; b++) {
      if(animals[a] > animals[b]) {
        var tukar = animals[a];
        animals[a] = animals[b];
        animals[b] = tukar
      }
    }
  }

  var hasil = [];
  for(var i = 0; i < animals.length; i++) {
    var check = false;
    for(var j = 0; j < hasil.length; j++) {
      if(animals[i][0] == hasil[j][0][0]) {
        hasil[j].push(animals[i])
        check = true;
        break;
      }
    }

    if(!check) {
      hasil.push([animals[i]])
    }

  }
  return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

