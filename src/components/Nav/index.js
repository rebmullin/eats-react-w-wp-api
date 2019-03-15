import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Nav = () => (
  <nav className="eats-nav">
    <ul className="eats-nav-list">
      <li className="eats-nav-list-item">
        <NavLink
          exact
          className="eats-nav-link"
          to="/"
          activeClassName="eats-nav-list-item--active"
        >
          Lunch &amp; Dinner Menu
        </NavLink>
      </li>
      <li className="eats-nav-list-item">
        <NavLink
          className="eats-nav-link"
          to="/blog"
          activeClassName="eats-nav-list-item--active"
        >
          Blog
        </NavLink>
      </li>
      <li className="eats-nav-list-item">
        <NavLink
          className="eats-nav-link"
          to="/about-us"
          activeClassName="eats-nav-list-item--active"
        >
          About Us
        </NavLink>
      </li>
      <li className="eats-nav-list-item">
        <NavLink
          exact
          className="eats-nav-link"
          to="/contact"
          activeClassName="eats-nav-list-item--active"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
