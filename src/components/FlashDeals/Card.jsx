import React, { useState } from "react";
import { useProductItemsContext } from "../../context/context";

const Card = ({ item }) => {
  const [count, setCount] = useState(0);
  const { addToCart } = useProductItemsContext();

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="box">
      <div className="product mtop">
        <div className="img">
          <span className="discount">{item.discount}% Off</span>
          <img src={item.cover} alt="cover" />
          <div className="product-like">
            <label>{count}</label>
            <i className="fa-regular fa-heart" onClick={increment}></i>
          </div>
        </div>
        <div className="product-details">
          <h3>{item.name}</h3>
          <div className="rate">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="price">
            <h4>${item.price}</h4>
            <button onClick={() => addToCart(item)}>
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
