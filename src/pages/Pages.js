import React from "react";
import Announcement from "../components/Announcement/Announcement";
import Discount from "../components/Discount/Dicsount";
import FlashDeals from "../components/FlashDeals/FlashDeals";
import Home from "../components/MainPage/Home";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import Shop from "../components/Shops/Shop";
import TopCate from "../components/TopCate/TopCate";
import Wrapper from "../components/Wrapper/Wrapper";

const Pages = () => {
  return (
    <>
      <Home />
      <FlashDeals />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop />
      <Announcement />
      <Wrapper />
    </>
  );
};

export default Pages;
