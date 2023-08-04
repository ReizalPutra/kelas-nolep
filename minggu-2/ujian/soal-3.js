function groupAnimals(animals) {
  animals.sort();
  const groups = [];
  let currentGroup = [];

  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    const firstLetter = animal[0];

    if (currentGroup.length === 0 || currentGroup[0][0] === firstLetter) {
      currentGroup.push(animal);
    } else {
      groups.push(currentGroup);
      currentGroup = [animal];
    }
  }
  if (currentGroup.length > 0) {
    groups.push(currentGroup);
  }

  return groups;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// Output: [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// Output: [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
