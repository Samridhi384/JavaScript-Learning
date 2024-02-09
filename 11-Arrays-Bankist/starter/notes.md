tne fundamental difference between the two of them is that you cannot break out of a forEach loop. So the continue and break statements do not work in a forEach loop at all. So instead, forEach will always loop over the entire array and there is nothing that you can do about it.

innerHTML here is a little bit similar to text content. So remember that now the difference is that text content simply returns the text itself while HTML returns everything, including the HTML. So all the HTML tags will be included.

map method is actually similar to the forEach method that we studied before but with the difference that map creates a brand new array based on the original array.

// NOTE: - WE SHOULD NOT OVERUSE CHAINING
// - We should try to optimize
// we should try to optimize it 18:16 because chaining tons of methods one after the other can cause a real performance issues if we have really huge arrays. So if we have a huge chain of methods, chained one after the other, we should try to compress all the functionality that they do into as little methods as possible.

      // sometimes we create way more map methods then we actually need, where we could just do it all in just one map call. So when you chain methods like this, keep looking for opportunities of keeping up your codes performance.  And second, it is a bad practice in JavaScript  to chain methods that mutate the underlying original array.  And an example of that is the splice or reverse method.

//find method
we can use the Find method to retrieve one element of an array based on a condition.

ust like the Filter method,the Find method also needs a callback function that returns a Boolean.

the Find method will actually not return a new array but it will only return the first element in the array that satisfies this condition. So basically in other words, the first element in the array for which this operation here becomes true.

here are two fundamental differences. First Filter returns all the elements that match the condition while the Find method only returns the first one and second and even more important, the Filter method returns a new array while Find only returns the element itself and not an array

the findIndex method works almost the same way as find. But as the name says, findIndex returns the index of the found element and not the element itself.

every only returns true if all of the elements in the array satisfy the condition that we pass in. So in other words, if every element passes the test in our callback function, only then the every method returns true and that's why the method is called every in the first place.

we have always written the callback function directly as an argument into our array methods, right? However, we could also write this function separately and then pass the function as a callback.
