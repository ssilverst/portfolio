import React, { useState } from "react";
import Home from "./components/Home";
import Digital from "./components/Digital";
import Route from "./components/Route";
import Tv from "./components/Tv";
const App = () => {

  return (
    <div>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/digital-garden">
        <Digital />
      </Route>
    </div>
  );
};
export default App;
