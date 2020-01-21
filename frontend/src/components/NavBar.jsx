import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/NavBar.scss";

function NavBar() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <div>
      <div className="burgerMenu">
        <div className="toggle_btn" onClick={() => setBurgerMenu(!burgerMenu)}>
          <span></span>
        </div>
        {burgerMenu ? (
          <div className="burgerMenuOn">
            <ul>
              <li onClick={() => setBurgerMenu(!burgerMenu)}>
                <Link to="/newsfeed">
                  <span className="FirstLetter">A</span>ccueil
                </Link>
              </li>
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
                  <span className="FirstLetter">A</span>genda
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="FirstLetter">R</span>ésultats
                </a>
              </li>
              <li onClick={() => setBurgerMenu(!burgerMenu)}>
                <Link to="/EditProfile">
                  <span className="FirstLetter">P</span>rofil
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="burgerMenuOff"></div>
        )}
        <nav className="main-NavBar">
          <h1>
            <Link to="/newsfeed">
              <span className="Lan">LAN'</span>U.R
            </Link>
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
              <Link to="/EditProfile">
                <span className="FirstLetter">P</span>rofil
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
