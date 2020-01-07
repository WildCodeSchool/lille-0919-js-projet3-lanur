import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import SignIn from "./components/SignIn";
import Form from "./components/Form";
import NewsFeed from "./components/NewsFeed";
import UploadImg from "./components/UploadImg";

function App() {
  return (
    <div className="App">
      <UploadImg />
      {/* <Switch>
        <Route exact path="/" component={NavBar} />
        <Route path="/NewsFeed" component={NavBar} />
      </Switch>
      <Switch>
        <Route exact path="/" component={Carousel} />
        <Route exact path="/Signin" component={SignIn} />
        <Route path="/Signin/Form" component={Form} />
        <Route path="/NewsFeed" component={NewsFeed} />
      </Switch> */}
    </div>
  );
}

export default App;
