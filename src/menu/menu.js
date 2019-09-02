
import React from 'react';

import { Link } from "react-router-dom";

import './menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="navbar-nav mr-auto" >
        <span className="route">
          <Link to="/" className="nav-link">իմ էջը</Link>
        </span>
        <span  className="route">
          <Link to="/my_declaration" className="nav-link">Ապրանքներ</Link>
        </span>
        <span className="route">
          <Link to="/reminders" className="nav-link">Հիշվածները</Link>
        </span>
        <span className="route">
          <Link to="/add_declaration" className="nav-link">Ավելացնել ապրանք</Link>
        </span>

        <span className="route">
          <Link to="/prof-menu" className="nav-link">Պատվիրատուներ</Link>
        </span>
      </div>
    </div>
  );
};

export default Menu;
