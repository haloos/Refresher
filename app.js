// Destructuring Assignment

let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500]; // ... spread operator

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest} = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// Array Destructuring

//const people = ['John', 'Beth', 'Mike'];

//const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse array return from function
function getPeople() {  
  return ['John', 'Beth', 'Mike'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();
console.log(person1, person2, person3);