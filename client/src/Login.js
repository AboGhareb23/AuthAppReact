import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate(); // لاستخدام إعادة التوجيه

    // تحقق إذا كان التوكن موجودًا عند تحميل الصفحة
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // إذا كان التوكن موجودًا، التوجيه إلى صفحة الترحيب
            navigate('/welcome');
        }
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', formData);
            const { token, username } = response.data;
            alert('Login successful!');
    
            // تخزين التوكن في localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('username', username); // تخزين اسم المستخدم
            navigate('/welcome'); // التوجيه إلى صفحة الترحيب بعد تسجيل الدخول بنجاح
        } catch (error) {
            alert(error.response?.data || 'Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Login</button>
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </form>
    );
};

export default Login;
