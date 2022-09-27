import React from "react";
import ReactDOM from "react-dom";
import Komponent from "remode/Komponent";
import "./index.css";

const App = () => (
  <div className="container">

    <div>Name:host</div>
    <div> Trwają prace nad funkcajmi</div>
    <Komponent/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
