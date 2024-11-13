<h3>VirtualDOM</h3>
DOM stands for “Document Object Model,” which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes.
DOM is an interface that allows scripts to update the content, style, and structure of the document.
Virtual DOM is a node tree similar to Real DOM that lists elements, content, and attributes as objects and properties. 
React render() method creates a node tree from the react components.

ReactDOM.render() will create a Virtual and real DOM tree of the first load. 
When events like click, keypress, or API response occur, Virtual DOM tree elements are notified for state or prop change; 
if that state or props are updated, then the node elements are updated. When changes are done in UI, the changes are also done in Virtual DOM. 
Instead of updating all the nodes, Virtual DOM updates only those components in which changes are made.
Once Virtual DOM contains all the updated changes, it is then compared with the Real DOM and the difference is calculated between them.
Once the difference is calculated the real DOM will update only the new components that have actually changed. This is called <b>Reconciliation.</b> 
Virtual DOM is faster and more effective than Real DOM as it just focuses on the updated components instead of updating the entire DOM.

<b>Diffing Algorithm or Reconciliation</b>
After updating the Virtual DOM, React employs a process called reconciliation, or diffing. It compares the new Virtual DOM tree with the previous version to identify what has changed. This algorithm is optimized to assume that updates are usually localized, meaning only parts of the UI that have changed need to be re-rendered.
<b>DOM Patching</b>
Once React identifies the differences between the two Virtual DOM trees, it calculates the minimal set of changes required to update the real DOM. This process is known as DOM patching, where only the parts of the real DOM that have changed are updated, rather than re-rendering everything
