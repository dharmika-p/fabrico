// src/context/StoreContext.jsx
import React, { createContext, useState } from 'react';
import { cloths_list } from '../assets/assets';

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
    }))
  }

  const removeFromCart = (itemId) => {
    setCartItems(prev => {
      if (!prev[itemId]) return prev;
      const updatedCount = prev[itemId] - 1
      const newCart = { ...prev };
      if (updatedCount <= 0) {
        delete newCart[itemId];
      } else {
        newCart[itemId] = updatedCount;
      }
      return newCart;
    })
  }

  const getTotalCartAmount=()=>{
    let total=0;
    for(let item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = cloths_list.find(cloths=>cloths._id===item)
        total+=itemInfo.price*cartItems[item];
      }
    }
    return total;
  }

  const contextValues = {
    cloths_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  }

  return (
    <StoreContext.Provider value={contextValues}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;
