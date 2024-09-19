import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navBar';
import HomePage from './HomePage';
import Page2 from './plants';
import Login from './login';
import "./App.css";

function CollectionOfComponents(){

    const [isLoggedIn, setIsLoggedIn] = useState(()=>{
        return localStorage.getItem('isLoggedIn') === 'true';
    })

    useEffect(()=>{
        localStorage.setItem('isLoggedIn', isLoggedIn);
    },[isLoggedIn]);

    return(
        <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/plants" element={<Page2 />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn = {isLoggedIn} />} />
        </Routes>
    </Router>
    )
}

export default CollectionOfComponents;