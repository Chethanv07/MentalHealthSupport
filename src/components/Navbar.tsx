import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top shadow-sm bg-light" style={{ backgroundColor: '#fff', borderBottom: '1px solid #ddd' }}>
            <div className="container">
                <Link className="navbar-brand" to="/" style={{ fontWeight: 'bold', color: '#000' }}>
                    Mental Health Support
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end align-items-center" id="navbarNav">
                    {/* Right-aligned Home Link and Buttons */}
                    <ul className="navbar-nav d-flex align-items-center ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-dark me-3" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-warning border btn-sm me-2" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-light border btn-sm" to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
