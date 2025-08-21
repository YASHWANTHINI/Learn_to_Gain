>> window - doc - elements
# Element Selection Methods
- `document.getElementById(id)`: Selects a single element by its unique ID.
- `document.getElementsByClassName(className)`: Selects all elements with a given class name.
- `document.getElementsByTagName(tagName)`: Selects all elements with a given tag name.
- `document.querySelector(selector)`: Selects the first element matching the CSS selector.
- `document.querySelectorAll(selector)`: Selects all elements matching the CSS selector.

```
 document.querySelectorAll('h1').forEach(el => {
  el.textContent = 'My New Text';
});
```

# Element Creation and Modification Methods
- `document.createElement(tagName)`: Creates a new element node.
- `document.createTextNode(text)`: Creates a new text node.
- `parentNode.appendChild(childNode)`: Adds a child node to a parent node.
- `parentNode.insertBefore(newNode, referenceNode)`: Inserts a node before a reference node.
- `node.removeChild(childNode)`: Removes a child node.
- `element.setAttribute(name, value)`: Sets an attribute on an element.
- `element.getAttribute(name)`: Gets an attribute's value.
- `element.removeAttribute(name)`: Removes an attribute.
```
document.querySelector("h1").setAttribute('data-info','Custom Attr');
document.querySelector("h1").getAttribute('data-info');
document.querySelector("h1").removeAttribute('data-info');

```

# Content Manipulation
- `element.innerHTML`: Gets/sets the HTML markup inside an element.
- `element.textContent`: Gets/sets the text content inside an element.

# Event Handling
- `element.addEventListener(event, handler)`: Adds an event listener to an element.
- `element.removeEventListener(event, handler)`: Removes an event listener.

# Traversing the DOM Tree
- `element.parentNode`: Accesses the parent node.
- `element.childNodes`: Accesses child nodes.
- `element.firstChild`: Accesses the first child node.
- `element.lastChild`: Accesses the last child node.
- `element.nextSibling`: Accesses the next sibling node.
- `element.previousSibling`: Accesses the previous sibling node.
# Other Useful Methods/Properties
- `document.body`: Accesses the `<body>` element.
- `document.head`: Accesses the `<head>` element.
- `document.title`: Gets/sets the document's title.
- `document.cookie`: Gets/sets browser cookies related to the document.
- `document.createDocumentFragment()`: Creates a lightweight document fragment to optimize DOM insertion.

>> live col vs match

>>hoisting, tdz, datatypes, obj - notation,spread, rest,methods
>>pass by ref vs value, => , ==, ===

```
pass by value
let a = 10;

function modify(x) {
  x = x + 5;
}

modify(a);
console.log(a); // 10

pass by ref
let obj = { name: "Alice" };

function modify(o) {
  o.name = "Bob";
}

modify(obj);
console.log(obj.name); // "Bob"

let obj = { name: "Alice" };

function modify(o) {
  o = { name: "Charlie" };
}

modify(obj);
console.log(obj.name); // "Alice"
here 
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
** In Array and object destructuring we can use a spread operator or three dots to destructuring another array of elements in an array variable and another object properties in an object variable.

<b>Object Destructuring</b>: We can destructure object properties in variable.The variable name and property name should be the same. We can destructure any properties in an object due to this, we should not maintain any order which property was first or last or any position (var names are mapped to the keys).
In object destructuring, we should declare a variable with curly braces { }. In curly braces, we should write those properties that we want to destructure from an object. Then we should use the assignment operator = and on the right side, we use that object.

```
// object destructuring
const person{
    fName:'Yashwa',
    mName:'Meena',
    lName:'Rajeshwari'
}
let {fName,lName}=person; //variable name and property name should be the same so should not maintain any order which property was first or last or any position.


cosnt {num1, ...other} = {num1:5, num2:10, num3: 56};
console.log(num1, other) // output, 5, {num2:10, num3: 56}

//creating object using destructures
let fName = 'Yashwa';
let mName = 'Meena';
let lName = 'Rajeshwari';

const personObj = {
fName:fName,
mName:mName,
lName:lName
} // key can have different name but value shuld be same as let var name. eg: firstName:fName

console.log(personObj); // {fName:"Yashwa", mName:"Meena", lName:"Rajeshwari"}

//Another way
let fName = 'Yashwa';
let mName = 'Meena';
let lName = 'Rajeshwari';

const personObj = {
fName,
mName,
lName
} // it first create key and then value to store accordingly.

console.log(personObj); // {fName:"Yashwa", mName:"Meena", lName:"Rajeshwari"}
const person = {
  name: "Alice",
  greet() {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet(); // Hello, my name is Alice
```
#Object Methods

```
const updatedItem = {
  categoryType: "NON-CONSUMABLE",
  description: "CUSTOMER GIVEAWAY MUGS",
  lastIssued: "Jul 2024",
  lastReceived: "Jun 2025",
  stockQty: 300,
  unitPrice: 45,
  unitOfMeasure: "PCS",
  totalCost: 13500,
  groupLabel: "Marketing Merchandise",
  productCode: "MKTG0023",
  variantId: "STD",
  locationCode: "Chennai"
};
```
| Method                          | Description                             |
| ------------------------------- | --------------------------------------- |
| `Object.keys(obj)`              | Returns array of property names (keys)  |
| `Object.values(obj)`            | Returns array of property values        |
| `Object.entries(obj)`           | Returns array of `[key, value]` pairs   |
| `Object.assign(target, source)` | Copies properties from source to target |
-----------------------------------------------------------------------------


