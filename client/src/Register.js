import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate(); // لاستخدام إعادة التوجيه

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', formData);
            alert(response.data);
            // إعادة التوجيه إلى صفحة Welcome
            navigate('/welcome');
        } catch (error) {
            alert(error.response.data || 'Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input name="username" placeholder="Username" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Register</button>
            <p>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </form>
    );
};

export default Register;
