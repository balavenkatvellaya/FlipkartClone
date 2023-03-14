import React from "react";
import { Link } from "react-router-dom";
import "../styles/SearchElement.css";

const SearchElement = ({ tosearch, data, showsearch, setShowSearch }) => {
  return showsearch ? (
    <div className="outersearch">
      {data
        .filter((val) => val.title.toLowerCase().includes(tosearch))
        .map((el, index) => {
          return (
            <Link
              key={index}
              to={`/productdetails/${el.id}`}
              onClick={() => setShowSearch(false)}
            >
              <div className="searchtitle">
                <p>{el.title}</p>
              </div>
            </Link>
          );
        })}
    </div>
  ) : (
    <></>
  );
};

export default SearchElement;
