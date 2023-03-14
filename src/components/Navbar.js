import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import SearchElement from "./SearchElement";
import { logout } from "../redux/action";

const Navbar = (props) => {
  const { data } = props;

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const state = useSelector((state) => state.handlingCart);

  const loggedinuserdata = useSelector((state) => state.loginreducer);

  const [searchitem, setSearchItem] = useState("");

  const [showsearch, setShowSearch] = useState(false);

  const handleChange = (e) => {
    let searchbar = e.target.value;
    setSearchItem(e.target.value.toLowerCase());
    if (searchbar.length > 1) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  };

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
              onChange={handleChange}
            ></input>
            <button className="searchbtn">
              <IoSearch />
            </button>
          </div>
          {Object.keys(loggedinuserdata).length > 0 ? (
            <button className="navbar-btn" onClick={() => dispatch(logout())}>
              Log Out
            </button>
          ) : (
            <button className="navbar-btn" onClick={() => setIsOpen(true)}>
              Login
            </button>
          )}

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
              <p>
                Cart(
                {Object.keys(loggedinuserdata).length > 0 ? state.length : 0})
              </p>
            </Link>
          </div>
        </div>
        <Login isOpen={isOpen} setIsOpen={setIsOpen}></Login>
        <SearchElement
          tosearch={searchitem}
          data={data}
          showsearch={showsearch}
          setShowSearch={setShowSearch}
        />
      </div>
    </>
  );
};

export default Navbar;
