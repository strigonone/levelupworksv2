import React from "react";
import "./LoginForm.css";

const LoginForm = (props) => {
	// Closes modal if backdrop is clicked
	const backdropClicked = (e) => {
		if (props.showModal === true && e.target) props.setModal(false);
	};
	// const [showLogin, setLogin] = useState(true);

	const resetStateHandler = () => props.setModal(false);

	return (
		<div className={props.showModal ? "login-form" : "login-form hide"}>
			<div
				className="modal-backdrop fade-in"
				onClick={(e) => backdropClicked(e)}
			></div>
			<div className="modal-form-container">
				<div className="login-form-box">
					<h1>Login</h1>
					<button className="close" onClick={() => resetStateHandler()}>
						x
					</button>
					<form>
						<input
							type="text"
							name="username"
							placeholder="Username"
							required
						/>
						<input
							type="password"
							name="password"
							placeholder="Password"
							required
						/>
						<p className="forgot-password">Forgot Password?</p>
						<p className="keep-sign-in">
							<input type="checkbox" />
							Keep me signed in
						</p>
						<button type="submit" className="submit-button">
							Log in
						</button>
					</form>
					{/* <p className="alt-register">No account yet? <button className="switch-link" onClick={() => setLogin(false)}>Register</button></p>
                    <p>OR</p>
                <ul className="social-media-container">
                    <li><button className="facebook"><FontAwesomeIcon icon={faFacebook} /></button></li>
                    <li><button className="twitter"><FontAwesomeIcon icon={faTwitter} /></button></li>
                    <li><button className="google"><FontAwesomeIcon icon={faGoogle} /></button></li>
                </ul>  */}
				</div>

				{/* <div className="register-form login-form-box">
                <h1>Create a new account</h1>
                <button className="close" onClick={() => resetStateHandler()}>x</button>
                <div>
                    <h2>I'm a...</h2>
                    <form action="">
                        <ul className="register-selector">
                            <input id="student-option" type="radio" name="register-op" value="student" />
                            <label className="register-option student-op" htmlFor="student-option"></label>
                            <input id="teacher-option" type="radio" name="register-op" value="teacher" />
                            <label className="register-option teacher-op" htmlFor="teacher-option"></label>
                        </ul>
                        <input type="text" name="username" placeholder="Username" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <button type="submit" className="submit-button register-button">Register</button>  
                    </form>
                    <p className="alt-register">Have an account? <button className="switch-link" onClick={() => setLogin(true)}>Login</button> </p>
                </div>
            </div> */}
			</div>
		</div>
	);
};

export default LoginForm;
