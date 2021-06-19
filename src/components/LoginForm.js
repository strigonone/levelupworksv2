import React from 'react'
import './LoginForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

const LoginForm = (props) => {
    return (
    <div className={props.showModal ? "login-form" : "login-form hide" }>
        <div className="modal-backdrop fade-in"></div>
        <div className="login-form-container">
            <div className="login-form-box">
                <h1>Login</h1>
                <button className="close" onClick={() => props.setModal(false)}>x</button>
                <form>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Username"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required
                    />
                    <p className="keep-sign-in"><input type="checkbox" />Keep me signed in</p>                             
                    <button type="submit" className="submit-button">Sign in</button>    
                    <p>No account yet? <a href="/">Register</a></p>
                    <p>OR</p>
                </form>
                <ul className="social-media-container">
                    <li><button className="facebook"><FontAwesomeIcon icon={faFacebook} /></button></li>
                    <li><button className="twitter"><FontAwesomeIcon icon={faTwitter} /></button></li>
                    <li><button className="google"><FontAwesomeIcon icon={faGoogle} /></button></li>
                </ul> 
            </div>
        </div>
    </div>
    )
}

export default LoginForm
