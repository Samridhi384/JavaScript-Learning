In JavaScript,all numbers are presented internally as floating point numbers.
So basically, always as decimals,no matter if we actually write them as integers or as decimals.

when JavaScript sees the plus operator, it will do type coercion. So it will automatically convert all the operands to numbers.

the parseInt function actually accepts a second argument, which is the so-called radix. And the radix is the base of the numeral system that we are using. So here we are simply using base 10 numbers. So numbers from zero to nine.

if you get a number as a string from an API, you should not use underscores in there, because then JavaScript will not be able to parse the number correctly out of that string. It's not gonna work as expected and you will get it's not a number,

we have two kinds of timers. First, the set timeout timer runs just once, after a defined time, while the set interval timer keeps running basically forever, until we stop it.

as soon as JavaScript hits timeout function line of code here, it will simply basically keep counting the time in the background, and register this callback function to be called after that time has elapsed, and then immediately, JavaScript will move on to the next line, which is this one, all right. And this mechanism is called Asynchronous JavaScript.

// JS has a new Internationalization API - To easily format numbers & strings according to different languages
// So with this new api, we can make our apps support different languages for users around the world
// Eg: Currencies or dates are represented in a completely different way in europe or in US or in Asia
// There is a lot language specific things that we can with the internationalization API
