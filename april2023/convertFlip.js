/*

Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example(Input => Output):

35231 => [1,3,2,5,3]
0 => [0]

*/

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

/*

Admittedly had a harder time at first, searched around google 
and came across the Array.from method. Takes in two arguments,
the first is the objected which will be iterated over and a new
array will be created. The second argument is optional, and will
be called on each element before adding it to the new array. I 
thought about doing something like 'x=>x*1' to see if type 
coercion would take place, but saw that simply passing 'Number'
as the second argument would suffice. 

 */