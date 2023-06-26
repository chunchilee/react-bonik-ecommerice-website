import React from "react";
import NData from "./NData";

const Card = () => {
  const renderCart = NData.map((v, i) => {
    return (
      <div className="box" key={i}>
        <div className="img">
          <img src={v.cover} alt="Cart" />
        </div>
        <h4>{v.name}</h4>
        <span>${v.price}</span>
      </div>
    );
  });
  return <div className="content float grid product">{renderCart}</div>;
};

export default Card;
