// Person constructor  
function Person(name, dob) {
  this.name = name; 
  //this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

//const jason = new Person('Jason', 40);
//const matthew = new Person('Matthew', 36);

//console.log(matthew.age);

const jason = new Person('Jason', '3/4/1978');
console.log(jason.calculateAge());