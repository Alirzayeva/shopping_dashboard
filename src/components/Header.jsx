import React from "react";
// import { MainContext } from "../utils/MainContext";

import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Sneakers Shopping</Link>
        </div>
        <nav className="navBar">
          <ul className="navList">
            <li className="navItem">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/all-products">All Products</NavLink>
            </li>{" "}
            <li className="navItem">
              <NavLink to="/create-product">Create Product</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
