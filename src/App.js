import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      {/* <Landing /> */}
      <Routes>
        {/* <Home /> */}
        <Route path="/signin" element={<Landing/>} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Nav /> */}
      {/* <Banner /> */}
    </div>
  );
}

export default App;
