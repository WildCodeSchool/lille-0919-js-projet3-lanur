import React from 'react';
import Form from "./components/Form";
import GameChoice from "./components/GameChoice";
import GameList from "./components/GameList";
import ScrollButton from "./components/ScrollButton";



function App() {
  return (
    <div className="App">
      <Form />
      <div className="bigGamePage">
        <ScrollButton />
      <div className="gamePage">
      {GameList.map ((game) => {
      return (<GameChoice name={game.name} picture={game.picture} click={game.click} />)})}
      </div>
      </div>
    </div>)
};


export default App;
