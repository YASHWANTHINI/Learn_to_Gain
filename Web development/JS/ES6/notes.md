#### ES6 JS
```
ECMAScript 6 is also known as ES6 and ECMAScript 2015.

```
[Features in ES6](http://es6-features.org/)

Above features may not supported by all the browsers. To overcome this we use a preprocessor called <b>Babel</b>.
#### Babel 
```
  It is a prpeocessor for JS-ECMAScript used for converting ES6/ES6+ codes to backward JS compatible versions (run by old browsers). 
```
#### [Template String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
Template literals are string literals allowing embedded expressions within it. To create we use back tick and expressions are embedded by wrapping them inside ${}. 
Syntax: `${expression}`
| JS | ES6 |
|---|---|
|const name="john"; const greetings = "hello" + name; | const name= "john"; const greetings= `Hello ${name}`; |
| const name =john"; function getname(name) { return name; } const greetings = "Hello+ '' + getname(name); | const name =john"; function getname(name) { return ${name}; } const greetings =`Hello ${getname(name)}`; |
| console.log('string text line 1\n' + 'string text line 2'); | console.log(`string text line 1 string text line 2`); |

#### Variable creation using let and const keyword
```
let - replacement of var keyword.

let usrName = "yash";
let usrcount = "100";

const - used to create for constant values(cant be updated after declaring).
const connectionString = "https://github.io";

//hoisting
console.log(greeting); // cannot access 'greeting' before initialization
let greeting = "Hello";

Its not a ReferenceError, the engine knows about greeting but doesn't allow to use it before its initialized. 
The JS engine doesn't allow us to access the variables declared with let and const before they are declared. This is called Temporal Dead Zone.
```

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
Since JavaScript, initializations are not hoisted.
<b>Variable Hoisting</b>
```
console.log(a); //undefined
var a = 5;

var a;
console.log(a); //undefined
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
Function hoisting only applies to formal function declarations and not to function expression assignments.
```
greeting(); // TypeError: greeting is not a function

console.log(greeting); // undefined

var greeting = function greeting() {
  console.log("Hello!");
};
```
Above, greeting variable was hoisted but it was not initialized with the function reference. The engine throws us a TypeError: greeting is not a function and not ReferenceError: greeting is not defined. The function expression assignments behave like variable hoisting.

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
#### Arrow Function
An arrow function expression is an alternative way to declare a traditional function expression. (=> is called as fat arrow)
|Traditional | Arrow |
|---|---|
| have ‘this’ keyword | have no ‘this’ keyword |
| use function | use const |
| function greetings(name){ return ("hello" +  name); } console.log(greetings('yash')); | const greetings = (name) => {return `Hello ${name}`; } console.log(greetings('yash')); |

If we have only one argumets then we can write as `const greetings = name => `Hello ${name}` ` that is no need of barckets for parameters and single function body has no need of curly braces and return statements.

#### 2. Default parameters
```
You can use default parameters in a function after es6. If never pass the parameter then you can set a default parameter. The default parameter will set if you pass undefined or you didn't pass the parameter otherwise, it is not set.
Code Examples:
function add(a, b=5){
  return a+b;
}
console.log(add(7)) // output, 12
function add(a, b=5){
  return a+b;
}
console.log(add(7, 4)) // output, 11
```

#### 3. IIFE Function
```
IIFE - Immediately Invoked Function Expression
If we defined a function and we want the function will call Immediately, then we can use the IIFE function. IIFE function is an anonymous function and the function will call Immediately. We can’t call the IIFE function another time.
Code Examples:
(function (){
  console.log(5+7); 
})(); // output, 12
```
#### Rest operator
 Rest (...) allows us to represent an indefinite number of arguments as an array. With the help of a rest parameter a function can be called with any number of arguments, no matter how it was defined.

| Traditional | Rest operator |
|---|---|
|const arsum = (num1,num2) => console.log(num1 + num2); arsum(1,2,4,4);| const arsum = (...args) => { let sum = 0; for(let i = 0; i<args.length; i++;) {sum += args[i];} console.log(sum);} arsum(1,2,4,4);|   
| 3 (remaining elements are ignored due to arguments passed) | 11 |

```
const arsum = (num1,num2, ...args) => {
let sum = num1 + num2 ;
for (let i=0; i<args.length; i++){
      sum+= args[i];
  }
  console.log(sum); // 11
}
```
In the above, sum = num1+num2 then sum has 3 as a value then in for loop i = 0. Here i = 0 means args[0] = 4 and not 1. So if you are using rest operator along with variables(num1,num2) in parameter then have to keep rest at the end to avoid error(Uncaught Syntax Error). Because its job is to collect all the remaining arguments into an array. 

#### Spread operator
Spread operator(…) can concat array, object, and string . It is used for array expression or string to be expanded or an object expression to be expanded in places and copy all the elements of an array, all the properties of an object, and all iterable of the string.
To overcome referrence issues.
```
let ar1 = [1,2,3,4,5];
let ar2 = ar1;
ar1.push(6);
console.log(ar1); // [1,2,3,4,5,6]
console.log(ar2); // [1,2,3,4,5,6]

//using spread operator
let ar1 = [1,2,3,4,5];
let ar2 = [...ar1];
ar1.push(6);
console.log(ar1);//[1,2,3,4,5,6]
console.log(ar2); //[1,2,3,4,5]
```
To concat arr, obj
```
let ar1 = [1,2,3,4,5];
let ar2 = [6,7,8,9];
let ar3 = [...ar1,...ar2]; // let ar3 = ar1.concat(ar2); and can concat multiple array
console.log(ar3); // [1,2,3,4,5,6,7,8,9]
let ar3 = [0, ...ar2,...ar1, 10]; // let ar3 = ar1.concat(ar2); and can concat multiple array
console.log(ar3); // [0,6,7,8,9,1,2,3,4,5,10]

let user = {name: 'Yash'}
let id = {uid =1}

let conobj = {...name,...id} // {name: 'Yash',uid =1}

```
For Strings 
```
var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, ...params) === 9

