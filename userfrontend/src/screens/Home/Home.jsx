import React from 'react'
import Header from '../../components/Header/Header'
import ExploreStyles from '../../components/ExploreStyles/ExploreStyles'
import ClothsDisplay from '../../components/ClothsDisplay/ClothsDisplay'
const Home = () => {
  const [category,setCategory] = React.useState('All')
  return (
    <div>
      <Header/>
      <ExploreStyles category={category} setCategory={setCategory}/>
      <ClothsDisplay category={category}/>
    </div>
  )
}

export default Home
