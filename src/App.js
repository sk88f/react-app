import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked")}}/>
    </React.Fragment>
  )
}

export default App;
