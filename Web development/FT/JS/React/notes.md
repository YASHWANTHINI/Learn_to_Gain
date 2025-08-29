React was created by Jordan Walke, a software engineer at Facebook (now Meta) WikipediaMedium. The library went through several name changes during its development:

"F-Bolt" - Jordan Walke initially developed a prototype called "F-Bolt" React (software) - Wikipedia
"FaxJS" - He later renamed it to "FaxJS" before it became React WikipediaHrTech Cube
"React" - The final name that stuck

Why "React"?
The name "React" reflects the library's core philosophy and behavior:
The name embodies the concept of "reactive programming" -
 where the UI automatically reacts to changes in data/state. When your application state changes, React components automatically re-render to reflect those changes.

Redux is a state management pattern and library that helps you manage application state in a predictable way. It's based on three core principles:
Flux is “unidirectional data flow”.Flux is the architecture (pattern) on which Redux is built
Single source of truth - The entire application state is stored in one central store
State is read-only - You can only change state by dispatching actions
Changes are made with pure functions - Reducers specify how state changes in response to actions
Why React is Tough Without Redux (or similar state management)
1. Prop Drilling Hell
Without centralized state management, you often need to pass data through multiple component levels:
App → Header → Navigation → UserProfile → UserName
Even if only UserName needs the user data, you have to pass it through every intermediate component.
2. Scattered State Logic
State gets spread across many components, making it hard to:

Track where data is coming from
Understand how different parts of your app affect each other
Debug issues when something goes wrong

3. Complex Component Communication
When components at different levels need to share data, you end up with:

Lifting state up to common ancestors
Complex callback chains
Difficult-to-maintain parent-child relationships

4. Inconsistent Data
Without a single source of truth, the same data might exist in multiple places and get out of sync, leading to bugs and confusion.

```
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}
```
npm install redux react-redux @reduxjs/toolkit
```

flow - reducer/slice - counterslice with payload -> store -> provided to app

Redux Store = The Entire Coffee Shop
Actions = Customer Order Slips
Reducer = The Head Barista Following Procedures

// Customer order (Action)
{
  type: "ORDER_COFFEE",
  payload: {
    drink: "latte",
    size: "large",
    customerName: "Alice",
    price: 4.50
  }
}
{
  inventory: { beans: 100, milk: 50, cups: 200 },
  orders: [],
  cashTotal: 1250.75,
  customersWaiting: 3
}
function coffeeShopReducer(currentState, orderSlip) {
  switch (orderSlip.type) {
    case "ORDER_COFFEE":
      return {
        ...currentState,
        // Update inventory (use beans, milk)
        inventory: {
          ...currentState.inventory,
          beans: currentState.inventory.beans - 1,
          milk: currentState.inventory.milk - 1
        },
        // Add money to cash register
        cashTotal: currentState.cashTotal + orderSlip.payload.price,
        // Add to orders
        orders: [...currentState.orders, orderSlip.payload]
      };
      
    case "RESTOCK_BEANS":
      return {
        ...currentState,
        inventory: {
          ...currentState.inventory,
          beans: currentState.inventory.beans + orderSlip.payload.amount
        }
      };
      
    default:
      return currentState; // If unknown order, do nothing
  }
}

dispatch({
  type: "ORDER_COFFEE",
  payload: { drink: "latte", size: "large", price: 4.50 }
});

```
Think of useReducer as a mini Redux built into React.
It lets you manage complex state in a component using:

State (current data)

Reducer function (decides how state changes)

Dispatch function (sends an action to reducer)
```
import React, { useReducer } from "react";

const initialState = { orders: [] };

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ORDER":
      return { ...state, orders: [...state.orders, action.item] };
    case "REMOVE_ORDER":
      return { ...state, orders: state.orders.filter((o) => o !== action.item) };
    default:
      return state;
  }
}

function CoffeeShop() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Orders: {state.orders.join(", ") || "No orders yet"}</h2>
      <button onClick={() => dispatch({ type: "ADD_ORDER", item: "Cappuccino" })}>
        Add Cappuccino
      </button>
      <button onClick={() => dispatch({ type: "ADD_ORDER", item: "Latte" })}>
        Add Latte
      </button>
      <button onClick={() => dispatch({ type: "REMOVE_ORDER", item: "Cappuccino" })}>
        Remove Cappuccino
      </button>
    </div>
  );
}

export default CoffeeShop;

```
| Feature          | `useReducer`                                                                         | Redux                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| **Scope**        | Only works **inside one component** (or passed down manually)                        | Global → All components can access the same store                                                       |
| **Setup**        | Very simple (just a hook, no extra libraries)                                        | Needs external package + boilerplate setup                                                              |
| **Data Sharing** | Harder to share state across many components (need Context API)                      | Easy: single global store accessible anywhere                                                           |
| **Use Case**     | Best for small/medium state in one place (e.g., form, counter, cart inside one page) | Best for **large apps** where state must sync across many pages (e.g., Zomato Cart, Auth, User Profile) |


Example in Zomato 🛒:

Cart lives in the Redux store.

Home page can show "2 items in cart".

Cart page can list the actual items.

Checkout page can use the same data.

👉 Without Redux, you’d have to keep passing cart state down through props → very messy in large apps.
