// soal 1
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

console.log(third+ " " + word);
console.log(word+ " " + fourth+ " " + fifth);
console.log(fifth+ " " + sixth+ " "+seventh );

// soal 2 indexing 1 by 1
let kalimat = "apa nih cuy"
let exampleFirstWord = kalimat[0] + kalimat[1] + kalimat[2];
console.log(`first Word : ${exampleFirstWord}`);

// soal 3 breaking sentence (again) using substring
let kalimat2 = "napa nih cuy";
let exampleFirstWord2 = kalimat2.substring(0,4);
console.log(`first Word contoh 2 : ${exampleFirstWord2}`);

//  soal 4 Breaking Sentence (yet Again) and Count Each Length
let kalimat3 = "wassap bray apakabs";
let exampleFirstWord3 = kalimat3.substring(0, 6);
let panjangKataPertama = exampleFirstWord3.length;
console.log(`kata pertama : ${exampleFirstWord3}, dengan panjang ${panjangKataPertama} huruf`);