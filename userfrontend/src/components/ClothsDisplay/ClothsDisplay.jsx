import React from 'react'
import { StoreContext } from '../../context/StoreContext'
import ClothsCard from '../ClothsCard/ClothsCard';
import './ClothsDisplay.css'

const ClothsDisplay = ({category}) => {
  const {cloths_list} = React.useContext(StoreContext);
  return (
    <div className='cloths-display' id='cloths-display'>
      <h2>Top Picks This Season</h2>
      <div className="cloths-display-list">
        {
          cloths_list.map((item,index)=>{
                if(category==="All" || category===item.category)
                return <ClothsCard id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
          })
        }
      </div>
    </div>
  )
}

export default ClothsDisplay

