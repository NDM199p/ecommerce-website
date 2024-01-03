import React from 'react'
import Rectangle_74 from '../../Assets/Image/Rectangle_74.jpg'
import Rectangle_75 from '../../Assets/Image/Rectangle 75.jpg'
import Rectangle_76 from '../../Assets/Image/Rectangle 76.jpg'
import Rectangle_77 from '../../Assets/Image/Rectangle 77.jpg'
import Rectangle_78 from '../../Assets/Image/Rectangle 78.jpg'
import '../../Assets/Styles/HomePage/saving_zone.css';
import Unspack from './Unspack';
const Saving_zone = () => {
    return (
   
        <div>
                <div className='allZone'>

                <p className='bigzone'>|Big Saving Zone</p>
                <div className="zoneflase">
                
                    <img className='imgzone' src={Rectangle_74}
                    />
                    <h6 className='Hawaiian_Shirts'>Hawaiian Shirts</h6>
                    <h2 className='Dressup' >Dress up in summer vibe</h2>
                    <h3 className='uptoyear' >UPTO 50% OFF</h3>
                     <p className='icondow'> <a>↓</a> </p>
                    <h2>
                    <button className='shopnow' name="button" type="button">Shop Now</button>
                    </h2>
                  
            </div>
         
                
         <div className='zone1'>
         <img className='imgzone5' src={Rectangle_75}
                    />
                    
                    <h6 className='Hawaiian_Shirts2'>Hawaiian Shirts</h6>
                    <h2 className='Dressup2' >Dress up in summer vibe</h2>
                    <h3 className='uptoyear2' >UPTO 50% OFF</h3>
                     <p className='icondow2'> <a>↓</a> </p>
                    <h5>
                    <button className='shopnow' name="button" type="button">Shop Now</button>
                    </h5>
                  
         </div>

        <div className='zone2'>
        <img className='imgzone5' src={Rectangle_76}
                    />
                    
                    <h6 className='Hawaiian_Shirts2'>Hawaiian Shirts</h6>
                    <h2 className='Dressup2' >Dress up in summer vibe</h2>
                    <h3 className='uptoyear2' >UPTO 50% OFF</h3>
                     <p className='icondow2'> <a>↓</a> </p>
                    <h5>
                    <button className='shopnow' name="button" type="button">Shop Now</button>
                    </h5>
        </div>
   
        <div className='zone3'>
        <img className='imgzone1' src={Rectangle_77}
                    />
                    <h6 className='Hawaiian_Shirts4'>Hawaiian Shirts</h6>
                    <h2 className='Dressup4' >Dress up in summer vibe</h2>
                    <h3 className='uptoyear4' >UPTO 50% OFF</h3>
                     <p className='icondow4'> ↓</p>
                    <h3>
                    <button className='shopnow' name="button" type="button">Shop Now</button>
                    </h3>
        </div>
        <div className='zone4'>
        <img className='imgzone2' src={Rectangle_78}
                    />
                    <h6 className='Hawaiian_Shirts5'>Hawaiian Shirts</h6>
                    <h2 className='Dressup5' >Dress up in summer vibe</h2>
                    <h3 className='uptoyear5' >UPTO 50% OFF</h3>
                     <p className='icondow5'> <a>↓</a> </p>
                    <h3>
                    <button className='shopnow' name="button" type="button">Shop Now</button>
                    </h3>
                    
        </div>
        
        </div>
        <Unspack/>
        </div>
    )
}

export default Saving_zone