import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useProductItemsContext } from "../../context/context";
import Card from "./Card";

const SampleNextArrow = ({ onClick }) => {
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = ({ onClick }) => {
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

const FlashCard = () => {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  });

  const { productItems } = useProductItemsContext();

  useEffect(() => {
    const handleRWD = () => {
      if (window.innerWidth < 850) {
        const upDataSettings = { ...settings, slidesToShow: 3 };
        setSettings(upDataSettings);
      } else {
        const upDataSettings = { ...settings, slidesToShow: 4 };
        setSettings(upDataSettings);
      }
    };

    window.addEventListener("resize", handleRWD);
    return () => {
      window.removeEventListener("resize", handleRWD);
    };
  }, [settings]);

  const renderProductItems = productItems.map((item) => {
    return <Card item={item} key={item.id} />;
  });
  return <Slider {...settings}>{renderProductItems}</Slider>;
};

export default FlashCard;


