import React from 'react'
import '../../Assets/Styles/HomePage/Photo_slider.css';

import Slider from "react-slick";
import photographer from '../../Assets/Image/photographer.jpg';
import Rectangle28 from '../../Assets/Image/Rectangle 28.jpg';
import Rectangle28_1 from '../../Assets/Image/Rectangle 28 (1).jpg';
import Rectangle28_2 from '../../Assets/Image/Rectangle 28 (2).jpg';

import Saving_zone from './Saving_zone';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
    
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
const Photo_slider = () => {
  return (
        <div>
        <div className='photo_slider' >
          <h2>| New Arrival</h2>    
          <Slider {...settings}>
            <div className='body_card' >
            <img className='photo1' src={photographer} />
             <div className='card_body'>
              <h3>Knitted Joggers</h3>
              </div>
            </div>
            
            <div>
            <img className='photo1' src={Rectangle28} />
            <div className='card_body'>
              <h3>Full Sleeve</h3>
              </div>
            </div>
            <div>
            <img className='photo1' src={Rectangle28_1} />
            <div className='card_body'>
              <h3>Active T-Shirts</h3>
              </div>
            </div>
            <div>
            <img className='photo1' src={Rectangle28_2} />
            <div className='card_body'>
              <h3>Urban Shirts</h3>
              </div>
            </div>
            <div>
            <img className='photo1' src={Rectangle28_1} />
            <div className='card_body'>
              <h3>Knitted Joggers</h3>
              </div>
            </div>
            <div>
            <img className='photo1' src={Rectangle28_2} />
            <div className='card_body'>
              <h3>Knitted Joggers</h3>
              </div>
            </div>
            <div>
            <img className='photo1' src={Rectangle28} />
            <div className='card_body'>
              <h3>Knitted Joggers</h3>
              </div>
            </div>
            <div>
            <img className='photo1' src={photographer} />
            <div className='card_body'>
              <h3>Knitted Joggers</h3>
              </div>
              
            </div>
          </Slider>
          <Saving_zone/>
        </div>
        
    </div>
  )
  
}

export default Photo_slider