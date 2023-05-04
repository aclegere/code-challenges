/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted
string, the longest possible, containing distinct letters - each taken only 
once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
  const merge = s1+s2; //concat strings 
  const unique = Array.from(new Set(merge)); //create a new array, use set to keep unique chars
  const sort = unique.sort();//sort in alpha order 
  return sort.join("")//use join to return a string from the sort array 
}

/*

I thought this one liner was pretty clever: 
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')


*/