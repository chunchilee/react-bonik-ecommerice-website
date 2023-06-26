import React from "react";

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sony",
    },
  ];

  const renderCatg = data.map((v, i) => {
    return (
      <div className="box f_flex" key={i}>
        <img src={v.cateImg} alt="" />
        <span>{v.cateName}</span>
      </div>
    );
  });
  return (
    <div className="category">
      {renderCatg}
    </div>
  );
};

export default Catg;
