import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { scaleDown as MenuBurger } from "react-burger-menu";
import "./style/NavBar.scss";
import "./style/Burger.scss";
import SearchBar from "./SearchBar";

function NavBar() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const [paramsMenu, setParamsMenu] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const dispatch = useDispatch();
  const user_id = useSelector(state => state.user_id);
  return (
    <nav className="main-NavBar">
      <h1 onClick={() => setBurgerMenu(false)}>
        <Link to="/newsfeed">
          <span className="Lan">LAN'</span>U.R
        </Link>
      </h1>

      <ul>
        <li id="search">
          {displaySearchBar ? (
            <div className="searchbar">
              <SearchBar />
            </div>
          ) : null}
          <img
            className="toggleSearch"
            src="../images/loupe.svg"
            onClick={() => setDisplaySearchBar(!displaySearchBar)}
          />
        </li>
        <li onClick={() => setDisplayMenu(!displayMenu)}>
          <Link to="/newsfeed">
            <span className="FirstLetter">A</span>ctus
          </Link>
        </li>
        <li>
          <Link to="/teams">
            <span className="FirstLetter">T</span>eams
          </Link>
        </li>
        <li
          className="dropDown"
          onClick={() => {
            setDisplayMenu(!displayMenu);
            setParamsMenu(false);
          }}
        >
          <span className="FirstLetter">É</span>vènements
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
        <li
          onClick={() => {
            setParamsMenu(!paramsMenu);
            setDisplayMenu(false);
          }}
        >
          <button>
            <img className="gearIcon" src="../images/gear_logo2.png"></img>
          </button>
          {paramsMenu ? (
            <div className="dropDownParamsMenu">
              <li>
                <Link to={`/userpage/${user_id}`}>
                  <span className="FirstLetter">P</span>rofil
                </Link>
              </li>
              <li onClick={() => dispatch({ type: "DISCONNECT" })}>
                <span className="FirstLetter">D</span>éconnection
              </li>
            </div>
          ) : null}
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
              <Link to={`/userpage/${user_id}`}>
                <span className="FirstLetter">P</span>rofil
              </Link>
            </li>
            <li onClick={() => dispatch({ type: "DISCONNECT" })}>
              Déconnection
            </li>
          </ul>
        </MenuBurger>
      </div>
    </nav>
  );
}

export default NavBar;
