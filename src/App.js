import React from "react";
import "./App.css";
import PlayListReact from "./components/PlayListReact";
import PlayListRedux from "./components/PlayListRedux";

function App() {
  return (
    <div className="App">
      {/* <PlayListReact /> */}
      <PlayListRedux />
    </div>
  );
}

export default App;
