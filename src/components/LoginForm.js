import React from 'react'
import './LoginForm.css';

const LoginForm = (props) => {
    return (
    <div className={props.showModal ? "login-form" : "login-form hide" }>
        <div className="modal-backdrop fade-in"></div>
        <div className="login-form-container">
            <div className="login-form-box">
                <h1>Login</h1>
                <button className="close" onClick={() => props.setModal(true)}>x</button>
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
                    <ul className="social-media-container">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>   
                </form>
            </div>
        </div>
    </div>
    )
}

export default LoginForm
