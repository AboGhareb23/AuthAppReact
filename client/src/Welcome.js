import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
    const username = localStorage.getItem('username') || 'Guest';
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.href = '/login';
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="toolbar">
            <div className="toolbar-container">
                {/* Logo */}
                <div className="logo">
                    <Link to="/">MyApp</Link>
                </div>

                {/* Navigation Links */}
                <nav className="toolbar-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>

                {/* User Section */}
                <div className="user-section">
                    <span className="username" onClick={toggleDropdown}>{username}</span>
                    {/* Dropdown Menu */}
                    <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                        <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Welcome;
