// src/context/StoreContext.jsx
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { cloths_list } from '../assets/assets';

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems(prev => {
      const updatedCart = {
        ...prev,
        [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
      };
      return updatedCart;
    });
    const itemName = cloths_list.find(cloth => cloth._id === itemId)?.name || "Item";
    toast.success(`${itemName} added to cart`);
  };
  
  const removeFromCart = (itemId) => {
    setCartItems(prev => {
      const updatedCount = prev[itemId] - 1;
      const newCart = { ...prev };
  
      if (!prev[itemId]) return prev;
  
      const itemName = cloths_list.find(cloth => cloth._id === itemId)?.name || "Item";
  
      if (updatedCount <= 0) {
        delete newCart[itemId];
        toast.info(`${itemName} removed from cart`);
      } else {
        newCart[itemId] = updatedCount;
        toast.info(`${itemName} quantity decreased`);
      }
  
      return newCart;
    });
  };

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
