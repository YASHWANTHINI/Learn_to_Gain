#### ES6 JS
```
ECMAScript 6 is also known as ES6 and ECMAScript 2015.
```
| Features in ES6|
|---|
| The let keyword |
| The const keyword |
| Arrow Functions |
| JavaScript For/of |
| JavaScript Classes |
| JavaScript Promises |
| JavaScript Symbol |
| Default Parameters |
| Function Rest Parameter |
| Array.find() |
| Array.findIndex() |
| New Math Methods |
| New Number Properties |
| New Number Methods |
| New Global Methods |
| JavaScript Modules |

Above features may not supported by all the browsers. To overcome this we use a preprocessor called <b>Babel</b>.
#### Babel 
```
  It is a prpeocessor for JS.ECMAScript used for converting ES6/ES6+ codes to backward JS compatible versions (run by old browsers). 
```



#### 1. Arrow Function
```
An arrow function expression is an alternative way to declare a traditional function expression. But it has some difference between arrow function and traditional function.
Traditional functions have ‘this’ keyword but arrow functions have no ‘this’ keyword.
Traditional functions have ‘arguments’ but arrow functions have no ‘arguments’.
Traditional functions can use for ‘constructors’ but arrow functions can not use for ‘constructors’.
If we use an arrow function, we should remove the function keyword and set arrow => between the argument and opening body bracket. We can store the function in a variable. If an arrow function writes in one line then we can remove body brackets and the return keyword. If the arrow function has only one argument, then we can remove argument parentheses.
=> Code Examples:
const sum = (a, b)=> {
  return a+b;
} 
console.log(sum(5, 7)) // output, 12
const multiply = (a, b) => a*b 
console.log(multiply(5, 7)) // output, 35
const double = a => a*2
console.log(double(5)) // output, 10
```

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
#### 4. Spread operator
```
Spread operator(…) or three dots are the es6 Features. You can concat array, object, and string by using the spread operator. It is used for array expression or string to be expanded or an object expression to be expanded in places. You can copy all the elements of an array, all the properties of an object, and all iterable of the string.
Code Examples:
const numbers = [1, 8, 5, 15, 10];
consloe.log([...numbers]) // output, [1, 8, 5, 15, 10]
consloe.log([...numbers, 65]) // output, [1, 8, 5, 15, 10, 65]
const user = {name: 'Shuvo'}
consloe.log({...user}) // output, {name: 'Shuvo'}
consloe.log({...user, id: '1'}) // output, {name: 'Shuvo', id: '1'}
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

