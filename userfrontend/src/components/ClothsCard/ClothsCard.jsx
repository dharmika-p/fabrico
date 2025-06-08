import React from 'react'
import './ClothsCard.css'
import { StoreContext } from '../../context/StoreContext'
import {assets} from '../../assets/assets'

const ClothsCard = ({id,name,price,description,image}) => {

  const [itemCount,setItemCont] = React.useState(0)
  const {cartItems,setCartItems,addToCart,removeFromCart} = React.useContext(StoreContext)


  return (
    <div className='cloths-item'>
        <div className="cloths-item-image-container">
            <img src={image} alt="" className="cloths-item-image" />
            {
              !cartItems[id] ? <img onClick={()=>addToCart(id)} src={assets.add_icon_white} className="add" alt="" />
                           : <div className="cloths-item-counter">
                             <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                             <p>{cartItems[id]}</p>
                            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                            </div>
            }   
        </div>
        <div className="cloths-item-info">
            <p className="cloths-item-name">{name}</p>
            <p className="cloths-item-desc">{description}</p>
            <div className="cloths-item-price-rating">
                <p className="cloths-item-price">₹{price}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ClothsCard