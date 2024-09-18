import React, { useState, useEffect } from 'react';
import { fetchEmployees } from '../employeeService';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Dashboard = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const authHeader = location.state?.authHeader;
    const navigate = useNavigate();

    useEffect(() => {
        if (authHeader) {
            fetchEmployees(authHeader)
                .then(response => {
                    setEmployees(response.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error fetching employees:", err);
                    setLoading(false);
                });
        }
    }, [authHeader]);

    const handleAddEmployee = () => {
        navigate('/add-employee', { state: { authHeader } });
    };

    if (loading) return <div>Loading employees...</div>;

    return (
        <div>
            <h1>Employee Dashboard</h1>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        <Link to={`/employee/${employee.id}`} state={{ authHeader }}>
                            {employee.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <button onClick={handleAddEmployee}>Add Employee</button>
        </div>
    );
};

export default Dashboard;