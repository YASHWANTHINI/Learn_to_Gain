<h4>Data types in JS - Primitive types stored in call stack and objects which are reference types stored in heap.
primitive data type - value assigned to var is tightly coupled.
let age = 30;
let data = age
age = 31;
  console.log(age, data) // 31 30

  Reference data type - stores the address of the memory location where the object is stored. Two types of copying the reference data - shallow and deep
  const loc = {address: {city: "uk"}}
  const data = {...loc};
  data.address.city = 'usa';
  console.log(data.address.city, loc.address.city) // usa usa

  data and loc variables address say 001 in call stack contains the value D301 which is the address of heap where values of these will be kept.
call stack
  | Identifier    | address | value |
|----------|---------|-------------|
| loc & data   | 003   | D301 |


Heap

  | address    | value | 
|----------|---------|
| D301   |  {address: {city: "usa"}} |

This is shallow copy. it points to reference address of the object / arr which holds the structure and not element.
Can be done using spread operator, Object.assign(), slice(), Array.from().

![image](https://github.com/user-attachments/assets/9f1058da-0344-4f7d-8756-a651f40a5337)

the line let cpy = Object.assign({}, orgObj) creates shallow copy which means new object cpy created and top-level properties(defined in global scope and are not associated with any specific object) of orgObj copied to cpy. But if any properties is itself an object (reference data type and here it is nested object) then only a reference to that obj is copied. So name:fruit is changed in both. So Shallow will copies the reference for nested objects.nested objects are not actually cloned.

slice() & Array.from()- same as spread and used with array. 
Example 1:
let originalArr = [1,2,3,4,5]
let clonedArr = originalArr.slice();
clonedArr.push(6);
Output:
originalArr = [ 1, 2, 3, 4, 5]
clonedArr = [1, 2, 3, 4, 5, 6]

Example 1:
let originalArr = [1,2,3,4,5]
let clonedArr = Array.from(originalArr);
clonedArr.push(6);
Output:
originalArr = [1, 2, 3, 4, 5]
clonedArr = [1, 2, 3, 4, 5, 6]

<b>Deep Copy | Deep cloning </b>
It duplicates all the propeties of the original obj. Both primitive and reference will allocate new memory locations. So if original(source) becomes non-exist but copied(target) still exisits in memory. So we call it as cloning. copying it to new variable value and not by refering

![image](https://github.com/user-attachments/assets/f39bdbe1-316b-435b-9482-1fdad9b2de78)


const nestedArr = [["1"] ,["2"] ,["3"]];
const nestedCopyWithSpread = [...nestedArr];
console.log(nestedArr[0] === nestedCopyWithSpread[0]); 
// true -- Shallow copy (same reference)

Shallow Copy:
When you create nestedCopyWithSpread using the spread operator ([...]), you are performing a shallow copy of nestedArr.
This means that the top-level array is copied, but the inner arrays (e.g., ["1"], ["2"], ["3"]) are not copied; instead, their references are copied.
Therefore, both nestedArr and nestedCopyWithSpread point to the same inner array.
Result:
When you check nestedArr === nestedCopyWithSpread, it returns true because they reference the same object in memory.


const nestedCopyWithJSON = JSON.parse(JSON.stringify(nestedArr));
console.log(nestedArr[0] === nestedCopyWithJSON[0]);
// false -- Deep copy (different references)

Deep Copy:
When you create nestedCopyWithJSON using JSON.parse(JSON.stringify(nestedArr)), you are performing a deep copy.
This method converts the original array to a JSON string and then parses that string back into a new JavaScript object. As a result, it creates entirely new instances of the inner arrays.
The inner arrays in nestedCopyWithJSON are completely separate from those in nestedArr.
Result:
When you check nestedArr === nestedCopyWithJSON, it returns false because they are different objects in memory, even though their contents may be identical.

== vs ===
== (Loose Equality): This operator performs type coercion, meaning it converts the operands to a common type before making the comparison. If the types of the operands are different, JavaScript will attempt to convert them to the same type.

=== (Strict Equality): This operator does not perform type coercion. It checks both the value and the type of the operands. If they are not of the same type, it returns false.

![image](https://github.com/user-attachments/assets/67e6234d-9b73-4a11-9f9d-33846c088a10)

<b>methods of making a deep copy </b>
JSON.parse/stringify— If you do not use Date, functions, undefined, Infinity, [NaN], RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, sparse Arrays, Typed Arrays or other complex types within your object, a very simple one-liner to deep clone an object.

var clonedObject = JSON.parse(JSON.stringify(originalObject));
Example:
let originalObject = {name: “apple”, price: {chennai: 120}};
let clonedObject = JSON.parse(JSON.stringify(originalObject));
clonedObject.name =”orange”;
clonedObject.price.chennai = “100”;
Output:
clonedObject = {name: “orange”, price: {chennai: 100}}
originalObject = {name: “apple”, price: {chennai: 120}}

// Only some of these will work with JSON.parse() followed by JSON.stringify()
const sampleObject = {
  string: 'string',
  number: 123,
  boolean: false,
  null: null,
  notANumber: NaN, // NaN values will be lost (the value will be forced to 'null')
  date: new Date('1999-12-31T23:59:59'),  // Date will get stringified
  undefined: undefined,  // Undefined values will be completely lost, including the key containing the undefined value
  infinity: Infinity,  // Infinity will be lost (the value will be forced to 'null')
  regExp: /.*/, // RegExp will be lost (the value will be forced to an empty object {})
}

console.log(sampleObject) // Object { string: "string", number: 123, boolean: false, null: null, notANumber: NaN, date: Date Fri Dec 31 1999 23:59:59 GMT-0500 (Eastern Standard Time), undefined: undefined, infinity: Infinity, regExp: /.*/ }
console.log(typeof sampleObject.date) // object

const faultyClone = JSON.parse(JSON.stringify(sampleObject))

console.log(faultyClone) // Object { string: "string", number: 123, boolean: false, null: null, notANumber: null, date: "2000-01-01T04:59:59.000Z", infinity: null, regExp: {} }

// The date object has been stringified, the result of .toISOString()
console.log(typeof faultyClone.date) // string

Lodash — It is a JavaScript library that provides multiple utility functions and one of the most commonly used functions of the Lodash library is the cloneDeep() method. This method helps in the deep cloning of an object and also clones the non-serializable properties which were a limitation in the JSON.stringify() approach.

import _ from "lodash" // Import the entire lodash library
//import { clone, cloneDeep } from "lodash" // Alternatively: Import just the clone methods from lodash
const nestedArr = [["1"] ,["2"] ,["3"]];
const shallowCopyWithLodashClone = _.clone(nestedArr)
console.log(nestedArr[0] === shallowCopyWithLodashClone[0]);
// true -- Shallow copy (same reference)
const deepCopyWithLodashCloneDeep = _.cloneDeep(nestedArray)
console.log(nestedArr[0] === deepCopyWithLodashCloneDeep[0]);
// false -- Deep copy (different reference)

<b>Methods for Deep Comparison:</b>
JSON.stringify() - 

![image](https://github.com/user-attachments/assets/ada73dd2-f8d4-4432-ba19-927fbf1a75e7)

cannot be effectively handled by JSON.stringify()
Objects with circular references.
Functions within objects.
Properties with undefined values.
BigInt values.
Non-serializable types (e.g., Set, Map, Date).
Symbol properties.

For handling complex objects that include any of the above limitations, consider using the following alternatives:
structuredClone():
This built-in function can clone objects including those with circular references and various data types like Date, Set, Map, etc.
javascript
const obj = { date: new Date(), set: new Set([1, 2]) };
const clonedObj = structuredClone(obj);

Libraries:
Use libraries like Lodash with its _.cloneDeep() method to handle deep cloning without losing data integrity.
</h4>
