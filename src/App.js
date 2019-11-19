import React from "react";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loja from "./example/loja";
import Financiamento from "./example/financiamento";

const App = () => {
  return (
    <div>
      <Router>
        <Route component={Home} exact path='/' />
        <Route component={Loja} path='/loja' />
        <Route component={Financiamento} path='/financiamento' />
      </Router>
    </div>
  );
};

export default App;
