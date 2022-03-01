const evens = [2, 4, 6];
const odds = [1, 3, 5];

// This is an example of spread (...). Spread 'spreads' or 'unpacks' all of the values in an array or object. 
// Spread takes the contents of an array and implants it in an another array without altering the original array:

const moreEvens = [ ...evens, 8, 10]

// console.log('This is the more evens array:', moreEvens)
// console.log('This is still the evens array:', evens)

// Console log output:
// This is the more evens array: [ 2, 4, 6, 8, 10 ]
// This is still the evens array: [ 2, 4, 6 ]

// Without the spread operator, you are creating a nested array:

const evenMoreEvens = [evens, 8, 10]

// console.log('This is the even more evens array (nested):', evenMoreEvens)

// Console log output:
// This is the even more evens array (nested): [ [ 2, 4, 6 ], 8, 10 ]

const people = {
    'JayZ': { shirt: 'goldfish' },
    'Drake': { shirt: 'David Hasselhoff' },
    'JohnMaster': { shirt: 'button down' }
  };
  
  const otherPeople = {
    'Jason': { shirt: 'coffee' },
    'Mimi': { shirt: 'wonder woman' }
  };
  
  const allPeople = {
    ...people,
    ...otherPeople
  };
  
//   console.log(allPeople);

  const letters = {
      a: 1,
      b: 2,
      c: 3
  }

  const moreLetters = {
      d: 4,
      e: 5,
      a: 10
  }

  const arrayValues = [
    'this', 'is', 'not', 'helping'
]

  const allLetters = {
      ...letters,
      g: 20,
      u: 30,
      ...moreLetters,
      ...arrayValues
  }

// Note that the key 'a' is found in both the letters and moreLetters object. In the spread object, allLetters, 'a' is overwritten by the last value it is assigned (in this case 10 from the moreLetters object).

// You can spread arrays inside of objects, but not objects inside of arrays


  console.log(allLetters)

  const letters2 = {
      vowels: {a: 1},
      a: 1,
      b: 2,
      c: 3
  }

  const allLetters2 = {
      ...letters2,
      g: 20
  }

  console.log('letters2:', letters2);
  console.log('allLetters2:', allLetters2);

  // Console Log output:
//   letters2: { vowels: { a: 1 }, a: 1, b: 2, c: 3 }
// allLetters2: { vowels: { a: 1 }, a: 1, b: 2, c: 3, g: 20 }

  allLetters2.vowels.a = 20;

  console.log('letters2:', letters2);
  console.log('allLetters2:', allLetters2);

  // Console Log output:
//   letters2: { vowels: { a: 20 }, a: 1, b: 2, c: 3 }
// allLetters2: { vowels: { a: 20 }, a: 1, b: 2, c: 3, g: 20 }


// Destructuring - allow to access multiple values from an object at once: below we extract the values for the firstName and lastName keys within perons and save them as variables.
 const person = {
     firstName: 'Drake',
     lastName: 'Talley',
     city: 'Memphis'
 }
 
 console.log(person.firstName);

 // Value will be undefined if key does not exist (ex. homeTown below)

 const { firstName, lastName, homeTown } = person;
 
 console.log('This is the value at firstName:', firstName);
 console.log('This is the value at lastName:', lastName);
 console.log('This is the value at homeTown:', homeTown);

 const first = 'Kelley';
 const last = 'Manning';


 // Spread + Destructuring - >
const person2 = {
    first: 'Bobby',
    last: 'Talley',
    city: 'Memphis'
}

const {city, ...other} = person2;

console.log(city);
console.log(other);



