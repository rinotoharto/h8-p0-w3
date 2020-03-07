function targetTerdekat(arr) {
    var jarakX = [];
    var jarakO = 0;
    var total = [];
    var hasil = ''
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == 'x') {
            jarakX.push(i);
        } else if(arr[i] == 'o') {
            jarakO += i
        } 

        for(var j = 0; j < jarakX.length; j++) {
            if(jarakO > jarakX[j]) {
                total.push(jarakO - jarakX[j])
            } else if(jarakX[j] > jarakO) {
                total.push(jarakX[j] - jarakO)
            } 
            
        }       

        for(var k = 0; k < total.length; k++) {
            for(var l = k+1; l < total.length; l++) {
                if(total[k] > total[l]) {
                    var tampung = total[k];
                    total[k] = total[l];
                    total[l] = tampung
                }
            }           
        }        

    }
    if(total[0] == undefined) {
        hasil += 0
    } else {
        hasil += total[0]
    }

    return hasil
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2