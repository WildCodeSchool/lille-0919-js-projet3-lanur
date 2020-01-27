import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./components/style/ToastContainer.scss";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import SignIn from "./components/SignIn";
import NewsFeed from "./components/NewsFeed";
import SearchResult from "./components/SearchResult";
import UserPage from "./components/UserPage";
import ContainerEditProfile from "./components/EditProfile/ContainerEditProfile";
import Axios from "axios";

function App() {
  const jwt = useSelector(state => state.jwt);
  const checkJWT = component => (jwt ? component : <Redirect to="/signin" />);
  useEffect(() => {
    if (jwt) Axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
  }, [jwt]);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Carousel} />
        <Route exact path="/signin" component={SignIn} />
        <Route path="/newsfeed" render={() => checkJWT(<NewsFeed />)} />
        <Route path="/search" component={SearchResult} />
        <Route path="/userpage/:id" render={() => checkJWT(<UserPage />)} />
        <Route
          path="/editprofile"
          render={() => checkJWT(<ContainerEditProfile />)}
        />
      </Switch>
      <ToastContainer
        position="bottom-left"
        hideProgressBar={true}
        autoClose={5000}
      />
    </div>
  );
}

export default App;
