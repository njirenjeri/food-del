import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/frontend_assets/assets'

const LoginPopUp = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currState === "Login" ? <></> : 
                    <input type="text" name="" id="" placeholder='Enter Your Name' required />
                }
                <input type="email" name="" id="" placeholder='Enter Your Email' required/>
                <input type="password" name="" id="" placeholder='Enter Your Password' />
            </div>
            <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" name="" id="" required/>
                <p>By Continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState === "Login" ? 
            <p>create a new account? <span onClick={() => setCurrState("Sign Up")}>click here</span></p>
            :
            <p>Already have an account? <span onClick={() => setCurrState("Login")}>login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopUp