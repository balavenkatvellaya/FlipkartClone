import React from "react";
import "../styles/ProductDetailData.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { HiStar } from "react-icons/hi";
import { FaRupeeSign } from "react-icons/fa";

const ProductDetailData = ({ data }) => {
  const setDataTOCart = () => {
    let localstoragedata = JSON.parse(localStorage.getItem("cartitems"));

    if (localstoragedata) {
      let a = localstoragedata.find((item) => item.id === data.id);
      let b = {};
      let newcartdata1 = [];

      if (a) {
        b = {
          ...a,
          qty: a.qty + 1,
        };
        newcartdata1 = localstoragedata.map((item) => {
          if (b.id === item.id) {
            return b;
          } else {
            return item;
          }
        });
      } else {
        b = {
          ...data,
          qty: 1,
        };
        newcartdata1 = [...localstoragedata, b];
      }

      localStorage.setItem("cartitems", JSON.stringify(newcartdata1));
    } else {
      let newcartdata = [{ ...data, qty: 1 }];
      localStorage.setItem("cartitems", JSON.stringify(newcartdata));
    }
  };

  return (
    <div className="productdetailsouter">
      <div className="productdetailsleft">
        <div className="productdetailsinnerleft">
          <img src={data.image} alt="" className="productimage" />
        </div>
        <div className="productbtn">
          <button className="addtocart butt" onClick={setDataTOCart}>
            <AiOutlineShoppingCart style={{ height: 18, width: 18 }} /> ADD TO
            CART 1
          </button>
          <button className="buynow butt">
            <AiFillThunderbolt style={{ height: 18, width: 18 }} />
            BUY NOW
          </button>
        </div>
      </div>

      <div className="productdetailsright">
        <div className="productdetails">
          <h3>{data.title}</h3>
          <div className="rating">
            <div>
              {data.rating.rate}

              <HiStar className="ratingicon" />
            </div>
            <p>({data.rating.count})</p>
          </div>
          <div className="Productprice">
            <div className="rupeeicon">
              <FaRupeeSign style={{ height: 20, width: 20 }} />
            </div>
            <h2>{data.price}</h2>
          </div>
          <div className="product-desc">
            <h4>Description</h4>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailData;
