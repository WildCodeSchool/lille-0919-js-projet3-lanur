import React from "react";
import IdForm1 from "./components/IdForm1";
import IdForm2 from "./components/IdForm2";
import IdForm3 from "./components/IdForm3";
import IdForm4 from "./components/IdForm4";
import IdForm5 from "./components/IdForm5";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signIn" component={IdForm1} />
        <Route path="/signIn2" component={IdForm2} />
        <Route path="/signIn3" component={IdForm3} />
        <Route path="/signIn4" component={IdForm4} />
        <Route path="/signIn5" component={IdForm5} />
      </Switch>
      <IdForm1 />
      <IdForm2 />
      <IdForm3 />
      <IdForm4 />
      <IdForm5 />
    </div>
  );
}

export default App;
