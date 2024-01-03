import React from 'react'

import '../../Assets/Styles/HomePage/SliderCompoment.css';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../Assets/Image/slider1.jpg'
import Unflase from './Unflase';
const SliderCompoment = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
    };
    return (
        <div className='slider' >
            {/* <h2>Carousel Component</h2> */}
            <Slider {...settings}>
                <div>
                    <img src={slider1} />
                    <h5 className='header-tag' >T-shirt / Tops</h5>
                    <h1 className='headrline' >Summer Value Pack</h1>
                    <h4 className='sub-headline' >cool / colorful / comfy
                        <button name="button" type="button">Shop Now</button>
                    </h4>
                </div>
                <div>
                    <img src={slider1} />
                    <h5 className='header-tag' >T-shirt / Tops</h5>
                    <h1 className='headrline' >Summer Value Pack</h1>
                    <h4 className='sub-headline' >cool / colorful / comfy
                        <button name="button" type="button">Shop Now</button>
                    </h4>
                </div>
                <div>
                    <img src={slider1} />
                    <h5 className='header-tag' >T-shirt / Tops</h5>
                    <h1 className='headrline' >Summer Value Pack</h1>
                    <h4 className='sub-headline' >cool / colorful / comfy
                        <button name="button" type="button">Shop Now</button>
                    </h4>
                </div>
                <div>
                    <img src={slider1} />
                    <h5 className='header-tag' >T-shirt / Tops</h5>
                    <h1 className='headrline' >Summer Value Pack</h1>
                    <h4 className='sub-headline' >cool / colorful / comfy
                        <button name="button" type="button">Shop Now</button>
                    </h4>
                    {/* <button name="button" type="button">Shop Now</button> */}
                </div>
            </Slider>
            <Unflase/>
            
        </div>
      
    )
}

export default SliderCompoment