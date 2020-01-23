import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "../style/EditProfileStyles/ContainerEditProfile.scss";
import axios from "axios";
import { backend } from "../../conf.js";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import Links from "./Links";
import Role from "./Role";
import Games from "./Games";

export default function ContainerEditProfile() {
  const [user, getUser] = useState();
  const user_id = useSelector(state => state.user_id);
  useEffect(() => {
    axios
      .get(`${backend}/api/profile/${user_id}`)
      .then(({ data }) => {
        getUser(data[0]);
      })
      .catch(err => {});
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    axios
      .put(`${backend}/api/user/`)
      .then()
      .catch();
  };

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
