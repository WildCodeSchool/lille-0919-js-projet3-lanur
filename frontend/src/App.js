import React from "react";
import "./components/style/reset.css";
import "./App.css";
import NewsFeed from "./components/NewsFeed";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <NewsFeed />
    </div>
  );
}

export default App;
