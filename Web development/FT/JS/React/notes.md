React was created by Jordan Walke, a software engineer at Facebook (now Meta) WikipediaMedium. The library went through several name changes during its development:

"F-Bolt" - Jordan Walke initially developed a prototype called "F-Bolt" React (software) - Wikipedia
"FaxJS" - He later renamed it to "FaxJS" before it became React WikipediaHrTech Cube
"React" - The final name that stuck

Why "React"?
The name "React" reflects the library's core philosophy and behavior:
The name embodies the concept of "reactive programming" -
 where the UI automatically reacts to changes in data/state. When your application state changes, React components automatically re-render to reflect those changes.

Redux is a state management pattern and library that helps you manage application state in a predictable way. It's based on three core principles:

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
