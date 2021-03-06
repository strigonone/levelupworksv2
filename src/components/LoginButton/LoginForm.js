import React, {useState} from 'react';
import "./LoginForm.css";
import axios from 'axios';

const LoginForm = (props) => {
	// Closes modal if backdrop is clicked
	const backdropClicked = (e) => { if (props.showModal === true && e.target) props.setModal(false);};
	const resetStateHandler = () => props.setModal(false);
	const [loginData, setLoginData] = useState({ email: "",password: ""})
	const [errorState, setErrorState] = useState("")

	const handleLoginChange = e => {
        const { name, value } = e.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
	
    const submitLogin = e => {
        e.preventDefault();
        axios.post('http://localhost:6969/api/login', loginData)
        .then(function(res){
			console.log(res)
			if(res.data === 'Password OK') {
				window.location = '/dashboard'
			} else {
				setErrorState(res.data);
			}
		})
		.catch((err) => {console.log(err)})
    }

	return (
		<div className={props.showModal ? "login-form" : "login-form hide"}>
			<div className="modal-backdrop fade-in" onClick={(e) => backdropClicked(e)}></div>
			<div className="modal-form-container">
				{errorState ?<div className="error-popup"><p>{errorState}</p></div>: ''}
				<div className="login-form-box">
					<h1>Login</h1>
					<button className="close" onClick={() => resetStateHandler()}>x</button>
					<form onSubmit={submitLogin}>
						<input type="text" name="email" placeholder="Email" onChange={handleLoginChange} value={loginData.email} required />
						<input type="password" name="password" placeholder="Password" onChange={handleLoginChange} value={loginData.password} required />
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
