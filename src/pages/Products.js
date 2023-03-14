import React, { useEffect, useState } from "react";
import "../styles/Products.css";
import { Link, useLocation } from "react-router-dom";

const Products = ({ Data }) => {
  console.log(Data);
  const location = useLocation();
  const category = location.state;

  const [filtereddata, setFilteredData] = useState([]);

  useEffect(() => {
    const product = Data.filter((val) => {
      return val.category.toLowerCase().includes(category);
    });
    setFilteredData(product);
  }, [Data, category]);

  console.log(filtereddata);

  return (
    <div className="outercontainer">
      <div className="productcontainer">
        {filtereddata.map((item, index) => {
          return (
            <Link to={`/Productdetails/${item.id}`} key={index}>
              <div className="productbox">
                <img src={item.image} alt="" />
                <div className="product-details">
                  <h3>
                    {item.title.length < 15
                      ? item.tile
                      : item.title.slice(0, 15) + "..."}
                  </h3>
                  <p>Shop Now</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
