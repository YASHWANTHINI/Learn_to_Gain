<h3>Props</h3>-<h4>Properties. used to pass data between components.This enables the creation of dynamic and reusable components by allowing them to receive inputs and render accordingly.</h4>

<h4>In React, props are accessed in the child component via the function parameters.</h4>
<h3>TypeScript and Props</h3>
<h3>TypeScript enhances the use of props by providing type safety. This means that developers can define the expected types of props, which helps catch errors during development rather than at runtime.</h3>
<code>
  import React from react;
  
  interface ChildProps {
    title: string;
}

const Child: React.FC<ChildProps> = ({ title }) => {
    return <h1>{title}</h1>;
};
</code>
How TypeScript Handles Props
TypeScript uses the @types/react package to provide type definitions for React components. This package includes utilities like React.ComponentProps, which allows developers to extract prop types from existing components easily.
