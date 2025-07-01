import {useState, useEffect} from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.css'
import {useContext} from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import {toast} from 'react-toastify'


const LoginPopup = ({setShowLogin}) => {
  const {url,token,setToken} = useContext(StoreContext)
    const [curState, setCurState] = useState("Log in")
    const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
    });

    const onChangeHandler = (e) =>{
      const {name , value} = e.target;
      setData({...data, [name]: value});
    };

    const onSubmitHandler = async(e)=>{
      e.preventDefault()

      let newUrl = url;
      if(curState==="Log in"){
        newUrl+='/api/user/login'
      }
      else{
        newUrl +='/api/user/register'
      }

      try {
        const response = await axios.post(newUrl,data)
        if(curState==="Sign up"){
          toast.success("Account created successfully!\nPlease Log in",{autoClose: 3000})
          setCurState("Log in")
        }
        else{
          setToken(response.data.token)
          localStorage.setItem("token",response.data.token)
          toast.success("Logged in successfully",{autoClose: 3000});
          setShowLogin(false)
        }
      } catch (error) {
        console.log(error.response?.data?.message || "Something went wrong");
        toast.error(error.response?.data?.message || "Failed to authenticate");
      }
    }

  return (
    <div className='login-popup'>
      <form onSubmit={onSubmitHandler} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{curState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {curState!=="Log in"?<input name="name" value={data.name} onChange={onChangeHandler} type="text" placeholder='Enter your name' required /> : <></>}
            <input name="email" value={data.email} onChange={onChangeHandler} type="email" placeholder='Enter your email' required />
            <input name="password" value={data.password} onChange={onChangeHandler} type="password" placeholder='Enter your password' required/>
        </div>
        <button type="submit">
            {curState}
        </button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>
                By continuing, I agree to terms & privacy policy
            </p>
        </div>
        {curState === "Log in" ? (
          <p>
            Create a new account?{" "}
            <span onClick={()=>setCurState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={()=>setCurState("Log in")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  )
}

export default LoginPopup
