import React from "react";

import "./NavMenu.scss";

import blackCross from "../../assets/images/black-cross.png";

import {Link} from "react-router-dom";

const NavMenu = props => {
  const { toggleNav } = props;

  return (
    <div className="nav-menu">
      <div className="nav-menu__content">
        <img src={blackCross} alt="Close menu" className="nav-menu__cross" onClick={toggleNav} />
        <Link to="/" className="nav-menu__item" onClick={toggleNav}>
          Home
        </Link>

        <Link to="/" className="nav-menu__item" onClick={toggleNav}>
          Studio Gallery
        </Link>

        <Link to="/" className="nav-menu__item" onClick={toggleNav}>
          Public Gallery
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
