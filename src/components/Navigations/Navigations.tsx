import React from 'react';
import './Navigations.css';
import {NavLink} from "react-router-dom";


const Navigations = () => {
    return (
        <nav className="nav-bar">
            <div className="nav-logo">
                <h3>Shop</h3>
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