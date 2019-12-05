import React from "react";
import NewsFeed from "./components/NewsFeed";
import NavBar from "./components/NavBar";
import "./components/style/Reset.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <NewsFeed />
    </div>
  );
}

export default App;
