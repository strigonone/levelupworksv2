import React,  { useState } from 'react'
import LoginForm from './LoginForm';
import './Navbar.css';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>

            {/* Login & Register */}
            <div>
                <button onClick={() => setShowModal(true)}>Login</button>
                <LoginForm showModal={showModal} setModal={setShowModal} />
            </div>
        </div>
    )
}

export default Navbar
