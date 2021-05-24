class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        
        <NonCitrus/>
        <Citrus/>
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { <Fruits/> }
        <Vegetables />
      </div>
    );
  }
};

/*
output
Types of Food:
Fruits:
Non-Citrus:
    Apples
    Blueberries
    Strawberries
    Bananas
Citrus:
    Lemon
    Lime
    Orange
    Grapefruit
Vegetables:
    Brussel Sprouts
    Broccoli
    Squash

U can render JSX elements, stateless functional components, and ES6 class components within other components.

In the code editor, the TypesOfFood component is already rendering a component called Vegetables. Also, there is the Fruits component from the last challenge.

Nest two components inside of Fruits — first NonCitrus, and then Citrus. Both of these components are provided for you behind the scenes. Next, nest the Fruits class component into the TypesOfFood component, below the h1 header and above Vegetables.
*/
