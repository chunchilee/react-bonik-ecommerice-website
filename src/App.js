import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./common/Cart/Cart";
import Footer from "./common/Footer/Footer";
import Header from "./common/header/Header";

import Pages from "./pages/Pages";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
