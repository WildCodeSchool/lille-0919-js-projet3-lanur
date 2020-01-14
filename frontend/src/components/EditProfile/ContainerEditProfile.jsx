import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "../style/EditProfileStyles/ContainerEditProfile.scss";

import Profile from "./Profile";
import Links from "./Links";
import Role from "./Role";
import Games from "./Game";

export default function ContainerEditProfile() {
  return (
    <div className="ContainerEditProfile">
      <ul>
        <li>
          <Link to="/editprofile">Profile</Link>
        </li>
        <li>
          <Link to="/editprofile/role">Role</Link>
        </li>
        <li>
          <Link to="/editprofile/links">Links</Link>
        </li>
        <li>
          <Link to="/editprofile/games">Games</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/editprofile">
          <Profile />
        </Route>
        <Route path="/editprofile/role">
          <Role />
        </Route>
        <Route path="/editprofile/links">
          <Links />
        </Route>
        <Route path="/editprofile/games">
          <Games />
        </Route>
      </Switch>
      <div className="submit">
        <button>Submit your modifications</button>
      </div>
    </div>
  );
}
