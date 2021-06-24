import React, { useState } from "react";
import LoginForm from "./LoginForm";

const LoginButton = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			<button onClick={() => setShowModal(true)}>Login</button>
			<a href="/enrol"><button>Enrol</button></a>
			<LoginForm showModal={showModal} setModal={setShowModal} />
		</div>
	);
};

export default LoginButton;
