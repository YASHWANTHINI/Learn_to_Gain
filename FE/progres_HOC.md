### Higher order Component HOC
higher order component is a function that takes a component and returns a new component with additional properties or behavior.
```
 import React, { useEffect, useState } from 'react';
    
    function withData(WrappedComponent, fetchData) {
      return function EnhancedComponent(props) {
        const [data, setData] = useState(null);
    
        useEffect(() => {
          fetchData().then(setData);
        }, [fetchData]);
    
        return <WrappedComponent {...props} data={data} />;
      };
    }
    
    export default withData;

 import React from 'react';
    import withData from './withData';
    
    function UserList(props) {
      if (!props.data) {
        return <div>Loading...</div>;
      }
    
      return (
        <ul>
          {props.data.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      );
    }
    
    export default withData(UserList, () => fetch('/api/users').then(res => res.json()));
```