var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ] str gets converted to arr because it expandes the str to char.

var str = [ "hello" ,2 ];
var other = [  ...str ]; // [  "hello" ,2 ]
```
#### 5. isNaN() Method
```
By calling this method isNan() we can check whether the value is a number or not. The method returns a Boolean value (true of false).If the method returns true , it means, the value is not a number 
Code Examples:
console.log(isNaN(12)); // output, false
console.log(isNaN("false")); // output, true
```
-- JavaScript has two types of data types. Primitive and Reference or Objects and Functions.
#### 6. Primitive Values
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
#### 7. Reference or Objects and Functions
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

#### 8. Double Equal(==) vs Triple Equal (===)
```
In javaScript two double equal compare the values. If the value is equal, return true. But triple equal compare the values and compare the data type. If the value is equal and the type is equal, then return true, otherwise, return false. We should use triple equal to compare and it is best practice.
Code Examples:
console.log(5=="5") // output, true
console.log(5==="5") // output, false
console.log(1==true) // output, true
console.log(1===true) // output, false
console.log(0==false) // output, true
console.log(0===false) // output, false
```
#### 9. Ternary Operator
```
Ternary Operator, another way to conditional checking. This is the smallest way for condition. You can write one line condition by using the ternary operator. In ternary operator conditional checking using a question mark (?) and a colon (:).First of all, we write the condition, num>5 then we should use a question mark (?), then we wire the code if the condition is true, then we should use a colon (:), then we wire the code if the condition is false. We can use nested conditions in the ternary operator. The ternary operator should write code the condition is true and false.
Code Examples:
const number1 = 5;
const number2 = 8;
const largest = number1 > number2 ? number1: number2;
console.log(largest) // output, 8
```
#### 10. Destructuring
```
There are two Destructuring, Array and Object.
Object Destructuring: We can destructure object properties in variable and the variable name and property name should be the same. We can destructure any properties in an object. In object Destructuring, we should not maintain any order which property was first or last or any position. In object destructuring, we should declare a variable with curly braces { }. In curly braces, we should write those properties that we want to destructure from an object. Then we should use the assignment operator = and on the right side, we use that object.
Array Destructuring: We can destructure array elements in variable and the variable name and the element don't need to be the same name. In array destructuring, we should maintain the order which element was first or last or any position. In array destructuring, we should declare a variable with an array symbol[]. In the array symbol, we should write elements by an order which element was first or last or any position. If we want the second element and don’t want the first element we can use only a comma. Then we should use the assignment operator = and on the right side, we use that array.
** In Array and object destructuring we can use a spread operator or three dots to destructuring another array of elements in an array variable and another object properties in an object variable.
Code Examples:
// array destructuring
cosnt [num1, num2] = [5, 10];
console.log(num1, num2) // output, 5, 10
cosnt [, num2] = [5, 10];
console.log(num2) // output, 10
cosnt [num1, ...other] = [5, 10, 15];
console.log(num1, other) // output, 5, [10, 15]

// object destructuring
cosnt {num1, num2} = {num1:5, num2:10};
console.log(num1, num2) // output, 5, 10
cosnt {num2, num1} = {num1:5, num2:10};
console.log(num2, num1) // output, 10, 5
cosnt {num2} = {num1:5, num2:10};
console.log(num2) // output, 10
cosnt {num1, ...other} = {num1:5, num2:10, num3: 56};
console.log(num1, other) // output, 5, {num2:10, num3: 56}
```

