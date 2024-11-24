### Conditional Rendering
<p>Rendering different components or elements based on condition</p>

#### ternary operator - shorthand of if-else - only JS operator that takes 3 operands.
```
const Greeting = {(isLog)} => {
<div> {isLog ? <p> Welcome </p> : <p> Sign In </p> } </div>
}
```

#### Logical && operator - renders only if condition is true. it will render the element on the right-hand side only if the left-hand expression evaluates to true.
```
const Greeting = ({isLog}) => {
<div>{isLog && <p> Welcome </p> }</div> }
```
we used isLog as props, instead of that we can handle with state like below
```
import React, { useState } from 'react';

function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <button onClick={handleLogin}>Log in</button>
      )}
    </div>
  );
}
```
to render components based on the current state. When the state changes, the component re-renders

if-else statements in React but not directly in the returned JSX. Instead, use them within the render method or before the return statement to store elements in variables conditionally.
```
function WelcomeMessage({ isLoggedIn }) {
  let greeting;
  if (isLoggedIn) {
    greeting = <p>Welcome back!</p>;
  } else {
    greeting = <p>Please sign in.</p>;
  }
  return <div>{greeting}</div>;
}

function Notification({ type }) {
  let message;
  switch (type) {
    case 'success':
      message = <p>Operation successful!</p>;
      break;
    case 'error':
      message = <p>An error occurred.</p>;
      break;
    default:
      message = <p>Unknown status.</p>;
  }
  return <div>{message}</div>;
}
```
#### Immediately Invoked Function Expressions (IIFE)
to execute conditional logic within render method.avaScript function defined and executed immediately within the JSX. It's a pattern that can encapsulate complex conditional rendering logic that might not be suitable for inline expressions or element variables.
```
const ComplexCondition = ({ condition }) => (
  <div>
    {(() => {
      if (condition) {
        return <p>Condition is true!</p>;
      } else {
        return <p>Condition is false.</p>;
      }
    })()}
  </div>
);
```

### Common pitfalls
Overcomplicating inline conditional expressions.
Neglecting to handle all possible conditions, leading to rendering errors.
Using conditions that cause side effects or modify state during rendering.

