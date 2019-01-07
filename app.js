let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// MetaCharacters Symbols
re = /^h/i;       // Must start with
re = /d$/i;       // Must ends with
re = /^hello$/i;  // Must begin and end with 
re = /h.llo/i;  // Matches any ONE character
re = /h*llo/i;  // Matches any character 0 or more times 

// String to match
const str = 'Hello World';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);