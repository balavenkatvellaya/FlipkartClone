import React from 'react'
import "../styles/ProductCarouselData.css"

const ProductCauroselData = ({img, Title}) => {
  
  return (
    <>
      <div className="carouselpdt">
        <img src={img} className="product-img" alt="" />
        <p className="pdt-title">{Title.length < 25 ? Title : Title.slice(0,15) + "..."}</p>
        <p className='pdt-shopnow'>Shop Now!</p>
      </div>
    </>
  );
}

export default ProductCauroselData