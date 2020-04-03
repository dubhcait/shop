import React from "react";
import { Link } from "react-router-dom";
import { Basket, Logo } from "../assets";

const Navbar = ({ basketItems }) => (
  <nav
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "50px",
      padding: "10px"
    }}
    className="darkerBackground"
  >
    <Link to="/">
      <Logo />
    </Link>

    <div
      style={{
        display: "flex"
      }}
    >
      <Basket /> <span title="Basket Items">{basketItems}</span>
    </div>
  </nav>
);

export default Navbar;
