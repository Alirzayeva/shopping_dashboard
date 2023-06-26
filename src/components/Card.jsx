import React from "react";
import { Link } from "react-router-dom";

// import axios from "axios";



const Card = ({item}) => {


  return (
    <div className="card">
      <div className="cardImg">
        <img src={`http:localhost:5000/api/product/image`} alt="sneakers" />
      </div>
      <div className="cardInfo">
        {/* <h2 className="title">{item.name}</h2>
        <p className="info">{item.details}</p>
        <p className="price">{item.price} $</p> */}
        <button className="btn"><Link to="/product-details">Add to card</Link></button>
      </div>
    </div>
  );
};

export default Card;
