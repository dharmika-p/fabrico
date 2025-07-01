import {useState,useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {assets} from '../../assets/assets'
import {StoreContext} from '../../context/StoreContext'
import {useNavigate} from 'react-router-dom'
import './Navbar.css'

const Navbar = ({showLogin,setShowLogin}) => {

  const [menu, setMenu] = useState('home')
  const [collection, setCollection] = useState("home");
  const {getTotalCartAmount,token,setToken} = useContext(StoreContext)
  const navigate = useNavigate()

  const logout=()=>{
    localStorage.removeItem("token");
    setToken("")
    navigate('/')
  }

  
  
  return (
    <div className='navbar'>
      <Link to='/' onClick={()=>setCollection("home")}><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className='navbar-collection'>
        <Link to='/' onClick={()=>setCollection("home")} className={collection==="home"?"active":""}>Home</Link>
        <a href="#explore-styles"><li onClick={()=>setCollection("collection")} className={collection==="collection"?"active":""}>Collection</li></a>
        <a href="#footer"><li onClick={()=>setCollection("contact-us")} className={collection==="contact-us"?"active":""}>Contact Us</li></a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-basket-icon">
            <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>

      {
        !token
             ? <button onClick={()=>setShowLogin(true)}>Sign in</button>
             : <div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className='nav-profile-dropdown'>
                <Link to="/myorders"><img src={assets.bag_icon} alt="" /><p>Orders</p></Link>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
              </div>

      }
      </div>
    </div>
  )
}

export default Navbar
