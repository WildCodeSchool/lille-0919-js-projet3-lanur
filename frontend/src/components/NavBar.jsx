import React, { Component } from "react";
import "./style/NavBar.scss";

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      toggleMenu: false
    };
  }

  toggleMenu = () => {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  };

  render() {
    return (
      <nav className="main-NavBar">
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
          <li onClick={this.toggleMenu}>
            <a href="#">
              <span className="FirstLetter">É</span>vènements
              {this.state.toggleMenu ? (
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
            {this.state.toggleMenu ? (
              <div
                className="dropDownMenu"
                ref={element => {
                  this.dropdownMenu = element;
                }}
              >
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
}

export default NavBar;
