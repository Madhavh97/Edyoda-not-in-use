import React from "react";
import EdyodaLogo from "../../assets/EDYODA.svg";
import SearchIcon from "../../assets/search.svg";
import "./Header.css";
import ExpandArrow from "../../assets/caret.svg";

const Header = () => (
  <div className="header">
    <nav className="navigation">
      <div className="header-left">
        <img src={EdyodaLogo} />
        <span>
          Courses
          <img className="caret" src={ExpandArrow} />
        </span>
        <span>
          Programs
          <img className="caret" src={ExpandArrow} />
        </span>
      </div>
      <div className="header-right">
        <img style={{ position: "relative", top: "0.7rem" }} src={SearchIcon} />
        <a>Log in</a>
        <button className="join-now-btn">JOIN NOW</button>
      </div>
    </nav>
  </div>
);
export default Header;
