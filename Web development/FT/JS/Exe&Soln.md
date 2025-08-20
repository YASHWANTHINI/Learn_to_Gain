	Questions	Option A	Option B	Correct Answer
1	What will this code do? const newDiv = document.createElement("div"); const newContent = document.createTextNode("Hello World!"); newDiv.appendChild(newContent); document.body.appendChild(newDiv);	The code will throw an error because createElement is used incorrectly.	A div with the text "Hello World!" will be added to the DOM.	B
2	Syntax to select first match of h1 tag	document.querySelector("h1");	document.getElementByTagName("h1");	A
				
3	const div1 = document.getElementById("myId");	TRUE	FALSE	A
	const div2 = document.querySelector("#myId");			
				
	console.log(div1 === div2); // true			
				
4	What will be the typeof obj. const obj = Object.create(null);	null	undefined	B
				
5	const today = new Date();	console prints Date as output	console prints object as output	B
	console.log(typeof today);			
				
6	How to get title of the html page 	document.title()	document.title	B
				
7	How to get current date	const today = new Date();	const today = new Date()	
		console.log(today)	console.log(today.CurrentDate)	A
				
8	What will be the output 			
	const person = { name: "Ramco", id: "corp001",address:{city:"chennai"}}			
	console.log(person.city)	chennai	undefined	b
				
9	What will be the output 			
	const person = { name: "Ramco", id: "corp001"}	corp001	throws error	B
	console.log(person.["id"])			
				
10	syntax to get live collection of html with classname container in js	document.getElementsByClassName('container');	document.querySelectorAll('.container');	A
				
11	Write down the syntax to know the browser's height including scrollbars	document.innerHeight	window.innerHeight	B
				
12	Say True or False			
	const temp1 = {a: 1};	TRUE	FALSE	A
	const temp2 = temp1;			
	temp2.a = 10;			
	console.log(temp2.a) 			
	console prints 10 as output because when you assign an object to a new variable, both variables point to the same object.			
				
13	Expansion of TDZ	Temporary DataAccess Zone	Temporal Dead Zone 	B
				
14	Let and const dwell in TDZ until values assigned. Until then, any access will throw a ReferenceError.	TRUE	FALSE	A
				
15	"=>" is called as ?	fat arrow	arrow function	A
				
16	Rest (...) allows us to represent an indefinite number of arguments as an array. With the help of a rest parameter a function can be called with any number of arguments, no matter how it was defined.	TRUE	FALSE	A
				
17	let arr = [2, 3];	[1,2,3,4]	throws error	A
	let newArr = [1, ...arr, 4]; 			
	console.log(newArr);  //console prints what			
				
18	let arr = [1, 2, 3, 4, 5];			
	let [first, second, ...rest] = arr;	[3,4,5]	[1,2,3,4,5]	A
	what will be stored in rest			
				
19	Say true or false: Spread is for collecting elements from array/ object whereas Rest is for expanding values from array/ object	FALSE	TRUE	A
				
20	console.log(typeof(undefined)) // this throws error instead of printing undefined	FALSE	TRUE	A
