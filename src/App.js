import React from 'react'
import './App.css'
import Home from './pages/home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Loja from './example/loja'
import Financiamento from './example/financiamento'
import Professionals from './pages/professionals'
import Admin from './pages/admin'
import Login from './pages/admin/login'

const App = () => {
  return (
    <div>
      <Router>
        <Route component={Home} exact path="/" />
        <Route component={Loja} path="/loja" />
        <Route component={Financiamento} path="/financiamento" />
        <Route component={Professionals} path="/professionals" />
        <Route component={Admin} exact path="/admin" />
        <Route component={Login} path="/admin/login" />
      </Router>
    </div>
  )
}

export default App
