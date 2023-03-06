import React from 'react'
import "../styles/Home.css"
import Category from '../components/Category'
import Caurosel from '../components/Caurosel'
import ProductCaurosel from '../components/ProductCaurosel'

const Home = (props) => {
  
  const {Homedata} = props

  return (
    <div className="Home">
      <div className="Home-box">
        <div className="productbar">
          <Category data={Homedata} />
        </div>

        <div className="caurosel-container">
          <div className="cauroselbar">
            <Caurosel />
          </div>
        </div>
        <div className="product-container">
          <ProductCaurosel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Electronics"
            Data={Homedata}
          />
          
          <ProductCaurosel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Jewelery"
            Data={Homedata}
          />

          <ProductCaurosel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Clothing"
            Data={Homedata}
          />
        </div>
      </div>
    </div>
  );
}

export default Home