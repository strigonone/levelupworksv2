import React, { useState } from "react";
import LoginForm from "./LoginForm";
import './LoginButton.css';

const LoginButton = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className="login-button">
			<a href="/enrol"><button className="nav-button enrol-nav-button">Enrol Now</button></a>
			<button className="nav-button login-nav-button" onClick={() => setShowModal(true)}>Login</button>
			<LoginForm showModal={showModal} setModal={setShowModal} />
		</div>
	);
};

export default LoginButton;
