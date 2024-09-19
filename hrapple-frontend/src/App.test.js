import React from 'react';
import EmployeeList from './components/EmployeeList';

function App() {
    const token = 'your_jwt_token_here';  // Make sure you have a valid token

    return (
        <div className="App">
            <h1>Employee List</h1>
            <EmployeeList token={token} />
        </div>
    );
}

