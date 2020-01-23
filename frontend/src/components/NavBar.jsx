import React, { useState } from "react";
import { scaleDown as MenuBurger } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./style/NavBar.scss";
import "./style/Burger.scss";

function NavBar() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <nav className="main-NavBar">
      <h1 onClick={() => setBurgerMenu(false)}>
        <Link to="/newsfeed">
          <span className="Lan">LAN'</span>U.R
        </Link>
      </h1>

      <ul>
        <li onClick={() => setDisplayMenu(!displayMenu)}>
          <Link to="/newsfeed">
            <span className="FirstLetter">A</span>ctus
          </Link>
        </li>
        <li>
          <a href="#">
            <span className="FirstLetter">T</span>eams
          </a>
        </li>
        <li className="dropDown" onClick={() => setDisplayMenu(!displayMenu)}>
          <span>
            <span className="FirstLetter">É</span>vènements
          </span>
          {displayMenu ? (
            <img
              className="triangle"
              src="../images/Black_triangle_rotated.svg"
            ></img>
          ) : (
            <img className="triangle" src="../images/Black_triangle.svg"></img>
          )}
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
      <div onClick={() => setBurgerMenu(!burgerMenu)}>
        <MenuBurger
          width={"100%"}
          isOpen={burgerMenu ? false : true}
          id="MenuBurger"
        >
          <ul>
            <li>
              <Link to="/newsfeed" onClick={() => setBurgerMenu(!burgerMenu)}>
                Actus
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setBurgerMenu(!burgerMenu)}>
                Teams
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setBurgerMenu(!burgerMenu)}>
                Évènements
              </Link>
            </li>
            <li>
              <Link
                to="/EditProfile"
                onClick={() => setBurgerMenu(!burgerMenu)}
              >
                Profil
              </Link>
            </li>
          </ul>
        </MenuBurger>
      </div>
    </nav>
  );
}

export default NavBar;
