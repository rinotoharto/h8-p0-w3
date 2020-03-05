
function angkaPalindrome(num){
    for(var i = 0 ; i < num ; i++){
      num++;
      var str = String(num);
      var hasil = '';
      
      for(var j = str.length-1 ; j >= 0 ; j--){
        hasil += str[j];
      }
      if(str === hasil){
        return num;
      }
    }
  }
    
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001