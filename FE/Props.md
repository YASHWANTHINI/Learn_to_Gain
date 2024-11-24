<h3>Props</h3>
Properties. Used to pass data between components ( patent to child). This enables creation of dynamic and reusable components by allowing them to get input and render accordingly.

Props can be passed to components to render dynamic content or to control the behavior of the component.

In react, props are accessed in the child component via function params. They can be destructured for access. 

In TS, use of props by providing type safety. Props can be defined using either interface or type.

interface ChildProps
{ title: string; }  or
type ChildProps = { title:string }

this childprops can be used in any components like
const child:React.FC<ChildProps> = {{title}} => { return {title} };

TS uses @types/react package to provide type definition for react component. this includes utilities like ComponentProps. type ChildProps = React.ComponentProps<typeof MyComponent> Here typeof used to get type of MyComponent variable which should be react component.


import React from 'react';

const MyComponent = ({ title, onClick }: { title: string; onClick: () => void }) => {
    return <button onClick={onClick}>{title}</button>;
};

// Extracting props
type MyComponentProps = React.ComponentProps<typeof MyComponent>;

// Using extracted props in another component
const AnotherComponent: React.FC<MyComponentProps> = (props) => {
    return (
        <div>
            <MyComponent {...props} />
        </div>
    );
};

Optional Props - properties that a component can receive but are not required for the component to function.

Required Props - properties that a component needs in order to render properly. if this props are not passed then error will thrown.Essential for maintaining the integrity of component and ensuring that it always has the data need to function as expected.

FC - Functional components are JS functions in React that returns elements. It accepts props as argumment which allows to be dynamic(receive inputs) and reusable(render).

const Greeting = ({ name, greeting = 'Hello' }) => {
  return <div>{greeting}, {name}!</div>;
};
For functional components, ES6 destructuring can be used to provide default values directly in the component's parameters.(greeting = 'Hello')

PropTypes is a library that helps developers define the types of props a component should receive. It also allows you to specify which props are required and which are optional.

import PropTypes from 'prop-types';

const Greeting = ({ name, greeting }) => {
  return <div>{greeting}, {name}!</div>;
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.string
};

Greeting.defaultProps = {
  greeting: 'Hello'
};

Use propTypes to document and validate props.
Use defaultProps to provide default values for optional props.

from the above defined after the function but no error throws since these Type checking are not executed during component rendering.PropType and DefaultProp checks are typically executed during the development phase when your application is bundled and deployed.
Development Environment:

Linting: Tools like ESLint can be configured to check for prop type errors during development.
Build Process: Your build tool (Webpack, Rollup, etc.) might have plugins or configurations to perform prop type checks and warn or error on invalid usage.
Production Environment:

Typically, these checks are not performed in production. This is because they add extra overhead to the application's performance.
However, some libraries or frameworks might still perform runtime checks for critical components or in development mode.

To make a prop optional in TypeScript, you can use the ? operator in the interface that defines the props. Here's an example:

interface GreetingProps {
  name: string;
  greeting?: string;
}

const Greeting: React.FC<GreetingProps> = ({ name, greeting = 'Hello' }) => {
  return <div>{greeting}, {name}!</div>;
};

Component pattern for optional props
Parent Child components - common to pass props from parent to child but components should prepared to handle the case where props is not provided.

const ParentComponent = () => {
  return <ChildComponent />;
};

const ChildComponent = ({ message = 'Default message' }) => {
  return <div>{message}</div>;
};
Conditional rendering 
const ThemeContext = React.createContext('light');

const ThemedButton = ({ children }) => {
  const theme = useContext(ThemeContext);
  const style = { backgroundColor: theme === 'dark' ? 'black' : 'white' };
  return <button style={style}>{children}</button>;
};
In modern React, the use of hooks and functional components has become more prevalent. With these patterns, developers often use ES6 features like default parameters and destructuring to handle default prop values, which can be a more concise alternative to defaultProps.

// Declaring type of props - see "Typing Component Props" for more examples
type AppProps = {
  message: string;
}; /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.
const App = ({ message }: AppProps) => <div>{message}</div>;

// You can choose to annotate the return type so an error is raised if you accidentally return some other type
const App = ({ message }: AppProps): React.JSX.Element => <div>{message}</div>;

// You can also inline the type declaration; eliminates naming the prop types, but looks repetitive
const App = ({ message }: { message: string }) => <div>{message}</div>;

// Alternatively, you can use `React.FunctionComponent` (or `React.FC`), if you prefer.
// With latest React types and TypeScript 5.1. it's mostly a stylistic choice, otherwise discouraged.
const App: React.FunctionComponent<{ message: string }> = ({ message }) => (
  <div>{message}</div>
);
// or
const App: React.FC<AppProps> = ({ message }) => <div>{message}</div>;
  
Difference between React.FC and regular function component for props.
React.FC - explicit about the return type, Regular FC - implicit about the return type.
Explicit = let x: number = 10; Implicit - let x = 10;

Use React.FC when:
You need to explicitly define the component's props interface.
You want to leverage TypeScript's type checking and autocompletion features.

interface MyComponentProps {
  name: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ name, children }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {children}
    </div>
  );
};

// Usage:
<MyComponent name="Alice">
  <p>This is a child element.</p>
</MyComponent>

from the above children props is not defined so this could lead to unexpected behaviour and type error. So need to explicitly define props in interface.
interface MyComponentProps {
  name: string;
  children?: ReactNode; // Optional children prop
}
or 
const MyComponent = ({ name, children }: { name: string; children?: ReactNode }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {children}
    </div>
  );
};

<h3>Link</h3>
https://www.perplexity.ai/search/how-to-return-props-from-child-CjKWpx5PSCSJn9Lyv9FnSg
