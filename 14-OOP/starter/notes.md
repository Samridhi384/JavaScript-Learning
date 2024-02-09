arrow function does not work with constructor as it does not have its own this keyword

each and every function in JavaScript automatically has a property called prototype. And that includes, of course, constructor functions. Now every object that's created by a certain constructor function will get access to all the methods and properties that we define on the constructors prototype property.

here consider prototype property as prototype of linked objects property

the scope chain  
whenever JavaScript can find a certain variable in a certain scope,it looks up into the next scope and a scope chain and tries to find the variable there.

the prototype chain
whenever JavaScript can find a certain property or method in a certain object it's gonna look up into the next prototype in the prototype chain and see if it can find it there,

So again the prototype chain is pretty similar to the scope chain but instead of working with scopes, it works with properties and methods in objects.

So extending the prototype of a built-in object is generally not a good idea.The first reason is that the next version of JavaScript might add a method with the same name that we are adding, for example this unique, but it might work in a different way. And so your code will then use that new method which, remember, works differently. And then that will probably break your code.

And the second reason why you shouldn't do this is because when you work on a team of developers,then this is really gonna be a bad idea because if multiple developers implement the same method with a different name then that's just going to create so many bugs that it's just not worth doing this.

every object in JavaScript can have setter and getter properties. And we call these special properties assessor properties, while the more normal properties are called data properties.

So getters and setters are basically functions that get and set a value so just as the name says,

from is not a function. And so that is because this from method here is really attached to the entire constructor, so the Array constructor and not to the prototype property of the constructor. And so therefore all the Arrays do not inherit this method. Again because its not on their prototype. Its simply attached to the constructor itself. So Array.from here is basically just a simple function, but its a function that's attached to the Array constructor.

[1,2,3].from() will give error
Array.from(document.querySelectorAll('h1')) will run

here is actually a third way of implementing prototypal inheritance or delegation, as we can also call it. And that third way is to use a function called Object.create, which works in a pretty different way than constructor functions and classes work.
Now, with Object.create, there is still the idea of prototypal inheritance. However, there are no prototype properties involved. And also no constructor functions, and no new operator. So instead, we can use Object.create to essentially manually set the prototype of an object, to any other object that we want.

// That's all the methods that we want the person objects to inherit. & so we put them in a prototype

// And now all we need to do is to actually create a person object with this object here as the prototype. And for that, we can use Object.create.

// We implemented a prototypal inheritance but just in a different way

// So when we use the new operator in constructor functions or classes, it automatically sets the prototype of the instances to the constructors, prototype property. So this happens automatically. And so that's nothing new at this point for you.

// Now, on the other hand, with Object.create, we can set the prototype of objects manually to any object that we want. And in this case, we manually set the prototype of the Steven object to the person proto object. And that's it. Now the two objects are effectively linked through the proto property, just like before. So now looking at properties, or methods in a prototype chain, works just like it worked in function constructors, or classes. And so the prototype chain, in fact, looks exactly the same here.

// he big difference is that we didn't need any constructor function, and also no prototype property at all, to achieve the exact same thing.

the class Syntax hides a lot of the details that are actually happening behind the scenes, because classes are really just a layer of obstruction over constructor functions.

super is basically the constructor function of the parent class.

encapsulation basically means to keep some properties and methods private inside the class so that they are not accessible from outside of the class. Then the rest of the methods are basically exposed as a public interface, which we can also call API.
