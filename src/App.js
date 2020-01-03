import React from "react";
import "./App.css";


const App = () => {
  return (
    <React.Fragment>
      <User name={"Taro"} age={20}/>
      <User name={"Jiro"} age={15}/>
    </React.Fragment>
  );
};

const User = (props) => {
return <div>I am {props.name}, {props.age} years old.</div>;
};

export default App;
