import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleNavbarToggle = () => {
        setNavbarOpen(!navbarOpen);
    };

    const closeNavbar = () => {
        setNavbarOpen(false);
    };

    const isActive = (pathname) => {
        return location.pathname === pathname ? 'active' : '';
    };

    return (
        <>
            <nav className={`navbar navbar-expand-lg ${navbarOpen ? 'navbar-open' : ''}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={closeNavbar}>
                        Noman.
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={handleNavbarToggle}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive('/')}`} to="/">
                                    Home
                                </Link>
                            </li>                            <li className="nav-item">
                                <Link className={`nav-link ${isActive('/about')}`} to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive('/education')}`} to="/education">
                                    Education
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive('/skills')}`} to="/skills">
                                    Skills
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive('/contact')}`} to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
