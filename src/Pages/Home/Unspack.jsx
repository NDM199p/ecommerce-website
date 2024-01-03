import React from 'react'
import unspack_demo from '../../Assets/Image/unspack.jpg';
 import rectangle13 from'../../Assets/Image/Rectangle 13.jpg';
 import '../../Assets/Styles/HomePage/Un_spack.css';
 import Categories from './Categories';
const unspack = () => {
  return (
  <div>
    <div className='all_unspack1'>
        <img className='imgspack' src={unspack_demo} 
        />
        <h1 className='text_spack'>WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
        <h4 className='text_subspack'>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</h4>
        <button className='shopnow_sub' name="button" type="button">Shop Now</button>
       
        <img className='Rectangle' src={rectangle13} />
        
    </div>
    <Categories/>
    </div>
    
  )

 
}

export default unspack