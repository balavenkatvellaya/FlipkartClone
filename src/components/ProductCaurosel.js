import React from "react";
import "../styles/ProductCarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCauroselData from "./ProductCauroselData";
import { Link } from "react-router-dom";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";

const Next = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowForwardIos
        style={{ color: "black", fontSize: 25, fontWeight: 900 }}
      />
    </div>
  );
};

const Prev = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineArrowBackIosNew
        style={{ color: "black", fontSize: 25, fontWeight: 900 }}
      />
    </div>
  );
};

const ProductCaurosel = ({ BgImg, Title, Data }) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    infinite: false,
  };

  return (
    <div className="outer-box">
      <div
        className="inner-left"
        style={{ background: `url(${BgImg}) no-repeat 0px bottom` }}
      >
        <p className="innerleft-title">Best of {Title}</p>
        <Link to="/products" state={Title.toLowerCase()}>
          <button className="innerleft-btn">View All</button>
        </Link>
      </div>
      <div className="inner-right">
        <Slider nextArrow={<Next />} prevArrow={<Prev />} {...settings}>
          {Data.filter((val) => val.category.includes(Title.toLowerCase())).map(
            (filval, index) => {
              return (
                <Link key={index} to={`/Productdetails/${filval.id}`}>
                  <ProductCauroselData
                    img={filval.image}
                    Title={filval.title}
                  />
                </Link>
              );
            }
          )}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCaurosel;
