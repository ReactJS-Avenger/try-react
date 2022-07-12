import React from "react";

import './App.scss'
import LeftDiv from "./components/LeftDiv/LeftDiv";
import RightDiv from "./components/RightDiv/RightDiv";

function App() {
  return (
    <div className="App">
      <RightDiv/>
      <LeftDiv/>
    </div>
  );
}

export default App;
