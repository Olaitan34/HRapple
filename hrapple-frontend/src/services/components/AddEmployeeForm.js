import React, { useState } from 'react';
import { addEmployee } from '../employeeService';

const AddEmployeeForm = () => {
    const [employeeData, setEmployeeData] = useState({
        name: '',
        phone_number: '',
        department: '',
        date_of_employment: '',
        status: '',
        role: '',
        state_of_origin: '',
        cv: null,
        profile_image: null,
        retirement_date: '',
        dob: '',
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setEmployeeData({
                ...employeeData,
                [name]: files[0]
            });
        } else {
            setEmployeeData({
                ...employeeData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in employeeData) {
            formData.append(key, employeeData[key]);
        }
        try {
            await addEmployee(formData);
            alert('Employee added successfully');
        } catch (error) {
            alert('Error adding employee');
        }
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '0 auto',
    };

    const labelStyle = {
        marginTop: '10px',
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <label style={labelStyle}>Name:</label>
            <input
                type="text"
                name="name"
                value={employeeData.name}
                onChange={handleChange}
                required
            />

            <label style={labelStyle}>Phone Number:</label>
            <input
                type="text"
                name="phone_number"
                value={employeeData.phone_number}
                onChange={handleChange}
                required
            />

            <label style={labelStyle}>Department:</label>
            <input
                type="text"
                name="department"
                value={employeeData.department}
                onChange={handleChange}
                required
            />

            <label style={labelStyle}>Date of Employment:</label>
            <input
                type="date"
                name="date_of_employment"
                value={employeeData.date_of_employment}
                onChange={handleChange}
                required
            />

            <label style={labelStyle}>Status:</label>
            <select
                name="status"
                value={employeeData.status}
                onChange={handleChange}
                required
            >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="retired">Retired</option>
                <option value="on_leave">On Leave</option>
            </select>

            <label style={labelStyle}>Role:</label>
            <select
                name="role"
                value={employeeData.role}
                onChange={handleChange}
                required
            >
                <option value="">Select Role</option>
                <option value="manager">Manager</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="quality_assurance">Quality Assurance</option>
            </select>

            <label style={labelStyle}>State of Origin:</label>
            <input
                type="text"
                name="state_of_origin"
                value={employeeData.state_of_origin}
                onChange={handleChange}
                required
            />

            <label style={labelStyle}>CV (PDF):</label>
            <input
                type="file"
                name="cv"
                accept=".pdf"
                onChange={handleChange}
                required
            />

            <label style={labelStyle}>Profile Image:</label>
            <input
                type="file"
                name="profile_image"
                accept="image/*"
                onChange={handleChange}
            />

            <label style={labelStyle}>Retirement Date:</label>
            <input
                type="date"
                name="retirement_date"
                value={employeeData.retirement_date}
                onChange={handleChange}
            />

            <label style={labelStyle}>Date of Birth:</label>
            <input
                type="date"
                name="dob"
                value={employeeData.dob}
                onChange={handleChange}
            />

            <button type="submit" style={{ marginTop: '20px' }}>Add Employee</button>
        </form>
    );
};

export default AddEmployeeForm;