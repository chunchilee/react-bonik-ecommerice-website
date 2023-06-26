import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../NewArrivals/style.css";
import Ddata from "./Ddata";

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  const renderCard = Ddata.map((v, i) => {
    return (
      <div className="box product" key={v.name}>
        <div className="img">
          <img src={v.cover} alt="card" />
        </div>
        <h4>{v.name}</h4>
        <span>{v.price}</span>
      </div>
    );
  });
  return <Slider {...settings}>{renderCard}</Slider>;
};

export default Dcard;
