import React from 'react';
import { images } from '../constants';


function Login() {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self")
    }
  return (
    <div className='login'>
        <h1 className="loginTitle">Choose your  login method</h1>
        <div className='wrapper'>
        <div className="left">
            <div className="loginButton google" onClick={google}>
                <img src={images.gorguu} alt="" className="icon" />
                Google
            </div>
            <div className="loginButton facebook">
                <img src={images.facebook} alt="" className="icon" />
                Facebook
            </div>
            <div className="loginButton github">
                <img src={images.github} alt="" className="icon" />
                Github
            </div>
        </div>
        <div className="center">
            <div className="line" />
            <div className='or'>OR</div>
        </div>
        
        <div className='right'>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="button" className="submit">Login</button>
        </div>
        </div>
    </div>
  )
}

export default Login