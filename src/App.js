import React from "react";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loja from "./example/loja";

const App = () => {
  return (
    <div>
      <Router>
        <Route component={Home} exact path='/' />
        <Route component={Loja} path='/loja' />
      </Router>
    </div>
  );
};

export default App;
