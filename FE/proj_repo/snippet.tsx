//show /hide password
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <div style={{ position: 'relative' }}>
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                style={{ paddingRight: '30px' }} // Adjust padding for icon
            />
            <button onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
        </div>
    );
};

export default PasswordInput;

//dark light theme
///css
:root {
    --background: white;
    --text-primary: black;
    --text-secondary: royalblue;
}

[data-theme='dark'] {
    --background: black;
    --text-primary: white;
    --text-secondary: grey;
}

//thene toggle compoent 

import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        // Check local storage for the user's theme preference
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
    });

    useEffect(() => {
        // Set the data-theme attribute on the body element
        document.body.setAttribute('data-theme', theme);
        // Save the user's preference to local storage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </div>
    );
};

export default ThemeToggle;
//app
import React from 'react';
import './index.css';
import ThemeToggle from './ThemeToggle';

function App() {
    return (
        <div style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)', minHeight: '100vh', padding: '20px' }}>
            <h1>Hello, World!</h1>
            <p>This is a simple dark/light theme toggle example.</p>
            <ThemeToggle />
        </div>
    );
}

export default App;
