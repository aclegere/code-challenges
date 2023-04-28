/*
Given a non-empty array of integers, return the result of 
multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/


function grow(x) {
    return x.reduce(
        (acc, currentValue) => acc * currentValue
    );
}

/*
Practiced using reduce array method. I reviewed MDN docs,
The reducer walks through the array element-by-element, at each 
step multiplying the current array value to the result from the 
previous step until there are no more elements to multiply.
*/