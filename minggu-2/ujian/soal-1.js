function targetTerdekat(arr) {
    let indexO = [];
    let indexX = [];
    for (let x = 0; x < arr.length; x++) {
        if(arr[x] === "x"){
        indexX.push(x);
        }
    }
    for (let o = 0; o < arr.length; o++) {
        if(arr[o] === "o"){
        indexO.push(o);
        }
        }
    
    let min = arr.length;
    if (indexX.length === 0 || indexO.length === 0) {
      return 0;
    }
  
    for (let i = 0; i < indexO.length; i++) {
        for (let j = 0; j < indexX.length; j++) {
            let jarak = Math.abs(indexO[i]-indexX[j])
            if (jarak<min) {
                min = jarak;
            }
        }
    }
  
    return min;
  }
  
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  