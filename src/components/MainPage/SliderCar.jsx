import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SData from "./SData";

const SliderCar = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  const renderSData = SData.map((v, i) => {
    return (
      <div className="box d_flex " key={i}>
        <div className="left">
          <h1>{v.title}</h1>
          <p>{v.desc}</p>
          <button className="btn-primary">Visit Collections</button>
        </div>
        <div className="right">
          <img src={v.cover} alt="cover" />
        </div>
      </div>
    );
  });

  return <Slider {...settings}>{renderSData}</Slider>;
};

export default SliderCar;
