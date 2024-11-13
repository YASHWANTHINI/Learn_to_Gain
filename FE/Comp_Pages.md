<h3>Components</h3>
In react, these are reusable piece of UI which encapsualte display logic or functionality. 
It promotes Don't repeat yourself (DRY).
To make it dynamic and customizable, accepts props where typescript plays a role to define types and type safety.
Can be defined as functional or class but function became simple due to hooks.
Eg: Button component

<h3>Page</h3>
In react, it consists of multiple components and serve as main entry point or to create a complete layout.
In applications using libraries like React Router, pages are associated with specific routes.
Each page corresponds to a URL path.
eg: Home page.


components are building blocks that can be reused throughout your application, 
while pages represent distinct views or routes that often combine multiple components for a cohesive user experience. 
Utilizing TypeScript in both enhances type safety and improves code maintainability.
React elements are the building blocks that describe what should appear on the screen,
while React components are reusable units of code that define how those elements are structured and behave.
<h3>React element vs component</h3>
Elements are plain object that describe what you want to see on the screen
Feature	- React Element	- React Component
Nature	- Plain object describing UI structure	- Function or class that produces UI
Immutability	- Immutable once created(once created their props cant be changes makes them lightweight	- Can manage state and props
Creation - Created using JSX or React.createElement()	- Defined as functions or classes
Purpose -	Represents UI parts	- Encapsulates logic and behavior
Complexity -	Simple and lightweight	- More complex with potential internal state

<h3>Lifecyle</h3>
Lifecycle methods in React are specific to components and do not apply to elements.Lifecycle methods are hooks provided by React for class components.
Phases: The lifecycle of a component consists of three main phases:
Mounting: When the component is being created and inserted into the DOM. Key methods include:
constructor()
render()
componentDidMount()
Updating: When the component's state or props change. Important methods include:
shouldComponentUpdate()
componentDidUpdate()
Unmounting: When the component is being removed from the DOM. The key method here is:
componentWillUnmount()
These methods allow for actions such as data fetching, setting up subscriptions, or cleaning up resources to prevent memory leaks. For instance, componentDidMount() is often used for API calls after the component has been rendered for the first time

Elements do not have lifecyle coz they are not self contained units of logic. They are simply describes what should be rendered based on the current state and props of their parent components.
