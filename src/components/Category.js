import React from "react";
import "../styles/Category.css";
import { Link } from "react-router-dom";
const Category = ({ data }) => {
  return (
    <div className="category-content">
      <Link to="/products" state="clothing">
        <div className="category-details" key={0}>
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="clothing"
          />
          <p className="title">Clothing</p>
        </div>
      </Link>
      <Link to="/products" state="jewelery">
        <div className="category-details" key={1}>
          <img
            src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
            alt="jewellery"
          />
          <p className="title">Jewellery</p>
        </div>
      </Link>
      <Link to="/products" state="electronics">
        <div className="category-details" key={2}>
          <img
            src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
            alt="electronics"
          />
          <p className="title">Electronics</p>
        </div>
      </Link>
    </div>
  );
};

export default Category;
