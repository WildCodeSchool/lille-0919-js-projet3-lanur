import React, { useState } from "react";
import "./style/NavBar.scss";

function NavBar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <nav className="main-NavBar">
      <h1>
        <a href="#">
          <span className="Lan">LAN'</span>U.R
        </a>
      </h1>
      <ul>
        <li>
          <div className="link">
            <a href="#">
              <span className="FirstLetter">A</span>ctus
            </a>
          </div>
        </li>
        <li>
          <a href="#">
            <span className="FirstLetter">T</span>eams
          </a>
        </li>
        <li onClick={() => setDisplayMenu(!displayMenu)}>
          <a href="#">
            <span className="FirstLetter">É</span>vènements
            {displayMenu ? (
              <img
                className="triangle"
                src="../images/Black_triangle_rotated.svg"
              ></img>
            ) : (
              <img
                className="triangle"
                src="../images/Black_triangle.svg"
              ></img>
            )}
          </a>
          {displayMenu ? (
            <div className="dropDownMenu">
              <li>
                <a href="#">
                  <span className="FirstLetter">A</span>genda
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="FirstLetter">R</span>ésultats
                </a>
              </li>
            </div>
          ) : null}
        </li>

        <li>
          <a href="#">
            <span className="FirstLetter">P</span>rofil
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
