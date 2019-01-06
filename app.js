const user = {email: 'jdo@egmail.com'};

try {
  // Produce a Reference Error
  //myFunction();

  // Produce a TypeError
  //null.myFunction();

  // Will produce SyntaxError
  //console.log(eval('2+2')); // Evaulate JS

  // Will produce a URIError
  //decodeURIComponent('%');

if(!user.name) {
  //throw 'User has no name';
  throw new SyntaxError('User lost');
}

} catch(e) {
  console.log(`User Error: ${e.message}`);
  //console.log(e.message); // Out put to browser DOM
  //console.log(e.name); // Name of error "Type"
  //console.log(e instanceof ReferenceError); //"True"
  //console.log(e instanceof TypeError); // "False"
} finally {
  console.log('Finally runs reguardless of results...');
}

console.log('Program continues...');