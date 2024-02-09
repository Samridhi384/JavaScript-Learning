CORS stands for Cross Origin Resource Sharing. And without CORS, we cannot access a third party API from our own code

callback hell is when we have a lot of nested callbacks in order to execute asynchronous tasks in sequence. And in fact, this happens for all asynchronous tasks, which are handled by callbacks.

the json method here is a method that is available on all the response objects that is coming from the fetch function, so all of the resolved values, and indeed this response here is in fact a resolved value. And so therefore it does have the json method attached to it. Now, the problem here is that this json function itself, is actually also an asynchronous functi

Handling rejected promises is an important aspect of programming in JavaScript, especially when dealing with asynchronous operations. When a promise is rejected, it means that the operation it represents has failed or encountered an error.

Here's how you can handle rejected promises:

Use the .catch() method: The ._`catch()_` method is a convenient way to handle a rejected promise. You can chain it to the end of a promise chain to catch any errors that occur. It takes a callback function as an argument, which will be called with the error as the argument.

Use the `try...catch` block: If you are using `async/await` syntax, you can handle a rejected promise using a `try...catch` block. Wrap your `await` statement inside the `try` block and catch any errors in the `catch` block.

Rethrow or propagate the error: Sometimes, you may want to rethrow the error or propagate it to the calling function for further handling. You can achieve this by omitting the `catch` block or rethrowing the error within the `catch` block

Handle multiple promises: If you have multiple promises and want to handle the errors collectively, you can use `Promise.all()` or `Promise.allSettled()` methods. `Promise.all()` rejects immediately if any promise is rejected, while `Promise.allSettled()` waits for all promises to settle and returns an array of results including both fulfilled and rejected promises.

if a timer is set for 5 seconds then it will run in more than or equal to 5 sec due to some callbacks waiting behind will run first

👉 1. Call Stack: JavaScript code execution starts with the call stack, which is a data structure that keeps track of function calls. Whenever a function is called, it's added to the top of the stack, and when a function returns, it's removed from the stack.

👉 2. Web APIs: When an asynchronous operation is encountered (e.g., making an HTTP request or setting a timeout), it's offloaded to the browser's Web APIs. These APIs are provided by the browser or the JavaScript runtime environment and handle tasks outside the JavaScript engine.

👉 3. Callback Queue: Once an asynchronous operation is completed, it's placed in the callback queue (also known as the task queue). The callback queue holds the callbacks or event handlers associated with completed operations.

👉 4. Event Loop: The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first callback from the queue and pushes it onto the call stack for execution. This process is repeated as long as there are events in the queue.

👉 5. Microtasks: In addition to the callback queue, JavaScript also has a separate queue called the microtask queue. Microtasks generally include promises, mutation observers, and other job queues. Microtasks have a higher priority than regular tasks (callbacks) and are processed before the next event loop iteration.

👉 6. Rendering: Alongside the event loop, the browser performs rendering and painting tasks to update the visual representation of the web page. The rendering tasks are interleaved with the event loop to provide a smooth user experience.

event loop ticks is there when callback function is transferred from callback queue to call stack

if one microtask adds a new microtask then that new microtask is also executed before any callbacks from the callback queue. And this means that the microtasks queue can essentially starve the callback queue. Because if we keep adding more and more microtasks, then callbacks in the callback queue can never execute.

//promisifying means to convert the to convert callback based asynchronous behavior to promise based.

IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined 1. It is a design pattern that is used to create a new scope for variables and functions, which helps to avoid naming conflicts and polluting the global namespace 2.

Here is an example of an IIFE:

JavaScript

(function () {
// code here
})();

if one of the promises rejects, then the whole promise.all actually rejects as well. So we say that promise.all short circuits when one promise rejects. So again, because one rejected promise is enough for the entire thing to reject as well

Promise.race, just like all other combinators, 0:21 receives an array of promises and it also returns a promise. 0:27 Now this promise returned by Promise.race 0:30 is settled as soon as one of the input promises settles. 0:36 And remember that settled simply means 0:38 that a value is available, 0:40 but it doesn't matter 0:41 if the promise got rejected or fulfilled. 0:44 And so in Promis.race, 0:47 basically the first settled promise wins the race.
