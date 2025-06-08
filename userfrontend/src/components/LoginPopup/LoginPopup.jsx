import React from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.css'


const LoginPopup = ({setShowLogin}) => {
    const [curState, setCurState] = React.useState("Sign in")

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{curState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {curState!=="Sign in"?<input type="text" placeholder='Enter your name' required /> : <></>}
            <input type="email" placeholder='Enter your email' required />
            <input type="password" placeholder='Enter your password' required/>
        </div>
        <button className="btn">
            {curState}
        </button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>
                By continuing, I agree to terms & privacy policy
            </p>
        </div>
        {
            curState === "Sign in"
                ? <p>Create a new account? <span onClick={()=>setCurState("Sign up")}>Click here</span></p>
                : <p>Already have an account? <span onClick={()=>setCurState("Sign in")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
