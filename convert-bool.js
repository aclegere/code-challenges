/*
Fundamentals---

Complete the method that takes a boolean value and 
return a "Yes" string for true, or a "No" string for false.

*/

//My solution 

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

/*
Passed all tests on codewars. Realized after that it may be useful to 
check for type as someone writing a function like this would probably
expect you to be passing a boolean value. This could also be written as:

function boolToWord(bool) {
    if(typeof bool !=="boolean" ){
        console.log("expected a boolean value")
    } else {
        return bool ? "Yes" : "No";
    }
}

*/