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
        <Link to="/home" className="nav-menu__item" onClick={toggleNav}>
          Add New Holiday
        </Link>

        <Link to="/gallery" className="nav-menu__item" onClick={toggleNav}>
          View Holidays
        </Link>



      </div>
    </div>
  );
};

export default NavMenu;
