function pasanganTerbesar(num) {
    const strNum = num.toString();
    let terbesar = 0;
    for (let i = 0; i < strNum.length; i++) {
        let angkaSekarang = Number(strNum.slice(i, i + 2));
        if (angkaSekarang > terbesar) {
            terbesar = angkaSekarang;
        }
    }
    return terbesar
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99