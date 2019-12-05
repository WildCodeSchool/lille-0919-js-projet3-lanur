import React from "react";
import "./style/NavBar.scss";

function NavBar() {
  return (
    <div className="main-NavBar">
      <h1>
        <a href="#">
          <span className="Lan">LAN'</span>U.R
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">
            <span className="FirstLetter">A</span>ctus
          </a>
        </li>
        <li>
          <a href="#">
            <span className="FirstLetter">T</span>eams
          </a>
        </li>
        <li>
          <a href="#">
            <span className="FirstLetter">É</span>vènements
            <img className="triangle" src="../images/Black_triangle.svg"></img>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="FirstLetter">P</span>rofil
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
