const drinks = [
  "Soda",
  "Coffee",
  "Lemonade",
  "Iced tea",
  "Juice",
  "Milkshake",
  "Water",
  "Milk",
  "Beer",
  "Martini",
  "Margarita",
  "Wine",
  "Daiquiri",
];

let mDrinks = drinks.filter((drink) => drink.startsWith("M"));
console.log(mDrinks);

// Expected Outcome
// mDrinks = ['Milkshake', 'Milk', 'Martini', 'Margarita']


/////////////////////////////////////////////////////////////////////

const colors = [
  "red",
  "black",
  "white",
  "blue",
  "purple",
  "orange",
  "green",
  "yellow",
];

let newArray = colors.map((color, index) => {
  return { color, index };
});

console.log(newArray);


// Expected Outcome
// [
//   { color: "red", index: 0 },
//   { color: "black", index: 1 },
//   { color: "white", index: 2 },
//   { color: "blue", index: 3 },
//   { color: "purple", index: 4 },
//   { color: "orange", index: 5 }
// ];

///////////////////////////////////////////////////////////
const pets = ["snake", "dog", "cat", "fish", "lizard", "bird", "rabbit"];

let newerArray = pets.map((Pet) => {
  const capitalizedPet = Pet.charAt(0).toUpperCase() + Pet.slice(1);
  return {pets: capitalizedPet};
});

console.log(newerArray);

// Expected Outcome
// pets = ["Snake", "Dog", "Cat", "Fish", "Lizard", "Bird", "Rabbit"];
///////////////////////////////////////////////////////////////