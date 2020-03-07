function pasanganTerbesar(num) {
    var str = String(num)
    var tampung = ''
    var hasil = ''
    var temp = str[0]
    for(var i = 0; i < str.length; i++) {
        if(temp < str[i]) {
            temp = str[i]
        }    
    }
    for(var j = 0; j < str.length; j++) {
        if(temp === str[j]) {
            hasil = str[j] + str[j+1]
            break;
        }
    }
  
    return hasil
}
  
  // TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99