#### Hoisting
-> The JavaScript engine before parses the code before executing and during the parsing phase it shifts all the variable declaration to the top of the scope. This behavior of the JS engine is called hoisting.
-> In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.
```
//valid code
// program to display value
var a;
a = 5;
console.log(a); // 5
```
Only declarations are hoisted and not initializations.
<b>Variable Hoisting</b>
```
console.log(a); //undefined
var a = 5;

var a;
console.log(a); //undefined during hoisting a has undefined as value. JS is interpreted language.
a = 5;
```
<b>Function Hoisting</b>
when the variable is used inside the function, the variable is hoisted only to the top of the function.
```
var a = 4;
function greet() {
    b = 'hello';
    console.log(b); // hello
    var b;
}
greet(); 
console.log(b);// Uncaught ReferenceError: b is not defined
```
Because b is declared and initialized within a function so it is a local var and console.log gets executed. Due to this it cant be consider as global variable so error is encountered.
<i>distinction between variable hoisting and function hoisting is that a var variable is hoisted and then auto-initialized to undefined whereas a function declaration is hoisted and initialized to its function value.</i>
Function hoisting only applies to formal function declarations and not to function expression assignments.Function expressions are functions which are assigned to a variable explicitly.
```
var addition = sum()
var n1 = 4;
var n2 = 5;
var sum = function(n1,n2){
   return n1+n2;
};
```
In function expressions, these functions are assigned to the variable at runtime. But here ‘sum’ is a variable and thus gets hoisted and is assigned a value of undefined. Therefore during runtime, sum already has a value undefined and hence we get the error that it is not a function. If you use this with let, the error would be “ ReferenceError: sum is not defined”.
```
greeting(); // TypeError: greeting is not a function

console.log(greeting); // undefined

var greeting = function greeting() {
  console.log("Hello!");
};
```
Above, greeting variable was hoisted but it was not initialized with the function reference. The engine throws us a TypeError: greeting is not a function and not ReferenceError: greeting is not defined. The function expression assignments behave like variable hoisting.

<b>var</b>: Only the variable declarations are hoisted to the top of their current scope and assigned a value undefined. Using them before declaration would just return undefined.
<b>let and const</b>: These too are hoisted, however unlike var they are not initialized with any value. Using them before declaration would throw a reference error.

#### How let and const are not hoisted?
```
//variable 
console.log(typeof iDontExist); // undefined
console.log(typeof greeting); // cannot access 'greeting' before initialization
let greeting = "hello";
```
If the greeting variable was not hoisted, we would expect typeof greeting to be undefined similar to typeof iDontExist. This proves that the JS engine knows about our greeting variable but still doesn't allow us to access it just yet due to Temporal Dead Zone.
```
//function
let x = 'outer value';
console.log(x); // outer value
 {
  console.log(x); // cannot access 'x' before initialization
  let x = 'inner value'; // declaration ends TDZ for x
 }
 ```
Accessing the variable x in the inner scope still causes the TDZ error. If the let x = 'inner value'; was not hoisted, it would have logged outer value.

Parsing:

The JavaScript engine first parses the source code and converts it into an internal representation called Abstract Syntax Tree (AST).

Initial Interpretation:

The code is interpreted or run line-by-line initially. At this stage, it’s relatively slow because it’s being executed directly without optimization.

JIT Compilation:

Just-in-time compilation (JIT) comes into play after the code has run a few times. The engine detects hot spots in the code (i.e., frequently executed code) and compiles those parts to machine code at runtime. This results in much faster execution of that part of the code.

In modern JavaScript engines, JIT is a key optimization technique that converts frequently executed code into machine-level instructions as it runs.

Garbage Collection:

JavaScript also relies on garbage collection, which is a memory management technique that happens during runtime to clean up memory that is no longer being used.

#### Rest operator
 Rest (...) allows us to represent an indefinite number of arguments as an array. With the help of a rest parameter a function can be called with any number of arguments, no matter how it was defined.

#### Spread operator
Spread operator(…) can concat array, object, and string . It is used for array expression or string to be expanded or an object expression to be expanded in places and copy all the elements of an array, all the properties of an object, and all iterable of the string.
-- JavaScript has two types of data types. Primitive and Reference or Objects and Functions.
#### Primitive Values
```
There are 7 Primitive data types. They are

Number
String
Boolean
Undefined
Null
Symbol
BigInt
Code Examples:
console.log(typeof(5)) //output, "number"
console.log(typeof('Hello')) //output, "string"
console.log(typeof(true)) //output, "boolean"
console.log(typeof(undefined)) //output, "undefined"
console.log(typeof(null)) //output, "null"
```
#### Reference or Objects and Functions
```
Without primitive data types, javaScript’s other data types are reference data types. They are
Object
Function
Arrays, regular expressions, and dates are the Object type.
Code Examples:
console.log(typeof({name: 'Faysal'})) //output, "object"
console.log(typeof([1, 2, 5])) //output, "object"
console.log(typeof(() => 4+4)) //output, "function"
console.log(typeof(/exp/)) //output, "object"
```
