import { style_list } from "../../assets/assets";
import './ExploreStyles.css'
import React from 'react'

const ExploreStyles = ({category,setCategory}) => {
  return (
    <div className='explore-styles' id="explore-styles">
        <h1>Explore our styles</h1>
        <p className = 'explore-styles-text'>From everyday essentials to statement pieces, our collection is designed to match your vibe and elevate your wardrobe effortlessly. Find your unique look with Fabrico.</p>
        <div className="explore-styles-list">
            {style_list.map((item,index)=>{
                return(
                  <div className="explore-styles-list-grid">
                    <div onClick={()=>setCategory(category=>category===item.style_name?"All":item.style_name)} key={index} className="explore-styles-list-item">
                         <img className={category===item.style_name?'active':''} src={item.style_image} alt="" />
                         <p>{item.style_name}</p>
                    </div>
                  </div>
                )
            })}
        </div>
        <hr />
      
    </div>
  )
}

export default ExploreStyles
