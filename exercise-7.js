function hitungJumlahKata(kalimat) {
    var jmlKata = [];
    var tampung = "";
    var opr = ' '
    kalimat += opr
    
    for (var i = 0; i < kalimat.length; i++){
        if (kalimat[i] !== opr){
            tampung += kalimat[i]
        } else if (kalimat[i] === opr && tampung.length > 0) {
            jmlKata.push(tampung)
            tampung = "";
        }
    }
  
    return jmlKata.length;

}

console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5