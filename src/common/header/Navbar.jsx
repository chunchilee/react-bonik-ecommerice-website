import React, { useState } from "react";

import { Link } from "react-router-dom";
import Categories from "./Categories";
const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="container d_flex">
        <div
          className="categories d_flex"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className="fa-solid fa-border-all"></span>
          <h4>
            Categories <i className="fa fa-chevron-down"></i>
          </h4>
        </div>
        <div className="navLink">
          <ul
            className={
              MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
            }
            onClick={() => setMobileMenu(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user">User Account</Link>
            </li>
            <li>
              <Link to="/vendor">Vendor Account</Link>
            </li>
            <li>
              <Link to="/track">Track my order</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
          <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
            {MobileMenu ? (
              <i className="fas fa-times close home-btn"></i>
            ) : (
              <i className="fas fa-bars open"></i>
            )}
          </button>
        </div>
        {isOpen && <Categories />}
      </div>
    </div>
  );
};

export default Navbar;
