import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/Caurosel.css"

const Caurosel = () => {

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 3000,
    }

  return (
      <div className="imgslider">
        <Slider {...settings}>
          <img
            className="carouselimg"
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/61c104839324e184.jpg?q=50"
            alt="img-1"
          />
          <img
            className="carouselimg"
            src="https://androidjunglee.com/wp-content/uploads/2015/06/big-app-shoppings-android-phones.jpg"
            alt="img-2"
          />
          <img
            className="carouselimg"
            src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/13d4b7ac61ff30ee.jpg?q=50"
            alt="img-3"
          />
          <img
            className="carouselimg"
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/61c104839324e184.jpg?q=50"
            alt="img-4"
          />
        </Slider>
      </div>
   
  );
}

export default Caurosel