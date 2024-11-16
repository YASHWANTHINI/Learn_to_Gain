<h3>State</h3> - refers to condition or status of an app at specific time especially current situation. Managing the state represents the data that determines how components behave and render.
it may change due to user interacion, API response or other events. So due to the state changes component renders and ui re-renders to show the changes.
describe an application's current situation, such as:
User Inputs: Information entered by users, like form data.
Application Data: Data fetched from databases or APIs, such as lists of products or user profiles.
UI Elements: Status indicators for components, like whether a modal is open or closed.

<h4>Types</h4>
Local state - specific to single component and managed within that component.
Global - shared across multile component and requires structured approach to manage.

<h4>Importance of state management</h4>
Optimizes rendering processes by ensuring only necessary components re-render.

<h4>Methods</h4>
useState - Allows functional components to manage local state,
useReducer - manage state that consolidates update logic in one place, making it easier to handle multiple state updates, 
context api - useContext - Enables sharing state across multiple components without prop drilling, ideal for global states.

<h4>State Management Libraries</h4>
Redux	- Centralizes application state in a single store and uses actions and reducers for updates.
Recoil-	Developed by Facebook, it simplifies shared state management using atoms and selectors.
