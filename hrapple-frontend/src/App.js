import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './services/components/LoginForm';
import Dashboard from './services/components/Dashboard';
import EmployeeProfile from './services/components/EmployeeProfile';
import AddEmployeeForm from './services/components/AddEmployeeForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/employee/:id" element={<EmployeeProfile />} />
                <Route path="/add-employee" element={<AddEmployeeForm />} />
            </Routes>
        </Router>
    );
}

export default App;