### Basic Props Types
Why interface - to define the structure of objects. They specify what properties an object should have and their respective types.
Benefits:
- Interfaces provide compile-time checks, ensuring that classes or objects adhere to the defined structure. If an object does not match the interface, TypeScript will throw an error during compilation.
- can be reused across the components.
interface User {
  name: string;
  id: number;
  isLog: true | false; //composing type - union 
}

typeof - type of a variable.

interface UserProps extends User {
role: string;
}

type UserId = number; // userid is an alias for number type.
interface UserId { id:number } //UserId is an object shape in which id is a property of number type.


type user = {
name:string;
id: number
}

type UserProps = User & {
role: string;
}

type StringArray = Array<string>; // generic way of telling type StringArray = string[]
#### When to use generic
- component that can handle any type of item. eg: list
```
interface ListProps<T> {
    items: T[]; //component to accept an array of any type
    renderItem: (item: T) => React.ReactNode; //function receives an item of that same type 
}

const List = <T,>({ items, renderItem }: ListProps<T>) => {
    return <ul>{items.map(renderItem)}</ul>;
};

//<T,> denotes a generic type parameter. Here, T is a placeholder for any type that will be specified when the component is used. The comma after T is optional but can be included for clarity, especially when defining multiple generic types.

<List items={[1, 2, 3]} renderItem={(item) => <li>{item}</li>} />
//In this case, TypeScript infers that T is number, so items will be of type number[], and renderItem will receive a number as its argument.

// Using List with strings
<List 
  items={['Apple', 'Banana', 'Cherry']} 
  renderItem={(item) => <li>{item}</li>} 
/>

// Using List with numbers
<List 
  items={[1, 2, 3]} 
  renderItem={(item) => <li>{item}</li>} 
/>

//The renderItem prop is a function that takes an item of type T and returns a React node (which can be any valid JSX element). Its type is defined as (item: T) => React.ReactNode.
```

```
type AppProps = {
  message: string;
  count: number;
  disabled: boolean;
  /** array of a type! */
  names: string[];
  /** string literals to specify exact string values, with a union type to join them together */
  status: "waiting" | "success";
  /** an object with known properties (but could have more at runtime) */
  obj: {
    id: string;
    title: string;
  };
  /** array of objects! (common) */
  objArr: {
    id: string;
    title: string;
  }[];
  /** any non-primitive value - can't access any properties (NOT COMMON but useful as placeholder) */
  obj2: object;
  /** an interface with no required properties - (NOT COMMON, except for things like `React.Component<{}, State>`) */
  obj3: {};
  /** a dict object with any number of properties of the same type */
  dict1: {
    [key: string]: MyTypeHere;
  };
  dict2: Record<string, MyTypeHere>; // equivalent to dict1
  /** function that doesn't take or return anything (VERY COMMON) */
  onClick: () => void;
  /** function with named prop (VERY COMMON) */
  onChange: (id: number) => void;
  /** function type syntax that takes an event (VERY COMMON) */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** alternative function type syntax that takes an event (VERY COMMON) */
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  /** any function as long as you don't invoke it (not recommended) */
  onSomething: Function;
  /** an optional prop (VERY COMMON!) */
  optional?: OptionalType;
  /** when passing down the state setter function returned by `useState` to a child component. `number` is an example, swap out with whatever the type of your state */
  setState: React.Dispatch<React.SetStateAction<number>>;
};
```
### Empty interface {} and object
```
interface AnyNonNullishValue {} // equivalent to `type AnyNonNullishValue = {}` or `type AnyNonNullishValue = Object`. represents any value that is not null or undefined.

let value: AnyNonNullishValue;

// these are all fine, but might not be expected
value = 1;
value = "foo";
value = () => alert("foo");
value = {};
value = { foo: "bar" };

// these are errors
value = undefined;
value = null;
```
- Nullish - refers to value that are either null or undefined.
```
type NonNullish<T> = T extends null | undefined ? never : T;
// The NonNullish<T> type checks if T is either null or undefined. If it is, it resolves to never, effectively preventing those types from being passed.
```




