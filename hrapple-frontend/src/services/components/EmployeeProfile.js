import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchEmployeeById } from '../employeeService';

const EmployeeProfile = () => {
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const location = useLocation();
    const authHeader = location.state?.authHeader;

    useEffect(() => {
        if (authHeader) {
            fetchEmployeeById(id, authHeader)
                .then(response => {
                    setEmployee(response.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error fetching employee:", err);
                    setLoading(false);
                });
        }
    }, [id, authHeader]);

    if (loading) return <div>Loading employee...</div>;
    if (!employee) return <div>Employee not found.</div>;

    return (
        <div>
            <h1>{employee.name}</h1>
            <p>Phone Number: {employee.phone_number}</p>
            <p>Department: {employee.department}</p>
            <p>Date of Employment: {employee.date_of_employment}</p>
            <p>Status: {employee.status}</p>
            <p>State of Origin: {employee.state_of_origin}</p>
            <p>Role: {employee.role}</p>
            <p>CV: <a href={employee.cv} target="_blank" rel="noopener noreferrer">View CV</a></p>
            <p>Retirement Date: {employee.retirement_date}</p>
            <img src={employee.profile_image} alt={employee.name} />
        </div>
    );
};

export default EmployeeProfile;