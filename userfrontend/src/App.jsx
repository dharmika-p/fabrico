import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cart from './screens/Cart/Cart';
import Home from './screens/Home/Home';
import MyOrders from './screens/MyOrders/MyOrders'
import Footer from './components/Footer/Footer'
import PlaceOrder from './screens/PlaceOrder/PlaceOrder';
import LoginPopup from './components/LoginPopup/LoginPopup';
import PromoPopup from './components/promopopup/promopopup';
import Verify from './screens/Verify/Verify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reviews from './screens/Reviews/Reviews'
import About from './screens/About/About';


const App = () => {
   const [showLogin,setShowLogin] = React.useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/order' element={<PlaceOrder/>}></Route>
          <Route path='/about' element={<About />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/verify' element={<Verify/>}></Route>
          <Route path='/myorders' element={<MyOrders/>}></Route>
        </Routes>
     </div>
     <Footer/>
     <ToastContainer position="top-center" autoClose={2000} />
     <PromoPopup />
    </>
  )
}

export default App;

