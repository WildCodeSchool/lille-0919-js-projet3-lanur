import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { scaleDown as MenuBurger } from "react-burger-menu";
import "./style/NavBar.scss";
import "./style/Burger.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { backend } from "../conf.js";

function NavBar() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const [paramsMenu, setParamsMenu] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const dispatch = useDispatch();
  const user_id = useSelector(state => state.user_id);
  const history = useHistory();
  const [search, setSearch] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .get(`${backend}/api/search/users/?pseudo=${search}`)
      .then(function(response) {
        dispatch({ type: "SEARCH", value: response.data });
      })
      .then(() => {
        setBurgerMenu(false);
        history.push("/search");
      })
      .catch(() => {
        setBurgerMenu(false);
        history.push("/search");
      });
  };

  const change = e => {
    setSearch(e.target.value);
  };
  return (
    <nav className="main-NavBar">
      <h1 onClick={() => setBurgerMenu(false)}>
        <Link to="/newsfeed">
          <span className="Lan">LAN'</span>U.R
        </Link>
      </h1>

      <ul>
        <li className="search">
          {displaySearchBar ? (
            <div className="searchbar">
              <form className="formSearchBar" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Cherche un utilisateur avec son pseudo"
                  value={search}
                  onChange={e => change(e)}
                />
              </form>
            </div>
          ) : null}
          <img
            className="toggleSearch"
            src="../images/loupe.svg"
            onClick={() => setDisplaySearchBar(!displaySearchBar)}
          />
        </li>
        <li>
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
              alt=">"
              src="../images/Black_triangle_rotated.svg"
            ></img>
          ) : (
            <img
              className="triangle"
              alt="v"
              src="../images/Black_triangle.svg"
            ></img>
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
            <img
              className="gearIcon"
              alt="Menu"
              src="../images/gear_logo2.png"
            ></img>
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
      <div>
        <MenuBurger
          width={"100%"}
          isOpen={burgerMenu ? false : true}
          id="MenuBurger"
        >
          <ul className="burger">
            <li>
              <Link to="/newsfeed" onClick={() => setBurgerMenu(!burgerMenu)}>
                Actus
              </Link>
            </li>
            <li>
              <Link to="/teams" onClick={() => setBurgerMenu(!burgerMenu)}>
                Teams
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setBurgerMenu(!burgerMenu)}>
                Évènements
              </Link>
            </li>
            <li>
              <Link to={`/userpage/${user_id}`}>Profil</Link>
            </li>
            <li>
              <form onSubmit={handleSubmit}>
                <input
                  className="searchInput"
                  type="text"
                  placeholder="Cherche un utilisateur avec son pseudo"
                  value={search}
                  onChange={e => change(e)}
                />
                <input
                  className="launchSearch"
                  type="submit"
                  value="rechercher"
                />
              </form>
            </li>
            <li onClick={() => dispatch({ type: "DISCONNECT" })}>
              Déconnexion
            </li>
          </ul>
        </MenuBurger>
      </div>
    </nav>
  );
}

export default NavBar;
