const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const jason = Object.create(personPrototypes, {
  firstName: {value: 'Jason'},
  lastName: {value: 'Paredes'},
  age: {value: 40}
});

console.log(jason);

console.log(jason.greeting());