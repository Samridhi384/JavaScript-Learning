js is a high level , object-oriented , multi paradigm programming language.

concurrency model =
how the js engine handles multiple tasks happening at the same time

why do we need that??
single thread - one task at a time

event loop takes long running tasks , executes them in background and put them back in the main thread once they are finished.

js engine has 2 things
call stacks = when code is executed in form of execution context
heap = where unstructured code is stored in from of object in memory

when you call a function, it gets pushed onto the call stack and then removed once finished

ast = abstract syntax tree
this has nothing to do with dom

During the parsing process, the code is parsed into a data structure called the abstract syntax tree or AST.

This works by first splitting up each line of code
Well, an execution context is an abstract concept.

But I define it basically as an environment

in which a piece of JavaScript is executed.

It's like a box that stores all the necessary information

for some code to be executed.

Such as local variables or arguments passed into a function.

So, JavaScript code always runs inside an execution context.

//arrow function is not used with this keyword and argument objects
they can be used with regular functions

call stack together with memory heap make js engine.
\

//js runs 1 thing at a time as it is single threaded
//global level execution for top level order code
lexical scoping means that the way variables
are organized and accesse
is entirely controlled by the placement of functions
and of blocks in the programs code.
For example, a function that is written inside
another function has access to the variables
of the parent function.

scope means environment where certain variables are declared.
A variable is said to have scope if it exists within a pair of curly braces {}
scope of a variable is basically the entire region of our code, where a certain variable can be accessed

scope chain only works upwards, not sideways.

lexical scoping,which means that the rules of where we can access variables are based on where in the code functions and blocks are written.

the engine looks up in the scope chain until it finds the variable that it's looking for, and this process is called variable lookup.

the scope chain is a one way street. So a scope will never ever have access to the variables of an inner scope, only of outer scopes.
We can also think of the scope chain in a certain scope as being equal to adding together all the variable environments of all the parent scopes.
And finally, we need to keep in mind that the scope chain has nothing to do with the order in which functions were called. So the order of function calls does not affect the scope chain at all.

it's not a problem at all to have many functions with the exact same parameter names, in the same way that it's not a problem to have functions with the same variable names inside of them.

if var is udes before initialization then it will return undefined while others will give error

the this keyword always points to the object that is calling the method.

primitives are number , boolean , string etc

objects created with the object literal, arrays and even functions are all objects.

refrence types = objects,arrays,functions etc.

primtive types are stored in call stacks
refrence types are stored in heaps
