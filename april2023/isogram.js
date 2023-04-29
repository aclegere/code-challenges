/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

*/

/*
I had two solutions to this one, I didnt like the idea of 
a nested for loop so I wanted to use arrays and use conditionals
to check for matches. I also included the nested for loop solution
below 
*/

function isIsogram(str) {
    let newArr = [];

    str = str.toLowerCase();
    
    for (let i = 0; i < str.length; i++) {
      if (newArr.includes(str[i])) {
        return false;
      } else {
        newArr.push(str[i]); // add the character to the array, on the next loop we'll check for a match
      }
    }
    return true;
}

/*

function isIsogram(str) {
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

----------------------------------------

There was an additional solution I saw after submitting that was 
incredibly clever using Set:

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

Sets don't allow duplicates so if the set size is not equal 
to the string length then the return will be false. Learned something 
new! 

*/