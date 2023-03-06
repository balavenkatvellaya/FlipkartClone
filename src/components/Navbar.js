import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "../styles/Navbar.css"
import {IoSearch} from 'react-icons/io5'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {FaShoppingCart} from "react-icons/fa"
import Login from './Login'

const Navbar = () => {

    const[isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <Link to={"/"}>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="flipkart-logo"
              className="navbar-logo"
            />
          </Link>

          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search for Products, brands and more"
              className="navbar-searchbox"
            ></input>
            <button className="searchbtn">
              <IoSearch />
            </button>
          </div>
          <button className="navbar-btn" onClick={() => setIsOpen(true)}>Login</button>

          <div className="navbar-seller">
            <h3>Become a Seller</h3>
          </div>
          <div className="navbar-more">
            <h3>
              More
              <i className="moredown">
                <MdKeyboardArrowDown />
              </i>
            </h3>
          </div>
          <div className="navbar-cart">
            <div className="cart-icon">
              <FaShoppingCart />
            </div>
            <Link to={"/cart"} className="cart">
              Cart 
            </Link>
          </div>
        </div>
        <Login isOpen={isOpen} setIsOpen={setIsOpen}></Login>
      </div>
      
    </>
  );
}

export default Navbar