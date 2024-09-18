import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/employees/';

export const fetchEmployees = (authHeader) => {
    return axios.get(API_URL, {
        headers: {
            Authorization: authHeader,
        },
    });
};

export const fetchEmployeeById = (id, authHeader) => {
    return axios.get(`${API_URL}${id}/`, {
        headers: {
            Authorization: authHeader,
        },
    });
};

export const addEmployee = (formData, authHeader) => {
    return axios.post(API_URL, formData, {
        headers: {
            Authorization: authHeader,
            'Content-Type': 'multipart/form-data',
        },
    });
};