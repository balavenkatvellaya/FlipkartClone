import React, { useState } from "react";
import "../styles/ProceedPayment.css";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const ProceedPayment = () => {
  const [submit, setSubmit] = useState(false);

  const location = useLocation();

  const pricedata = location.state;

  console.log(pricedata.price);

  const showToastMessage = (category, message) => {
    switch (category) {
      case "success": {
        toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      }

      default:
        return "Order placed";
    }
  };

  const handleSubmit = (e) => {
    setSubmit(true);
    e.preventDefault();
    showToastMessage("success", "Order placed successfully");
  };

  return submit ? (
    <div className="completeboxouter">
      <div className="completebox">
        <div>
          <h2>Your Order has been placed Successfully</h2>
        </div>
        <Link to="/">
          <h4>Click to continue shopping...</h4>
        </Link>
      </div>
    </div>
  ) : (
    <>
      <div className="formouteroverlay">
        <div className="formlayout">
          <form className="detailform" onSubmit={handleSubmit}>
            <p>
              <label>Name:</label>
              <input type="text" placeholder="Enter your Name" required></input>
            </p>
            <p>
              <label>Mobile No:</label>
              <input
                type="number"
                placeholder="Enter 10 digit mobile number"
                required
              />
            </p>
            <p className="address-bar">
              <label>Address:</label>
              <textarea
                type="text"
                placeholder="Enter the communication address"
                required
                style={{
                  height: "150px",
                  textAlign: "start",
                  padding: "10px",
                  resize: "none",
                }}
              />
            </p>
            <p>
              <label>City/District:</label>
              <input type="text" placeholder="Enter City/District" required />
            </p>
            <p>
              <label>State:</label>
              <input type="text" placeholder="Enter State" required />
            </p>
            <div className="finalbtndiv">
              <button type="submit" className="finalbtn">
                Place Order
              </button>
            </div>
          </form>
        </div>
        <div className="cartouter-right">
          <div className="pricedetail">
            <h3>Price Details</h3>
          </div>
          <hr />
          <div className="product-itemprice">
            <p>
              Price{" "}
              {pricedata.item > 1
                ? `(${pricedata.item}Items)`
                : `(${pricedata.item}Item)`}
            </p>
            <p>{pricedata.price}</p>
          </div>
          <div className="deliveryprice">
            <p>Delivery Charge</p>
            <p style={{ color: "green" }}>Free</p>
          </div>
          <hr />
          <div className="TotalAmount">
            <h3>Total Amount</h3>
            <h3>{pricedata.price}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProceedPayment;
