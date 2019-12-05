import React from "react";
import NewsFeed from "./components/NewsFeed";
import NavBar from "./components/NavBar";
import "./components/style/Reset.css";
import "./App.css";
import LiveContainer from "./components/LiveContainer";


import Postcard from "./components/Postcard";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <NewsFeed /> */}
      <main>
        <div className="timeline">
          <Postcard />
          <Postcard />
          <Postcard />
        </div>
        <div className="timeline">
          <LiveContainer />
        </div>
      </main>
    </div>
  );
}

export default App;
