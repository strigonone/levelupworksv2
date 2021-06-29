import React, { useState } from "react";
import LoginForm from "./LoginForm";
import './LoginButton.css';

const LoginButton = (props) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className="login-button">
			{props.showEnrol ? <a href="/enrol"><button className="nav-button enrol-nav-button">Enrol Now</button></a>
			: <p className="already-account">Already have an account?</p>
			}
			<button className="nav-button login-nav-button" onClick={() => setShowModal(true)}>Login</button>
			<LoginForm showModal={showModal} setModal={setShowModal} />
		</div>
	);
};

export default LoginButton;
