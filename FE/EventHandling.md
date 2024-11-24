<h3>Event type in react with ts</h3>
ChangeEvent - Triggered when the value of an input changes (<input>, <select>, or <textarea> )
MouseEvent	- Triggered by mouse interactions
KeyboardEvent	 -Triggered by keyboard actions
FormEvent	- Related to form submission and input changes
FocusEvent	- Triggered when an element gains or loses focus
```
import React, { useState, ChangeEvent } from 'react';

export default function App() {
    const [inputValue, setInputValue] = useState('');
    cosnt [key, setKey] = useState('');
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            setKey(event.key);
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const handleClick = (event:MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked');
    cosnt handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    alert(inputValue)
    }
    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <p>Current Value: {inputValue}</p>
            <button onClick={handleClick}>Click</button>
            <p>Last Key Pressed: {key}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <button type='submit'>Submit</button>
        </form>
    );
}

```

From the above, onChange={(e)=> setState(e.target.value)} within the input tag is termed as inline handler.
Inline event handler
straightforward event handling without needing to define a separate function. So no reuse across component. readability is low when complex logic
also for event we just said its e so that its automatically inferred by TS.
```
const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    return(
     <input type="text" value={inputValue} onChange={handleInputChange} />
     )

```

this is termed as named event handler. const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {} 
Explicit annotated the type of event params. default is any.Can be reused across different components


