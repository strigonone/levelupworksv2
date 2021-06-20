import React from 'react'
import './LoginForm.css';
import placeholderimg from '../assets/img/placeholderimg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

const LoginForm = (props) => {

    // Closes modal if backdrop is clicked
    const backdropClicked = (e) => {if (props.showModal === true && e.target) props.setModal(false)};

    return (
    <div className={props.showModal ? "login-form" : "login-form hide" }>
        <div className="modal-backdrop fade-in" onClick={(e) => backdropClicked(e)}></div>
        <div className="modal-form-container">
            <div className="login-form-box" >
                <h1>Login</h1>
                <button className="close" onClick={() => props.setModal(false)}>x</button>
                <form>
                    <input type="text" name="username" placeholder="Username" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <p className="forgot-password">Forgot Password?</p>
                    <p className="keep-sign-in"><input type="checkbox" />Keep me signed in</p>                             
                    <button type="submit" className="submit-button">Sign in</button>    
                </form>
                    <p className="alt-register">No account yet? <a href="/">Register</a></p>
                    <p>OR</p>
                <ul className="social-media-container">
                    <li><button className="facebook"><FontAwesomeIcon icon={faFacebook} /></button></li>
                    <li><button className="twitter"><FontAwesomeIcon icon={faTwitter} /></button></li>
                    <li><button className="google"><FontAwesomeIcon icon={faGoogle} /></button></li>
                </ul> 
            </div>

            <div className="register-form login-form-box">
                <h1>Create a new account</h1>
                <div>
                    <h2>I'm a...</h2>
                    <form action="">
                        <ul>
                            <img src={placeholderimg} alt="" />
                            <img src={placeholderimg} alt="" />
                        </ul>
                        <input type="text" name="username" placeholder="Username" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />
                    </form>
                </div>
                
            </div>
        </div>


    </div>
    )
}

export default LoginForm
