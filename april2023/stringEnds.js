/*
Complete the solution so that it returns true if the first 
argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending) {
  return str.endsWith(ending);
}

/*
Originally I had tried just checking the last character and originally wrote:

let comp1 = str.slice(-1)
let comp2 = ending(-1) 
return comp1 === comp2 ? true:false 
---------------------
This worked for checking the last value in the string but was failing test 
cases where multiple values were being checked. I went to google and discovered 
the endsWith() method:

"The endsWith() method is a built-in method in JavaScript's String object 
that allows you to check if a string ends with a specific substring. 
It takes one required argument, which is the substring to search for, and one 
optional argument which is the length of the substring to search for."

I had never used this so it was a pretty nifty (and handy) find. 
*/