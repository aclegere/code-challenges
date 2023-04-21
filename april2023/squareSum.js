/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2+2^2+2^2=9 
*/



function squareSum(numbers) {
    const squared = numbers.map(x => x*x); // this will give a new array with squared numbers
    
    let sum = 0;
    squared.map(x => sum += x);

    return sum;
}

/*
I reviewed other solutions and realized it may have been better
to use the reduce method to sum everything up in one step. An alternate solution
would be:

function squareSum(numbers) {
  return numbers.reduce((sum, x) => sum + x*x, 0);
}

initial value is set to zero so the function works for empty arrays,
takeaway is that I need to get more comfortable with the reduce method!
*/