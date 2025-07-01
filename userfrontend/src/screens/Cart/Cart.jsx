import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import './Cart.css'

const Cart = () => {
  const { cartItems, cloths_list, removeFromCart, addToCart, getTotalCartAmount, url } = React.useContext(StoreContext)
  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div className="cart-items-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Modify</p>
      </div>
      <br />
      <hr />

      {cloths_list.map((cloths) => {
        if (cartItems[cloths._id] > 0) {
          return (
            <React.Fragment key={cloths._id}>
              <div className="cart-items-item">
                <img className='cloth-image' src={`${url}/image/${cloths.image}`} alt={cloths.name} />
                <p>{cloths.name}</p>
                <p>{cloths.price}</p>
                <p>{cartItems[cloths._id]}</p>
                <p>{cartItems[cloths._id] * cloths.price}</p>
                <div className="cloths-item-counter cart-counter">
                  <img onClick={() => removeFromCart(cloths._id)} src={assets.remove_icon_red} alt="remove" />
                  <p>{cartItems[cloths._id]}</p>
                  <img onClick={() => addToCart(cloths._id)} src={assets.add_icon_green} alt="add" />
                </div>
              </div>
              <hr />
            </React.Fragment>
          )
        }
        return null;
      })}

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{!getTotalCartAmount() ? 0 : 20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>₹{!getTotalCartAmount() ? 0 : getTotalCartAmount() + 20}</p>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>Proceed to Checkout</button>
        </div>

        <div className="cart-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='Enter promo code' />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
