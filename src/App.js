import React from 'react'
import './App.css'
import Home from './pages/home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Professionals from './pages/professionals'
import Admin from './pages/admin'
import Login from './pages/admin/login'
import store from './redux'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route component={Home} exact path="/" />
        <Route component={Professionals} path="/professionals/:name" />
        <Route component={Admin} exact path="/admin" />
        <Route component={Login} path="/admin/login" />
      </Router>
    </Provider>
  )
}

export default App
