import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/home/Home'

const App = () => {
  return <>
    <Router>
      <Switch>
        <Route exact path='/' element={Home}/>
      </Switch>
    </Router>
  </>
}

export default App

