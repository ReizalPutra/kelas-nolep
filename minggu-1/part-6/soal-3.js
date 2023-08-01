console.log('Perulangan dengan pertambahan 2:');
for (let i = 1; i <= 100; i += 2) {
  if (i % 3 === 0) {
    console.log(`${i} kelipatan 3`);
  }
}

console.log('\nPerulangan dengan pertambahan 5:');
for (let i = 1; i <= 100; i += 5) {
  if (i % 6 === 0) {
    console.log(`${i} kelipatan 6`);
  }
}

console.log('\nPerulangan dengan pertambahan 9:');
for (let i = 1; i <= 100; i += 9) {
  if (i % 10 === 0) {
    console.log(`${i} kelipatan 10`);
  }
}
