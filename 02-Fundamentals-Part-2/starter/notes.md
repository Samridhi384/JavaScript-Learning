//use strict mode is to code in secure manner
//do not use quotation before strcit mode otherwise it will not consider it
//you can use in betwwen with new block but that is not point so better to use in beginning
//use to prevent bugs , accidental cases
//it fails silently without letting us know
//it helps to avoid error
strict mode reserves some keywords that might be used in future.
function is not a type like string but a value we can store in variable

we can avoid return in arrow function if 1 line statement is there
statements below return are fully ignored

3 different function types
Function declaration
Function that can be used before it's declared

Function expression
Essentially a function value stored in a variable

Arrow function
Great for a quick one-line functions. Has no this keyword (more later...)

array is not primitive so it is mutable
array is for ordered data only
object is collection of key value pairs
object is for unstructred data
here order of properties not matter

// DOT NOTATION & BRACKET NOTATION
// In Dot, Dot is an operator which will go to this object & retrieve to property with the name specified here.

// In Bracket, we can put any expression that we'd like so we don't have to explicitly write the string here,but instead we can compute it from some operation because remember that an operation is basically an expression. So something that produces a value and so we can put that here, inside the brackets.

any function attached to object is called method

arrays are special kind of objects.
//array is a special type of object so there properties like push , pop etc are same

for loop keeps running while condition is true

continue is for continuing the next iterartion also
and break to break the loop

while loop is more versatile as it only requires a condition so suitable for larger iterations
it is not dependent on any counter value

for loop is good for arrays

concateenation converts + number to string.

other operators convert string to number.

for array : array.length

push method of array returns length of new array

unshift method of array used to add elelments at front

pop method of array remove last elements from array and return popped elements.

shift method remove elements from front.

to check whether any elements is present in array or not, incudes method is required.

in objects, bracket notation is required when we take input from user and it store in some variable x.so we have to write obj[x] instead of obj.x

this method of object is used when we use any properties of object inside object. by this .prop .

we can also create new property using this method.
