import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import SignIn from "./components/SignIn";
import Form from "./components/Form";
import NewsFeed from "./components/NewsFeed";
import ContainerEditProfile from "./components/EditProfile/ContainerEditProfile";
import Axios from "axios";

function App() {

  const jwt = useSelector((state) => state.jwt);
  const checkJWT = (component) => (jwt ? component : <Redirect to="/signin" />);

  useEffect(() => {
    if (jwt) Axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
  }, [jwt]);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Carousel} />
        <Route exact path="/signin" component={SignIn} />
        <Route path="/signin/form" component={Form} />
        <Route path="/newsfeed" render={() => checkJWT(<NewsFeed />)} />
        <Route
          path="/editprofile"
          render={() => checkJWT(<ContainerEditProfile />)}
        />
      </Switch>
    </div>
  );
}

export default App;
