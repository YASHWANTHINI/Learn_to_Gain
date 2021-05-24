const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
            {  <ChildComponent/> }
      </div>
    );
  }
};

/*
To compose these components together, you could create an App parent component which renders each of these three components as children.
To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. 
For example, in the render method you could write:

return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)

When React encounters a custom HTML tag that references another component (a component name wrapped in < /> like in this example), it renders the markup for that component in the location of the tag. 
This should illustrate the parent/child relationship between the App component and the Navbar, Dashboard, and Footer.
there is a simple functional component called ChildComponent and a class component called ParentComponent.
*/
