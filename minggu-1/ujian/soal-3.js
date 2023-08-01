function xo(str) {
    let jumlahX= 0;
    let jumlahO= 0;
    let hasil;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "x") {
            jumlahX++;
        }else if (str[i] === "o") {
            jumlahO++;
        }
    }
    if (jumlahO === jumlahX) {
         hasil = true;
    }else{
        hasil = false;
    }
    const result = {
        totalX: jumlahX,
        totalO: jumlahO,
        sama: hasil
      };
    
      return result;
}
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true