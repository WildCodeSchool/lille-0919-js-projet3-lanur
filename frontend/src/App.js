import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import SignIn from "./components/SignIn";
import NewsFeed from "./components/NewsFeed";
import UserPage from "./components/UserPage";

function App() {
  const jwt = useSelector(state => state.jwt);
  const checkJWT = component => (jwt ? component : <Redirect to="/signin" />);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Carousel} />
        <Route path="/signin" component={SignIn} />
        <Route path="/newsfeed" render={() => checkJWT(<NewsFeed />)} />
        <Route path="/userpage" render={() => checkJWT(<UserPage />)} />
      </Switch>
    </div>
  );
}

export default App;
