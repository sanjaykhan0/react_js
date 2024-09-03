import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const hamnav = () => {
        setIsOpen(!isOpen);
    };

    const resnav = {
        display: isOpen ? 'flex' : 'none',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems:'center',
        position: 'absolute',
        height: '62vh',
        top: '50px',
        right: '0px',
        backgroundColor: 'rgba(187, 187, 187, 0.700)',
        width: '50vw',
        padding: '20px',
    listStyleType: 'none'
    

    };

    return (
        <div className='nav'>
            <div className="logo">
                <img src="https://websitedemos.net/tourism-04/wp-content/uploads/sites/344/2019/02/logo-regular-free-img-150x37.png" alt="Logo" />
            </div>
            <ul className='nav-text1' style={resnav}>
                <li style={{ color: 'blueviolet' }}>Home</li>
                <li>About us</li>
                <li>Tours</li>
                <li>Reviews</li>
                <li>Contact</li>
                <button className='nav-btn1'>123-456-7890</button>
            </ul>
            <ul className='nav-text' >
                <li style={{ color: 'blueviolet' }}>Home</li>
                <li>About us</li>
                <li>Tours</li>
                <li>Reviews</li>
                <li>Contact</li>
                <button className='nav-btn'>123-456-7890</button>
            </ul>
            <i className="fa-solid fa-bars hamburger" onClick={hamnav}></i>
        </div>
    );
}
