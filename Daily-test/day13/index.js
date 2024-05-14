// ------------Challenge 1--------
// Use the map method on the numbers array given to add 5 to each number and put the results into a new array. .
//  Output: [6, 6, 7, 8, 10]

const numbers = [1, 1, 2, 3, 5];
const newNumbers = numbers.map((number) => number + 5);
console.log(newNumbers);


//---------- --Challenge 2----------
// Use the map method on the words array to remove the "s" from the end of each word.  Hint: Research the use of the String.slice() method to remove the final letter from a string. There are other String methods that could also be used.
// Output:  ["plane", "train", "automobile"]

const words = ["planes", "trains", "automobiles"];
const newWords = words.map((word) => word.slice(0, -1));
console.log(newWords);


// -------------Challenge 3-----------
// Use the map method on the words array to return an array with just the first letter of each word.
// Output:  ["p", "t", "a"]

const firstLetters = words.map((word) => word[0]);
console.log(firstLetters);

// --------------Challenge 5------------
// Use the filter method on the pets array given . Filter out only the pets that have 5 or less letters in their name. 
// Output: ["dog", "tiger"]

const pets = ["goldfish", "dog", "turtle", "tiger"];
const shortNames = pets.filter((pet) => pet.length <= 5);
console.log(shortNames);

// --------------Challenge 6-------------
// Use the filter method on the same pets array. Filter out only the pets whose names start with the letter 't'.
// Output: ["turtle", "tiger"] 

const tPets = pets.filter((pet) => pet[0] === "t");
console.log(tPets);

// --------------Challenge 7------------
// Use the filter method on the numbers array given . Filter out only the numbers that are greater than 4.
// Output:  [7, 5, 10]

const numbers2 = [1, 4, 3, 5,7, 10];
const greaterThanFour = numbers2.filter((number) => number > 4);
console.log(greaterThanFour);

// --------------Challenge 8-------------
// Filter out only the even numbers. Research the use of the modulo operator: %.
// Output:  [4, 10]

const evenNumbers = numbers2.filter((number) => number % 2 === 0);
console.log(evenNumbers);