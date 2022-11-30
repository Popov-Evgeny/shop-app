import React from 'react';
import Navigations from "./components/Navigations/Navigations";
import {Outlet} from "react-router-dom";
import './App.css';

function App() {
    return (
        <div className="wrapper">
            <Navigations/>
            <div className="main">
                <Outlet/>
            </div>
        </div>

    );
}

export default App;
