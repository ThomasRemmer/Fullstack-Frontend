import React from "react";

import "./SettingsMenu.scss";

import blackCross from "../../assets/images/black-cross.png";

import {Link} from "react-router-dom";

const NavMenu = props => {
  const { toggleSettings } = props;

  return (
    <div className="nav-menu">
      <div className="nav-menu__content">
        <img src={blackCross} alt="Close menu" className="nav-menu__cross" onClick={toggleSettings} />
        <Link to="/login" className="nav-menu__item" onClick={toggleSettings}>
          Login
        </Link>

      </div>
    </div>
  );
};

export default NavMenu;
