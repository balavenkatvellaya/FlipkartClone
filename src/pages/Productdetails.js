import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ProductDetailData from '../components/ProductDetailData';
import "../styles/Productdetails.css"

const Productdetails = (props) => {

  const { Data } = props;
 
  const[item, setItem] = useState([]);
  
  const {id} = useParams();

  console.log(id);

  useEffect(() => {
    const product = Data.filter((val) => {
      return(
        val.id.toString() === id
      )
    });
    setItem(product);
  },[Data,id]);

  console.log(item);
  
  return (
    <div className="productdetailsouter">
      {item.map((val, index) => {
        return <ProductDetailData data={val} key={index}/>;
      })}
    </div>
  );
}

export default Productdetails