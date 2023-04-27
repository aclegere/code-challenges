/*

In this little assignment you are given a string of space 
separated numbers, and have to return the highest and lowest 
number.

Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

*/

function highAndLow(numbers) {
  // Convert the space-separated string into an array of numbers
  const newNums = numbers.split(" ").map(Number);//I dont believe .map is necessary but I figured it was better to be certain of type rather than rely on type coercion

  // Find the highest and lowest number in the array
  const max = Math.max(...newNums);
  const min = Math.min(...newNums);

  // Return the highest and lowest numbers as a string
  return `${max} ${min}`;
}
