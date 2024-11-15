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
Can be done using spread operator, Object.assign().
![image](https://github.com/user-attachments/assets/9f1058da-0344-4f7d-8756-a651f40a5337)



</h4>
