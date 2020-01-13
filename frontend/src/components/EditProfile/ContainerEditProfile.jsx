import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../style/EditProfileStyles/ContainerEditProfile.scss";

import Profile from "./Profile";
import Links from "./Links";
import Role from "./Role";
import Games from "./Game";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navProfile">
          <ul>
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/role">Role</Link>
            </li>
            <li>
              <Link to="/links">Links</Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Profile />
          </Route>
          <Route path="/role">
            <Role />
          </Route>
          <Route path="/links">
            <Links />
          </Route>
          <Route path="/games">
            <Games />
          </Route>
        </Switch>
        <div>
          <input
            className="submit"
            type="submit"
            value="Submit your modifications"
          />
        </div>
      </div>
    </Router>
  );
}
