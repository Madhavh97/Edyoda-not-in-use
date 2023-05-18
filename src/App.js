import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LeftContent from "./components/LeftContent/LeftContent";
import RightContent from "./components/RightContent/RightContent";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
};
export default App;
