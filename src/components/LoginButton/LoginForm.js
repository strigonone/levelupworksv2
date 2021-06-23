import React from "react";
import "./LoginForm.css";

const LoginForm = (props) => {
	// Closes modal if backdrop is clicked
	const backdropClicked = (e) => { if (props.showModal === true && e.target) props.setModal(false);};
	const resetStateHandler = () => props.setModal(false);

	return (
		<div className={props.showModal ? "login-form" : "login-form hide"}>
			<div className="modal-backdrop fade-in" onClick={(e) => backdropClicked(e)}></div>
			<div className="modal-form-container">
				<div className="login-form-box">
					<h1>Login</h1>
					<button className="close" onClick={() => resetStateHandler()}>x</button>
					<form>
						<input type="text" name="username" placeholder="Username" required />
						<input type="password" name="password" placeholder="Password" required />
						<p className="forgot-password">Forgot Password?</p>
						<p className="keep-sign-in"><input type="checkbox" />Keep me signed in</p>
						<button type="submit" className="submit-button">Log in</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
