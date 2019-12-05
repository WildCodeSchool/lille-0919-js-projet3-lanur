import React from "react";
import NewsFeed from "./components/NewsFeed";
import NavBar from "./components/NavBar";
import "./components/style/Reset.css";
import Postcard from "./components/Postcard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <NewsFeed />
      <Postcard />
      <Postcard />
      <Postcard />


    </div>
  );
}

export default App;
