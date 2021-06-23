import React, { useState } from "react";
import LoginForm from "./LoginForm";
import "./Navbar.css";

const LoginButton = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			<button onClick={() => setShowModal(true)}>Login</button>
			<LoginForm showModal={showModal} setModal={setShowModal} />
		</div>
	);
};

export default LoginButton;
