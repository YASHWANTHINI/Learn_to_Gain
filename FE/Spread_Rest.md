<h3>Spread</h3>
used to combine properties of array, object and pass props, copy object and manage state.
 ```// Combining two arrays using spread operator
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const combinedArray = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]
// Combining two objects using spread operator
        const object1 = { a: 1, b: 2 };
        const object2 = { c: 3, d: 4 };
        const combinedObject = { ...object1, ...object2 }; // { a: 1, b: 2, c: 3, d: 4 }
// Passing multiple props using spread operator
        const props = { firstName: 'John', lastName: 'Doe' };
        const MyComponent = <Greeting {...props} />;
// Creating a new state based on the previous state using spread operator
        const [state, setState] = useState({ a: 1, b: 2 });
        const updateState = () => {
          setState(prevState => ({ ...prevState, c: 3 }));
        };

         
Alternate to concat array and Object.assign to copy.

Common mistakes
Mutating the state directly with spread: 
Mutating means changing the values of a state object or variable in a way that does not create a new instance of that object or variable. 
this.state.array.push(newElement); -->wrong
instead use useState --> 
this.useState(prevState => ({
  array: [...prevState.array, newElement]
}));

Why Direct Mutation is Problematic?

<b>React's Rendering Mechanism:</b> React relies on immutability to determine when to re-render components.
When state is mutated directly, React may not detect the change, as it uses shallow comparison (like ===) 
to check if the state has changed. If the reference to the state object remains the same, React assumes there is no change and 
skips re-rendering the component, leading to outdated UI states.

<b>Using the Spread Operator for Deep Cloning:</b> Another common mistake is to use the spread operator for deep cloning.
The spread operator only makes a shallow copy of the object or array, meaning that it only copies the top-level properties. 
If the object or array contains nested objects or arrays, these will still be copied by reference, not by value.
<b>Shallow Copy vs Deep Copy</b>
<b>Shallow copy</b>
const orgObj = {address: {city:"LA"}};
const copyObj = {...orgObj} 
const copyObj.address.city = 'UK'
console.log(orgObj.address.city) //output is UK
it will also affect the original structure because both the original and copied structures reference
the same nested object.
<b>Deep Copy</b>
 A deep copy creates a complete copy of an object, including all nested objects and arrays. 
 Changes made to the deep-copied object do not affect the original object.

 const original = {
    name: "Jack",
    address: {
        city: "London"
    }
};

// Create a deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original));

// Modify the nested object in the deep copy
deepCopy.address.city = "Paris";

console.log(original.address.city); // Outputs: "London"

Spread creates shallow copy of object or array. Spread operator cannot handle circular reference which means if an object contains properties that reference itself(directly or indirectly) 
lead to error as it doent have built in logic to handle. 
Deep cloning is computational expensive since process of creating new instances for all nested properties takes more tiem and memory.

<h3>rest</h3>
The rest operator collects multiple elements into a single array. It is used primarily in function parameters to handle variable numbers of arguments or during destructuring assignments.
Use Cases:
Collecting arguments in a function into an array.
Destructuring remaining properties of an object or array.

|Feature|	Spread Operator|	Rest Operator|
|-------|--------------|--------------|
|Purpose|	Expands elements|	Collects elements into an array|
|Usage| Context	Function calls, array/object literals|	Function parameters, destructuring|
|Example|	const newArr = [...oldArr]|	function example(...args) {}|

