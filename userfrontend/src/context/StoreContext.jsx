// src/context/StoreContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'


export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [cloths_list,setClothList] = useState([])
  const url = 'http://localhost:4000'
  const [token,setToken] = useState("")

  const fetchClothList = async()=>{
    const response = await axios.get(url+'/api/cloth/list')
    setClothList(response.data.data)
  }

  useEffect(()=>{
    async function loadData(){
      await fetchClothList()
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem("token"))
      }
    }
    loadData()
  },[])

  const loadCartData = async(token)=>{
    const response = await axios.get(url+"/api/cart/get",{headers:{token}})
    setCartItems(response.data.cartData)
  }


  const addToCart = async(itemId) => {
    setCartItems(prev => {
      const updatedCart = {
        ...prev,
        [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
      };
      return updatedCart;
    });
    const itemName = cloths_list.find(cloth => cloth._id === itemId)?.name || "Item";
    toast.success(`${itemName} added to cart`);
    if(token){
      try {
        await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
      } catch (error) {
        console.log(error)
      }
    }
  };
  
  const removeFromCart = async(itemId) => {
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
    if(token){
      try {
        await axios.delete(`${url}/api/cart/remove?itemID=${itemId}`,{headers:{token}})
      } catch (error) {
        console.log(error)
      }
    }
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
    getTotalCartAmount,
    url,
    token,
    setToken
  }

  return (
    <StoreContext.Provider value={contextValues}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;
