import React from "react";
import "../styles/Cart.css";
import { useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeCart } from "../redux/action";
import { increment } from "../redux/action";
import { decrement } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const loggedinuserdata = useSelector((state) => state.loginreducer);

  const product = useSelector((pdt) => pdt.handlingCart);

  const dispatch = useDispatch();

  const remove = (product) => {
    dispatch(removeCart(product));
  };

  const increase = (product) => {
    dispatch(increment(product));
  };

  const decrease = (product) => {
    dispatch(decrement(product));
  };

  let totalprice = (item) => {
    return item
      .map((el) => el.price * el.qty * 80)
      .reduce((acc, value) => acc + value, 0);
  };

  let pricedata = {
    price: totalprice(product),
    item: product.length,
  };

  if (Object.keys(loggedinuserdata).length === 0) {
    return (
      <div className="outercontainer">
        <div className="cartouter">
          <div className="noitem">
            <h3>Login in to use Cart</h3>
          </div>
        </div>
        <div className="cartouter-right">
          <div className="pricedetail">
            <h3>Price Details</h3>
          </div>
        </div>
      </div>
    );
  }

  if (product.length === 0) {
    return (
      <div className="outercontainer">
        <div className="cartouter">
          <div className="noitem">
            <h3>Add item to the Cart</h3>
          </div>
        </div>
        <div className="cartouter-right">
          <div className="pricedetail">
            <h3>Price Details</h3>
          </div>
          <hr />
          <div className="product-itemprice">
            <p>
              Price{" "}
              {product.length > 1
                ? `(${product.length}Items)`
                : `(${product.length}Item)`}
            </p>
            <p>{totalprice(product)}</p>
          </div>
          <div className="deliveryprice">
            <p>Delivery Charge</p>
            <p style={{ color: "green" }}>Free</p>
          </div>
          <hr />
          <div className="TotalAmount">
            <h3>Total Amount</h3>
            <h3>{totalprice(product)}</h3>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="outercontainer">
        <div className="cartouter">
          <div className="cart-items">
            {product.map((el, index) => {
              return (
                <div className="outer" key={index}>
                  <div className="data-img">
                    <img src={el.image} alt="" />
                  </div>
                  <div className="data-title">
                    <h3>
                      {el.title.length < 20
                        ? el.title
                        : el.title.slice(0, 20) + "..."}
                    </h3>
                    <h3 className="title-price">
                      <FaRupeeSign />
                      {el.price * el.qty * 80}
                    </h3>
                    <div className="quantity">
                      <button
                        className="quantitybtn"
                        onClick={() => decrease(el)}
                      >
                        -
                      </button>
                      <p>{el.qty}</p>
                      <button
                        className="quantitybtn"
                        onClick={() => increase(el)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="removebox">
                    <button className="removebtn" onClick={() => remove(el)}>
                      Remove Item
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="placeorder">
            <Link to="/proceedpayment" state={pricedata}>
              <button className="placeorderbtn">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
        <div className="cartouter-right">
          <div className="pricedetail">
            <h3>Price Details</h3>
          </div>
          <hr />
          <div className="product-itemprice">
            <p>
              Price{" "}
              {product.length > 1
                ? `(${product.length}Items)`
                : `(${product.length}Item)`}
            </p>
            <p>{totalprice(product)}</p>
          </div>
          <div className="deliveryprice">
            <p>Delivery Charge</p>
            <p style={{ color: "green" }}>Free</p>
          </div>
          <hr />
          <div className="TotalAmount">
            <h3>Total Amount</h3>
            <h3>{totalprice(product)}</h3>
          </div>
        </div>
        {/* <ProceedPayment checkoutopen={checkout} setcheckoutopen={setCheckOut} /> */}
      </div>
    );
  }
};

export default Cart;
