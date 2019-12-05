import React, { Component } from "react";
import "./style/NavBar.scss";

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
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
          <li onClick={this.showMenu}>
            <a href="#">
              <span className="FirstLetter">É</span>vènements
              {this.state.showMenu ? (
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
            {this.state.showMenu ? (
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
      </div>
    );
  }
}

export default NavBar;
