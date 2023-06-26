import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TData from "./TData";

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };

  const renderTopCart = TData.map((v, i) => {
    return (
      <div className="box product" key={i}>
        <div className="nameTop d_flex">
          <span className="tLeft">{v.para}</span>
          <span className="tRight">{v.desc}</span>
        </div>
        <div className="img">
          <img src={v.cover} alt="" />
        </div>
      </div>
    );
  });

  return <Slider {...settings}>{renderTopCart}</Slider>;
};

export default TopCart;
