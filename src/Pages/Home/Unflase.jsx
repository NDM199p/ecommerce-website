import React from 'react'
import '../../Assets/Styles/HomePage/Unflase.css';
import unsplash_1 from '../../Assets/Image/unsplash_1.jpg'
import unsplash_2 from '../../Assets/Image/unsplash_2.jpg'
import Photo_slider from './Photo_slider';

const Unflase = () => {
  return (
    <div>
    <div className='allflase'>
    <div className="unflase">
        <img className='flase' src={unsplash_1} 
        />
        <h6 className='low_price'>Low Price</h6>
        <h2 className='High_Coziness' >High Coziness</h2>
        <h3 className='upto' >UPTO 50% OFF</h3>
        <h6 className='Explore_Items'>Explore Items</h6>
        
    </div>
   
    <div className="unflase1">
        <img className='flase1' src={unsplash_2} 
        />
        <h6 className='low_price1'>Low Price</h6>
        <h2 className='High_Coziness1' >High Coziness</h2>
        <h3 className='upto1' >UPTO 50% OFF</h3>
        <h6 className='Explore_Items1'>Explore Items</h6>
        
    </div>
    
    </div>
    <Photo_slider/>
    </div>
  )

  
}

export default Unflase