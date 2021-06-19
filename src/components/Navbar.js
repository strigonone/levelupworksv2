import React,  { useState } from 'react'
import LoginForm from './LoginForm';
import './Navbar.css';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    console.log(showModal);
    return (
        <div>
            <button onClick={() => setShowModal(true)}>Login</button>
            <LoginForm showModal={showModal} setModal={setShowModal} />
        </div>
    )
}

export default Navbar
