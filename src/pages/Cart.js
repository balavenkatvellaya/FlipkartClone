import React, { useState } from "react";
import "../styles/Cart.css";

const Cart = () => {
  const [cartdata, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartitems"))
  );

  return (
    <div className="outercontainer">
      <div className="cartouter">
        {cartdata.map((el, index) => {
          return (
            <div className="outer" key={index}>
              <div className="data-img">
                <img src={el.image} alt="" />
              </div>
              {/* <div className="">{el.qty}</div> */}
              <div className="data-title">
                <h3>{el.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cartouter-right">
        <div className="pricedetail">
          <h3>Price Details</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
