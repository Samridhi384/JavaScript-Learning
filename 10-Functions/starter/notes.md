Default paramet this only works for parameters that are defined in the list before this one.

when we pass a reference type to a function, what is copied is really just a reference to the object in the memory heap.

passing a primitive type to a function is really just the same as creating a copy like this, outside of the function. So the value is simply copied. On the other hand, when we pass an object to a function, it is really just like copying an object like this. And so whatever we change in a copy will also happen in the original.

the interaction of different functions with the same object can create some issues here.

JavaScript does not have passing by reference, only passing by value, even though it looks like it's passing by reference.

where you can pass a reference to any value, instead of the value itself. This works even with primitives, so you could pass a reference to the value of five, and then the original value, outside of the function, would be changed. And this is called pass by reference.

for javascript
However, that reference itself is still a value. It's simply a value that contains a memory address. So basically we pass a reference to the function, but we do not pass by reference,

first class functions is just a feature that a programming language either has or does not have. All it means is that all functions are values. That's it. There are no first class functions in practice,It's just a concept. There are however higher order functions in practice, which are possible because the language supports first class functions.

why callback function in js ?
the first big advantage of this is that it makes it easy to split up or code into more reusable and interconnected parts.

second and way more important advantage, which is the fact that callback functions allow us to create abstraction.(hide implementation of code detail)

the difference is that bind does not immediately call the function. Instead it returns a new function where this keyword is bound.
So it's set to whatever value we pass into bind.

if all we want is to create a new scope for data privacy. All we need to do, is to just create a block like this, right? There's no need to creating a function to create a new scope.

closure is not a feature that we explicitly use. So we don't create closures manually, like we create a new array or a new function. So a closure simply happens automatically in certain situations, we just need to recognize those situations.

closure makes a function remember all the variables that existed at the function's birthplace essentially, So we can imagine the secure booking as being the birthplace of this function.

the closure basically has priority over the scope chain.
it is an internal property of a function
