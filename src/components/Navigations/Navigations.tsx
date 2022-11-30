import React from 'react';
import './Navigations.css';
import {Link, NavLink} from "react-router-dom";


const Navigations = () => {
    return (
        <nav className="nav-bar">
            <div className="nav-logo">
                <Link to="/">Shop</Link>
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigations;